import React from "react";
import voteImg from "../assets/voteImg.png";

const HowToBuy = () => {
  return (
    <div className="howto w-full h-fit mt-[50px] overflow-hidden">
      <h1 className="text-center text-[60px] font-Rajdhani font-bold leading-none">
        How To Buy
      </h1>

      <p className="w-[70%] mt-[20px] mx-auto text-center text-[28px] font-[500] leading-[36px] font-MavenPro">
        Welcome to the VottCoin revolution! Here’s a simple guide to help you
        get your hands on VottCoin tokens and start participating in the most
        exciting election game in the crypto world.
      </p>

      <div className="mt-[100px] px-[20px] xmd:px-[60px]">
        <div className="flex justify-center gap-[30px]">
          <img className="shrink-0 h-fit w-[400px]" src={voteImg} alt="vote" />

          <div className="item w-[340px] h-full">
            <div>
              <div className="h-[33px] w-[5px] bg-[#3C2974]" />
              <p>Step 1: Set Up a Wallet</p>
            </div>

            <ul>
              <li>
                Get big, quick. Solana is made to handle thousands of
                transactions per second, and fees for both developers and users
                remain less than $0.0025.
              </li>
              <li>Choose a compatible wallet like MetaMask or Trust Wallet.</li>
              <li>Download and install the wallet extension or app.</li>
              <li>Create a new wallet and securely store your seed phrase.</li>
            </ul>
          </div>

          <div className="item w-[340px] h-full">
            <div>
              <div className="h-[33px] w-[5px] bg-[#45DDFF]" />
              <p>Step 2: Fund Your Wallet</p>
            </div>

            <ul>
              <li>
                Add funds to your wallet. You’ll need to purchase cryptocurrency
                (e.g., ETH or BNB) to buy VottCoin tokens.
              </li>
              <li>
                You can buy these cryptocurrencies directly through your wallet
                using available payment options (credit card, bank transfer,
                etc.).
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-[30px] flex items-end justify-center gap-[30px]">
          <div className="item w-[340px] h-fit">
            <div>
              <div className="h-[33px] w-[5px] bg-[#FFC227]" />
              <p>Step 5: Claim Your Tokens</p>
            </div>

            <ul>
              <li>
                After the presale ends, you’ll be able to claim your VottCoin
                tokens directly from our website.
              </li>
              <li>
                Follow the instructions on the "Claim Tokens" page to add them
                to your wallet.
              </li>
            </ul>
          </div>

          <div className="item w-[340px] h-fit">
            <div>
              <div className="h-[33px] w-[5px] bg-[#1FF17E]" />
              <p>Step 3: Connect Your Wallet</p>
            </div>

            <ul>
              <li>
                Visit our official website and click on the "Connect Wallet"
                button.
              </li>
              <li>Select your wallet provider and authorize the connection.</li>
            </ul>
          </div>

          <div className="item w-[340px] h-fit">
            <div>
              <div className="h-[33px] w-[5px] bg-[#FFC227]" />
              <p>Step 4: Purchase VottCoin Tokens</p>
            </div>

            <ul>
              <li>Navigate to the "Presale" page on our website.</li>
              <li>
                Enter the amount of cryptocurrency you want to spend, and the
                system will calculate the equivalent VottCoin tokens.
              </li>
              <li>Confirm the transaction in your wallet.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToBuy;
