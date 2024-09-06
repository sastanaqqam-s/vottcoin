/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { connection } from '../helper/constants';
import * as dotenv from "dotenv";
dotenv.config();

import {
  Keypair,
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  SYSVAR_RENT_PUBKEY,
  Transaction,
  TransactionInstruction,
} from "@solana/web3.js";
import BN from "bn.js";
import { checkAccountInitialized, checkAccountDataIsValid, createAccountInfo, updateEnv } from "./utils";

import {
  TokenSaleAccountLayout,
  TokenSaleAccountLayoutInterface,
  ExpectedTokenSaleAccountLayoutInterface,
} from "./account";
import { AccountLayout, createInitializeAccountInstruction, createTransferInstruction, TOKEN_PROGRAM_ID } from "@solana/spl-token";

type InstructionNumber = 0 | 1 | 2 | 3;

export default async function transaction() {
  console.log("2. Start Token Sale");

  //phase1 (setup Transaction & send Transaction)
  console.log("Setup Transaction");
  const tokenSaleProgramId = new PublicKey(process.env.CUSTOM_PROGRAM_ID!);
  const sellerPubkey = new PublicKey(process.env.SELLER_PUBLIC_KEY!);
  const sellerPrivateKey = Uint8Array.from(JSON.parse(process.env.SELLER_PRIVATE_KEY!));
  const sellerKeypair = new Keypair({
    publicKey: sellerPubkey.toBytes(),
    secretKey: sellerPrivateKey,
  });
  const tokenMintAccountPubkey = new PublicKey(process.env.TOKEN_PUBKEY!);
  const sellerTokenAccountPubkey = new PublicKey(process.env.SELLER_TOKEN_ACCOUNT_PUBKEY!);

  console.log("sellerTokenAccountPubkey: ", sellerTokenAccountPubkey.toBase58());
  const instruction: InstructionNumber = 0;
  const sellerTokenBalance = await connection.getTokenAccountBalance(sellerTokenAccountPubkey, "confirmed");
  const NUMBER_OF_DECIMALS = sellerTokenBalance.value.decimals;
  const amountOfTokenWantToSale = 1000;
  const perTokenPrice = 0.0001 * LAMPORTS_PER_SOL;

  const tempTokenAccountKeypair = new Keypair();
  const createTempTokenAccountIx = SystemProgram.createAccount({
    fromPubkey: sellerPubkey,
    newAccountPubkey: tempTokenAccountKeypair.publicKey,
    lamports: await connection.getMinimumBalanceForRentExemption(AccountLayout.span),
    space: AccountLayout.span,
    programId: TOKEN_PROGRAM_ID,
  });

  const initTempTokenAccountIx = createInitializeAccountInstruction(
    tempTokenAccountKeypair.publicKey,
    tokenMintAccountPubkey,
    sellerPubkey
  );

  const transferTokenToTempTokenAccountIx = createTransferInstruction(
    sellerTokenAccountPubkey,
    tempTokenAccountKeypair.publicKey,
    sellerPubkey,
    amountOfTokenWantToSale * 10 ** NUMBER_OF_DECIMALS
  );

  const tokenSaleProgramAccountKeypair = new Keypair();
  const createTokenSaleProgramAccountIx = SystemProgram.createAccount({
    fromPubkey: sellerPubkey,
    newAccountPubkey: tokenSaleProgramAccountKeypair.publicKey,
    lamports: await connection.getMinimumBalanceForRentExemption(TokenSaleAccountLayout.span),
    space: TokenSaleAccountLayout.span,
    programId: tokenSaleProgramId,
  });

  const initTokenSaleProgramIx = new TransactionInstruction({
    programId: tokenSaleProgramId,
    keys: [
      createAccountInfo(sellerPubkey, true, false),
      createAccountInfo(tempTokenAccountKeypair.publicKey, false, true),
      createAccountInfo(tokenSaleProgramAccountKeypair.publicKey, false, true),
      createAccountInfo(SYSVAR_RENT_PUBKEY, false, false),
      createAccountInfo(TOKEN_PROGRAM_ID, false, false),
    ],
    data: Buffer.from(Uint8Array.of(instruction, ...new BN(perTokenPrice).toArray("le", 8))),
  });

  //make transaction with several instructions(ix)
  console.log("Send transaction...\n");
  const tx = new Transaction().add(
    createTempTokenAccountIx,
    initTempTokenAccountIx,
    transferTokenToTempTokenAccountIx,
    createTokenSaleProgramAccountIx,
    initTokenSaleProgramIx
  );

  await connection.sendTransaction(tx, [sellerKeypair, tempTokenAccountKeypair, tokenSaleProgramAccountKeypair], {
    skipPreflight: false,
    preflightCommitment: "confirmed",
  });
  //phase1 end

  //wait block update
  await new Promise((resolve) => setTimeout(resolve, 2000));

  //phase2 (check Transaction result is valid)
  const tokenSaleProgramAccount = await checkAccountInitialized(connection, tokenSaleProgramAccountKeypair.publicKey);

  const encodedTokenSaleProgramAccountData = tokenSaleProgramAccount.data;
  const decodedTokenSaleProgramAccountData = TokenSaleAccountLayout.decode(
    encodedTokenSaleProgramAccountData
  ) as TokenSaleAccountLayoutInterface;

  const expectedTokenSaleProgramAccountData: ExpectedTokenSaleAccountLayoutInterface = {
    isInitialized: 1,
    sellerPubkey: sellerPubkey,
    tempTokenAccountPubkey: tempTokenAccountKeypair.publicKey,
    pricePerToken: perTokenPrice,
  };

  console.log("Current TokenSaleProgramAccountData");
  checkAccountDataIsValid(decodedTokenSaleProgramAccountData, expectedTokenSaleProgramAccountData);

  console.table([
    {
      tokenSaleProgramAccountPubkey: tokenSaleProgramAccountKeypair.publicKey.toString(),
    },
  ]);
  console.log(`✨TX successfully finished✨\n`);
  //#phase2 end

  process.env.TOKEN_SALE_PROGRAM_ACCOUNT_PUBKEY = tokenSaleProgramAccountKeypair.publicKey.toString();
  process.env.TEMP_TOKEN_ACCOUNT_PUBKEY = tempTokenAccountKeypair.publicKey.toString();
  updateEnv();
};
