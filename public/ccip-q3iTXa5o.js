import { B as p, g as m, s as y, d as k, i as b, c as E, a as L, b as O, H as h, f as x } from "./index-C8aEsj0u.js";
class M extends p {
  constructor({ callbackSelector: r, cause: e, data: o, extraData: c, sender: d, urls: a }) {
    var i;
    super(e.shortMessage || "An error occurred while fetching for an offchain result.", {
      cause: e,
      metaMessages: [
        ...e.metaMessages || [],
        (i = e.metaMessages) != null && i.length ? "" : [],
        "Offchain Gateway Call:",
        a && [
          "  Gateway URL(s):",
          ...a.map((f) => `    ${m(f)}`)
        ],
        `  Sender: ${d}`,
        `  Data: ${o}`,
        `  Callback selector: ${r}`,
        `  Extra data: ${c}`
      ].flat(),
      name: "OffchainLookupError"
    });
  }
}
class R extends p {
  constructor({ result: r, url: e }) {
    super("Offchain gateway response is malformed. Response data must be a hex value.", {
      metaMessages: [
        `Gateway URL: ${m(e)}`,
        `Response: ${y(r)}`
      ],
      name: "OffchainLookupResponseMalformedError"
    });
  }
}
class $ extends p {
  constructor({ sender: r, to: e }) {
    super("Reverted sender address does not match target contract address (`to`).", {
      metaMessages: [
        `Contract address: ${e}`,
        `OffchainLookup sender address: ${r}`
      ],
      name: "OffchainLookupSenderMismatchError"
    });
  }
}
const D = "0x556f1830", S = {
  name: "OffchainLookup",
  type: "error",
  inputs: [
    {
      name: "sender",
      type: "address"
    },
    {
      name: "urls",
      type: "string[]"
    },
    {
      name: "callData",
      type: "bytes"
    },
    {
      name: "callbackFunction",
      type: "bytes4"
    },
    {
      name: "extraData",
      type: "bytes"
    }
  ]
};
async function T(n, { blockNumber: r, blockTag: e, data: o, to: c }) {
  const { args: d } = k({
    data: o,
    abi: [S]
  }), [a, i, f, t, s] = d, { ccipRead: u } = n, g = u && typeof (u == null ? void 0 : u.request) == "function" ? u.request : q;
  try {
    if (!b(c, a))
      throw new $({ sender: a, to: c });
    const l = await g({ data: f, sender: a, urls: i }), { data: w } = await E(n, {
      blockNumber: r,
      blockTag: e,
      data: L([
        t,
        O([{ type: "bytes" }, { type: "bytes" }], [l, s])
      ]),
      to: c
    });
    return w;
  } catch (l) {
    throw new M({
      callbackSelector: t,
      cause: l,
      data: o,
      extraData: s,
      sender: a,
      urls: i
    });
  }
}
async function q({ data: n, sender: r, urls: e }) {
  var c;
  let o = new Error("An unknown error occurred.");
  for (let d = 0; d < e.length; d++) {
    const a = e[d], i = a.includes("{data}") ? "GET" : "POST", f = i === "POST" ? { data: n, sender: r } : void 0;
    try {
      const t = await fetch(a.replace("{sender}", r).replace("{data}", n), {
        body: JSON.stringify(f),
        method: i
      });
      let s;
      if ((c = t.headers.get("Content-Type")) != null && c.startsWith("application/json") ? s = (await t.json()).data : s = await t.text(), !t.ok) {
        o = new h({
          body: f,
          details: s != null && s.error ? y(s.error) : t.statusText,
          headers: t.headers,
          status: t.status,
          url: a
        });
        continue;
      }
      if (!x(s)) {
        o = new R({
          result: s,
          url: a
        });
        continue;
      }
      return s;
    } catch (t) {
      o = new h({
        body: f,
        details: t.message,
        url: a
      });
    }
  }
  throw o;
}
export {
  q as ccipRequest,
  T as offchainLookup,
  S as offchainLookupAbiItem,
  D as offchainLookupSignature
};
