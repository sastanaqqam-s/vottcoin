import { E as Ar, j as wr, k as Oe } from "./index-DTDzzBSh.js";
import { e as oi, r as ai, i as xe } from "./inherits_browser-BjanR9oe.js";
const Yi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  EventEmitter: Ar,
  default: Ar
}, Symbol.toStringTag, { value: "Module" })), fa = /* @__PURE__ */ wr(Yi);
var ur = { exports: {} }, fi = oi.EventEmitter, Ye = {}, at = {};
at.byteLength = Ji;
at.toByteArray = Qi;
at.fromByteArray = rn;
var Se = [], _e = [], Ki = typeof Uint8Array < "u" ? Uint8Array : Array, Zt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var Pe = 0, Xi = Zt.length; Pe < Xi; ++Pe)
  Se[Pe] = Zt[Pe], _e[Zt.charCodeAt(Pe)] = Pe;
_e[45] = 62;
_e[95] = 63;
function si(e) {
  var t = e.length;
  if (t % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var n = e.indexOf("=");
  n === -1 && (n = t);
  var a = n === t ? 0 : 4 - n % 4;
  return [n, a];
}
function Ji(e) {
  var t = si(e), n = t[0], a = t[1];
  return (n + a) * 3 / 4 - a;
}
function Zi(e, t, n) {
  return (t + n) * 3 / 4 - n;
}
function Qi(e) {
  var t, n = si(e), a = n[0], s = n[1], c = new Ki(Zi(e, a, s)), _ = 0, f = s > 0 ? a - 4 : a, b;
  for (b = 0; b < f; b += 4)
    t = _e[e.charCodeAt(b)] << 18 | _e[e.charCodeAt(b + 1)] << 12 | _e[e.charCodeAt(b + 2)] << 6 | _e[e.charCodeAt(b + 3)], c[_++] = t >> 16 & 255, c[_++] = t >> 8 & 255, c[_++] = t & 255;
  return s === 2 && (t = _e[e.charCodeAt(b)] << 2 | _e[e.charCodeAt(b + 1)] >> 4, c[_++] = t & 255), s === 1 && (t = _e[e.charCodeAt(b)] << 10 | _e[e.charCodeAt(b + 1)] << 4 | _e[e.charCodeAt(b + 2)] >> 2, c[_++] = t >> 8 & 255, c[_++] = t & 255), c;
}
function en(e) {
  return Se[e >> 18 & 63] + Se[e >> 12 & 63] + Se[e >> 6 & 63] + Se[e & 63];
}
function tn(e, t, n) {
  for (var a, s = [], c = t; c < n; c += 3)
    a = (e[c] << 16 & 16711680) + (e[c + 1] << 8 & 65280) + (e[c + 2] & 255), s.push(en(a));
  return s.join("");
}
function rn(e) {
  for (var t, n = e.length, a = n % 3, s = [], c = 16383, _ = 0, f = n - a; _ < f; _ += c)
    s.push(tn(e, _, _ + c > f ? f : _ + c));
  return a === 1 ? (t = e[n - 1], s.push(
    Se[t >> 2] + Se[t << 4 & 63] + "=="
  )) : a === 2 && (t = (e[n - 2] << 8) + e[n - 1], s.push(
    Se[t >> 10] + Se[t >> 4 & 63] + Se[t << 2 & 63] + "="
  )), s.join("");
}
var xr = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
xr.read = function(e, t, n, a, s) {
  var c, _, f = s * 8 - a - 1, b = (1 << f) - 1, v = b >> 1, B = -7, y = n ? s - 1 : 0, T = n ? -1 : 1, m = e[t + y];
  for (y += T, c = m & (1 << -B) - 1, m >>= -B, B += f; B > 0; c = c * 256 + e[t + y], y += T, B -= 8)
    ;
  for (_ = c & (1 << -B) - 1, c >>= -B, B += a; B > 0; _ = _ * 256 + e[t + y], y += T, B -= 8)
    ;
  if (c === 0)
    c = 1 - v;
  else {
    if (c === b)
      return _ ? NaN : (m ? -1 : 1) * (1 / 0);
    _ = _ + Math.pow(2, a), c = c - v;
  }
  return (m ? -1 : 1) * _ * Math.pow(2, c - a);
};
xr.write = function(e, t, n, a, s, c) {
  var _, f, b, v = c * 8 - s - 1, B = (1 << v) - 1, y = B >> 1, T = s === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, m = a ? 0 : c - 1, k = a ? 1 : -1, U = t < 0 || t === 0 && 1 / t < 0 ? 1 : 0;
  for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (f = isNaN(t) ? 1 : 0, _ = B) : (_ = Math.floor(Math.log(t) / Math.LN2), t * (b = Math.pow(2, -_)) < 1 && (_--, b *= 2), _ + y >= 1 ? t += T / b : t += T * Math.pow(2, 1 - y), t * b >= 2 && (_++, b /= 2), _ + y >= B ? (f = 0, _ = B) : _ + y >= 1 ? (f = (t * b - 1) * Math.pow(2, s), _ = _ + y) : (f = t * Math.pow(2, y - 1) * Math.pow(2, s), _ = 0)); s >= 8; e[n + m] = f & 255, m += k, f /= 256, s -= 8)
    ;
  for (_ = _ << s | f, v += s; v > 0; e[n + m] = _ & 255, m += k, _ /= 256, v -= 8)
    ;
  e[n + m - k] |= U * 128;
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(e) {
  const t = at, n = xr, a = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  e.Buffer = f, e.SlowBuffer = E, e.INSPECT_MAX_BYTES = 50;
  const s = 2147483647;
  e.kMaxLength = s, f.TYPED_ARRAY_SUPPORT = c(), !f.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error(
    "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
  );
  function c() {
    try {
      const o = new Uint8Array(1), r = { foo: function() {
        return 42;
      } };
      return Object.setPrototypeOf(r, Uint8Array.prototype), Object.setPrototypeOf(o, r), o.foo() === 42;
    } catch {
      return !1;
    }
  }
  Object.defineProperty(f.prototype, "parent", {
    enumerable: !0,
    get: function() {
      if (f.isBuffer(this))
        return this.buffer;
    }
  }), Object.defineProperty(f.prototype, "offset", {
    enumerable: !0,
    get: function() {
      if (f.isBuffer(this))
        return this.byteOffset;
    }
  });
  function _(o) {
    if (o > s)
      throw new RangeError('The value "' + o + '" is invalid for option "size"');
    const r = new Uint8Array(o);
    return Object.setPrototypeOf(r, f.prototype), r;
  }
  function f(o, r, i) {
    if (typeof o == "number") {
      if (typeof r == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      return y(o);
    }
    return b(o, r, i);
  }
  f.poolSize = 8192;
  function b(o, r, i) {
    if (typeof o == "string")
      return T(o, r);
    if (ArrayBuffer.isView(o))
      return k(o);
    if (o == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof o
      );
    if (se(o, ArrayBuffer) || o && se(o.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (se(o, SharedArrayBuffer) || o && se(o.buffer, SharedArrayBuffer)))
      return U(o, r, i);
    if (typeof o == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    const u = o.valueOf && o.valueOf();
    if (u != null && u !== o)
      return f.from(u, r, i);
    const p = C(o);
    if (p)
      return p;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof o[Symbol.toPrimitive] == "function")
      return f.from(o[Symbol.toPrimitive]("string"), r, i);
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof o
    );
  }
  f.from = function(o, r, i) {
    return b(o, r, i);
  }, Object.setPrototypeOf(f.prototype, Uint8Array.prototype), Object.setPrototypeOf(f, Uint8Array);
  function v(o) {
    if (typeof o != "number")
      throw new TypeError('"size" argument must be of type number');
    if (o < 0)
      throw new RangeError('The value "' + o + '" is invalid for option "size"');
  }
  function B(o, r, i) {
    return v(o), o <= 0 ? _(o) : r !== void 0 ? typeof i == "string" ? _(o).fill(r, i) : _(o).fill(r) : _(o);
  }
  f.alloc = function(o, r, i) {
    return B(o, r, i);
  };
  function y(o) {
    return v(o), _(o < 0 ? 0 : d(o) | 0);
  }
  f.allocUnsafe = function(o) {
    return y(o);
  }, f.allocUnsafeSlow = function(o) {
    return y(o);
  };
  function T(o, r) {
    if ((typeof r != "string" || r === "") && (r = "utf8"), !f.isEncoding(r))
      throw new TypeError("Unknown encoding: " + r);
    const i = I(o, r) | 0;
    let u = _(i);
    const p = u.write(o, r);
    return p !== i && (u = u.slice(0, p)), u;
  }
  function m(o) {
    const r = o.length < 0 ? 0 : d(o.length) | 0, i = _(r);
    for (let u = 0; u < r; u += 1)
      i[u] = o[u] & 255;
    return i;
  }
  function k(o) {
    if (se(o, Uint8Array)) {
      const r = new Uint8Array(o);
      return U(r.buffer, r.byteOffset, r.byteLength);
    }
    return m(o);
  }
  function U(o, r, i) {
    if (r < 0 || o.byteLength < r)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (o.byteLength < r + (i || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    let u;
    return r === void 0 && i === void 0 ? u = new Uint8Array(o) : i === void 0 ? u = new Uint8Array(o, r) : u = new Uint8Array(o, r, i), Object.setPrototypeOf(u, f.prototype), u;
  }
  function C(o) {
    if (f.isBuffer(o)) {
      const r = d(o.length) | 0, i = _(r);
      return i.length === 0 || o.copy(i, 0, 0, r), i;
    }
    if (o.length !== void 0)
      return typeof o.length != "number" || Ee(o.length) ? _(0) : m(o);
    if (o.type === "Buffer" && Array.isArray(o.data))
      return m(o.data);
  }
  function d(o) {
    if (o >= s)
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s.toString(16) + " bytes");
    return o | 0;
  }
  function E(o) {
    return +o != o && (o = 0), f.alloc(+o);
  }
  f.isBuffer = function(r) {
    return r != null && r._isBuffer === !0 && r !== f.prototype;
  }, f.compare = function(r, i) {
    if (se(r, Uint8Array) && (r = f.from(r, r.offset, r.byteLength)), se(i, Uint8Array) && (i = f.from(i, i.offset, i.byteLength)), !f.isBuffer(r) || !f.isBuffer(i))
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
      );
    if (r === i)
      return 0;
    let u = r.length, p = i.length;
    for (let x = 0, S = Math.min(u, p); x < S; ++x)
      if (r[x] !== i[x]) {
        u = r[x], p = i[x];
        break;
      }
    return u < p ? -1 : p < u ? 1 : 0;
  }, f.isEncoding = function(r) {
    switch (String(r).toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return !0;
      default:
        return !1;
    }
  }, f.concat = function(r, i) {
    if (!Array.isArray(r))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (r.length === 0)
      return f.alloc(0);
    let u;
    if (i === void 0)
      for (i = 0, u = 0; u < r.length; ++u)
        i += r[u].length;
    const p = f.allocUnsafe(i);
    let x = 0;
    for (u = 0; u < r.length; ++u) {
      let S = r[u];
      if (se(S, Uint8Array))
        x + S.length > p.length ? (f.isBuffer(S) || (S = f.from(S)), S.copy(p, x)) : Uint8Array.prototype.set.call(
          p,
          S,
          x
        );
      else if (f.isBuffer(S))
        S.copy(p, x);
      else
        throw new TypeError('"list" argument must be an Array of Buffers');
      x += S.length;
    }
    return p;
  };
  function I(o, r) {
    if (f.isBuffer(o))
      return o.length;
    if (ArrayBuffer.isView(o) || se(o, ArrayBuffer))
      return o.byteLength;
    if (typeof o != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof o
      );
    const i = o.length, u = arguments.length > 2 && arguments[2] === !0;
    if (!u && i === 0)
      return 0;
    let p = !1;
    for (; ; )
      switch (r) {
        case "ascii":
        case "latin1":
        case "binary":
          return i;
        case "utf8":
        case "utf-8":
          return j(o).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return i * 2;
        case "hex":
          return i >>> 1;
        case "base64":
          return Ce(o).length;
        default:
          if (p)
            return u ? -1 : j(o).length;
          r = ("" + r).toLowerCase(), p = !0;
      }
  }
  f.byteLength = I;
  function F(o, r, i) {
    let u = !1;
    if ((r === void 0 || r < 0) && (r = 0), r > this.length || ((i === void 0 || i > this.length) && (i = this.length), i <= 0) || (i >>>= 0, r >>>= 0, i <= r))
      return "";
    for (o || (o = "utf8"); ; )
      switch (o) {
        case "hex":
          return he(this, r, i);
        case "utf8":
        case "utf-8":
          return oe(this, r, i);
        case "ascii":
          return le(this, r, i);
        case "latin1":
        case "binary":
          return ye(this, r, i);
        case "base64":
          return te(this, r, i);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return be(this, r, i);
        default:
          if (u)
            throw new TypeError("Unknown encoding: " + o);
          o = (o + "").toLowerCase(), u = !0;
      }
  }
  f.prototype._isBuffer = !0;
  function M(o, r, i) {
    const u = o[r];
    o[r] = o[i], o[i] = u;
  }
  f.prototype.swap16 = function() {
    const r = this.length;
    if (r % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let i = 0; i < r; i += 2)
      M(this, i, i + 1);
    return this;
  }, f.prototype.swap32 = function() {
    const r = this.length;
    if (r % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let i = 0; i < r; i += 4)
      M(this, i, i + 3), M(this, i + 1, i + 2);
    return this;
  }, f.prototype.swap64 = function() {
    const r = this.length;
    if (r % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let i = 0; i < r; i += 8)
      M(this, i, i + 7), M(this, i + 1, i + 6), M(this, i + 2, i + 5), M(this, i + 3, i + 4);
    return this;
  }, f.prototype.toString = function() {
    const r = this.length;
    return r === 0 ? "" : arguments.length === 0 ? oe(this, 0, r) : F.apply(this, arguments);
  }, f.prototype.toLocaleString = f.prototype.toString, f.prototype.equals = function(r) {
    if (!f.isBuffer(r))
      throw new TypeError("Argument must be a Buffer");
    return this === r ? !0 : f.compare(this, r) === 0;
  }, f.prototype.inspect = function() {
    let r = "";
    const i = e.INSPECT_MAX_BYTES;
    return r = this.toString("hex", 0, i).replace(/(.{2})/g, "$1 ").trim(), this.length > i && (r += " ... "), "<Buffer " + r + ">";
  }, a && (f.prototype[a] = f.prototype.inspect), f.prototype.compare = function(r, i, u, p, x) {
    if (se(r, Uint8Array) && (r = f.from(r, r.offset, r.byteLength)), !f.isBuffer(r))
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof r
      );
    if (i === void 0 && (i = 0), u === void 0 && (u = r ? r.length : 0), p === void 0 && (p = 0), x === void 0 && (x = this.length), i < 0 || u > r.length || p < 0 || x > this.length)
      throw new RangeError("out of range index");
    if (p >= x && i >= u)
      return 0;
    if (p >= x)
      return -1;
    if (i >= u)
      return 1;
    if (i >>>= 0, u >>>= 0, p >>>= 0, x >>>= 0, this === r)
      return 0;
    let S = x - p, q = u - i;
    const J = Math.min(S, q), G = this.slice(p, x), Z = r.slice(i, u);
    for (let z = 0; z < J; ++z)
      if (G[z] !== Z[z]) {
        S = G[z], q = Z[z];
        break;
      }
    return S < q ? -1 : q < S ? 1 : 0;
  };
  function L(o, r, i, u, p) {
    if (o.length === 0)
      return -1;
    if (typeof i == "string" ? (u = i, i = 0) : i > 2147483647 ? i = 2147483647 : i < -2147483648 && (i = -2147483648), i = +i, Ee(i) && (i = p ? 0 : o.length - 1), i < 0 && (i = o.length + i), i >= o.length) {
      if (p)
        return -1;
      i = o.length - 1;
    } else if (i < 0)
      if (p)
        i = 0;
      else
        return -1;
    if (typeof r == "string" && (r = f.from(r, u)), f.isBuffer(r))
      return r.length === 0 ? -1 : W(o, r, i, u, p);
    if (typeof r == "number")
      return r = r & 255, typeof Uint8Array.prototype.indexOf == "function" ? p ? Uint8Array.prototype.indexOf.call(o, r, i) : Uint8Array.prototype.lastIndexOf.call(o, r, i) : W(o, [r], i, u, p);
    throw new TypeError("val must be string, number or Buffer");
  }
  function W(o, r, i, u, p) {
    let x = 1, S = o.length, q = r.length;
    if (u !== void 0 && (u = String(u).toLowerCase(), u === "ucs2" || u === "ucs-2" || u === "utf16le" || u === "utf-16le")) {
      if (o.length < 2 || r.length < 2)
        return -1;
      x = 2, S /= 2, q /= 2, i /= 2;
    }
    function J(Z, z) {
      return x === 1 ? Z[z] : Z.readUInt16BE(z * x);
    }
    let G;
    if (p) {
      let Z = -1;
      for (G = i; G < S; G++)
        if (J(o, G) === J(r, Z === -1 ? 0 : G - Z)) {
          if (Z === -1 && (Z = G), G - Z + 1 === q)
            return Z * x;
        } else
          Z !== -1 && (G -= G - Z), Z = -1;
    } else
      for (i + q > S && (i = S - q), G = i; G >= 0; G--) {
        let Z = !0;
        for (let z = 0; z < q; z++)
          if (J(o, G + z) !== J(r, z)) {
            Z = !1;
            break;
          }
        if (Z)
          return G;
      }
    return -1;
  }
  f.prototype.includes = function(r, i, u) {
    return this.indexOf(r, i, u) !== -1;
  }, f.prototype.indexOf = function(r, i, u) {
    return L(this, r, i, u, !0);
  }, f.prototype.lastIndexOf = function(r, i, u) {
    return L(this, r, i, u, !1);
  };
  function O(o, r, i, u) {
    i = Number(i) || 0;
    const p = o.length - i;
    u ? (u = Number(u), u > p && (u = p)) : u = p;
    const x = r.length;
    u > x / 2 && (u = x / 2);
    let S;
    for (S = 0; S < u; ++S) {
      const q = parseInt(r.substr(S * 2, 2), 16);
      if (Ee(q))
        return S;
      o[i + S] = q;
    }
    return S;
  }
  function P(o, r, i, u) {
    return Re(j(r, o.length - i), o, i, u);
  }
  function V(o, r, i, u) {
    return Re(we(r), o, i, u);
  }
  function ne(o, r, i, u) {
    return Re(Ce(r), o, i, u);
  }
  function pe(o, r, i, u) {
    return Re(Be(r, o.length - i), o, i, u);
  }
  f.prototype.write = function(r, i, u, p) {
    if (i === void 0)
      p = "utf8", u = this.length, i = 0;
    else if (u === void 0 && typeof i == "string")
      p = i, u = this.length, i = 0;
    else if (isFinite(i))
      i = i >>> 0, isFinite(u) ? (u = u >>> 0, p === void 0 && (p = "utf8")) : (p = u, u = void 0);
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    const x = this.length - i;
    if ((u === void 0 || u > x) && (u = x), r.length > 0 && (u < 0 || i < 0) || i > this.length)
      throw new RangeError("Attempt to write outside buffer bounds");
    p || (p = "utf8");
    let S = !1;
    for (; ; )
      switch (p) {
        case "hex":
          return O(this, r, i, u);
        case "utf8":
        case "utf-8":
          return P(this, r, i, u);
        case "ascii":
        case "latin1":
        case "binary":
          return V(this, r, i, u);
        case "base64":
          return ne(this, r, i, u);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return pe(this, r, i, u);
        default:
          if (S)
            throw new TypeError("Unknown encoding: " + p);
          p = ("" + p).toLowerCase(), S = !0;
      }
  }, f.prototype.toJSON = function() {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function te(o, r, i) {
    return r === 0 && i === o.length ? t.fromByteArray(o) : t.fromByteArray(o.slice(r, i));
  }
  function oe(o, r, i) {
    i = Math.min(o.length, i);
    const u = [];
    let p = r;
    for (; p < i; ) {
      const x = o[p];
      let S = null, q = x > 239 ? 4 : x > 223 ? 3 : x > 191 ? 2 : 1;
      if (p + q <= i) {
        let J, G, Z, z;
        switch (q) {
          case 1:
            x < 128 && (S = x);
            break;
          case 2:
            J = o[p + 1], (J & 192) === 128 && (z = (x & 31) << 6 | J & 63, z > 127 && (S = z));
            break;
          case 3:
            J = o[p + 1], G = o[p + 2], (J & 192) === 128 && (G & 192) === 128 && (z = (x & 15) << 12 | (J & 63) << 6 | G & 63, z > 2047 && (z < 55296 || z > 57343) && (S = z));
            break;
          case 4:
            J = o[p + 1], G = o[p + 2], Z = o[p + 3], (J & 192) === 128 && (G & 192) === 128 && (Z & 192) === 128 && (z = (x & 15) << 18 | (J & 63) << 12 | (G & 63) << 6 | Z & 63, z > 65535 && z < 1114112 && (S = z));
        }
      }
      S === null ? (S = 65533, q = 1) : S > 65535 && (S -= 65536, u.push(S >>> 10 & 1023 | 55296), S = 56320 | S & 1023), u.push(S), p += q;
    }
    return ve(u);
  }
  const ae = 4096;
  function ve(o) {
    const r = o.length;
    if (r <= ae)
      return String.fromCharCode.apply(String, o);
    let i = "", u = 0;
    for (; u < r; )
      i += String.fromCharCode.apply(
        String,
        o.slice(u, u += ae)
      );
    return i;
  }
  function le(o, r, i) {
    let u = "";
    i = Math.min(o.length, i);
    for (let p = r; p < i; ++p)
      u += String.fromCharCode(o[p] & 127);
    return u;
  }
  function ye(o, r, i) {
    let u = "";
    i = Math.min(o.length, i);
    for (let p = r; p < i; ++p)
      u += String.fromCharCode(o[p]);
    return u;
  }
  function he(o, r, i) {
    const u = o.length;
    (!r || r < 0) && (r = 0), (!i || i < 0 || i > u) && (i = u);
    let p = "";
    for (let x = r; x < i; ++x)
      p += Fe[o[x]];
    return p;
  }
  function be(o, r, i) {
    const u = o.slice(r, i);
    let p = "";
    for (let x = 0; x < u.length - 1; x += 2)
      p += String.fromCharCode(u[x] + u[x + 1] * 256);
    return p;
  }
  f.prototype.slice = function(r, i) {
    const u = this.length;
    r = ~~r, i = i === void 0 ? u : ~~i, r < 0 ? (r += u, r < 0 && (r = 0)) : r > u && (r = u), i < 0 ? (i += u, i < 0 && (i = 0)) : i > u && (i = u), i < r && (i = r);
    const p = this.subarray(r, i);
    return Object.setPrototypeOf(p, f.prototype), p;
  };
  function Y(o, r, i) {
    if (o % 1 !== 0 || o < 0)
      throw new RangeError("offset is not uint");
    if (o + r > i)
      throw new RangeError("Trying to access beyond buffer length");
  }
  f.prototype.readUintLE = f.prototype.readUIntLE = function(r, i, u) {
    r = r >>> 0, i = i >>> 0, u || Y(r, i, this.length);
    let p = this[r], x = 1, S = 0;
    for (; ++S < i && (x *= 256); )
      p += this[r + S] * x;
    return p;
  }, f.prototype.readUintBE = f.prototype.readUIntBE = function(r, i, u) {
    r = r >>> 0, i = i >>> 0, u || Y(r, i, this.length);
    let p = this[r + --i], x = 1;
    for (; i > 0 && (x *= 256); )
      p += this[r + --i] * x;
    return p;
  }, f.prototype.readUint8 = f.prototype.readUInt8 = function(r, i) {
    return r = r >>> 0, i || Y(r, 1, this.length), this[r];
  }, f.prototype.readUint16LE = f.prototype.readUInt16LE = function(r, i) {
    return r = r >>> 0, i || Y(r, 2, this.length), this[r] | this[r + 1] << 8;
  }, f.prototype.readUint16BE = f.prototype.readUInt16BE = function(r, i) {
    return r = r >>> 0, i || Y(r, 2, this.length), this[r] << 8 | this[r + 1];
  }, f.prototype.readUint32LE = f.prototype.readUInt32LE = function(r, i) {
    return r = r >>> 0, i || Y(r, 4, this.length), (this[r] | this[r + 1] << 8 | this[r + 2] << 16) + this[r + 3] * 16777216;
  }, f.prototype.readUint32BE = f.prototype.readUInt32BE = function(r, i) {
    return r = r >>> 0, i || Y(r, 4, this.length), this[r] * 16777216 + (this[r + 1] << 16 | this[r + 2] << 8 | this[r + 3]);
  }, f.prototype.readBigUInt64LE = ue(function(r) {
    r = r >>> 0, R(r, "offset");
    const i = this[r], u = this[r + 7];
    (i === void 0 || u === void 0) && N(r, this.length - 8);
    const p = i + this[++r] * 2 ** 8 + this[++r] * 2 ** 16 + this[++r] * 2 ** 24, x = this[++r] + this[++r] * 2 ** 8 + this[++r] * 2 ** 16 + u * 2 ** 24;
    return BigInt(p) + (BigInt(x) << BigInt(32));
  }), f.prototype.readBigUInt64BE = ue(function(r) {
    r = r >>> 0, R(r, "offset");
    const i = this[r], u = this[r + 7];
    (i === void 0 || u === void 0) && N(r, this.length - 8);
    const p = i * 2 ** 24 + this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + this[++r], x = this[++r] * 2 ** 24 + this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + u;
    return (BigInt(p) << BigInt(32)) + BigInt(x);
  }), f.prototype.readIntLE = function(r, i, u) {
    r = r >>> 0, i = i >>> 0, u || Y(r, i, this.length);
    let p = this[r], x = 1, S = 0;
    for (; ++S < i && (x *= 256); )
      p += this[r + S] * x;
    return x *= 128, p >= x && (p -= Math.pow(2, 8 * i)), p;
  }, f.prototype.readIntBE = function(r, i, u) {
    r = r >>> 0, i = i >>> 0, u || Y(r, i, this.length);
    let p = i, x = 1, S = this[r + --p];
    for (; p > 0 && (x *= 256); )
      S += this[r + --p] * x;
    return x *= 128, S >= x && (S -= Math.pow(2, 8 * i)), S;
  }, f.prototype.readInt8 = function(r, i) {
    return r = r >>> 0, i || Y(r, 1, this.length), this[r] & 128 ? (255 - this[r] + 1) * -1 : this[r];
  }, f.prototype.readInt16LE = function(r, i) {
    r = r >>> 0, i || Y(r, 2, this.length);
    const u = this[r] | this[r + 1] << 8;
    return u & 32768 ? u | 4294901760 : u;
  }, f.prototype.readInt16BE = function(r, i) {
    r = r >>> 0, i || Y(r, 2, this.length);
    const u = this[r + 1] | this[r] << 8;
    return u & 32768 ? u | 4294901760 : u;
  }, f.prototype.readInt32LE = function(r, i) {
    return r = r >>> 0, i || Y(r, 4, this.length), this[r] | this[r + 1] << 8 | this[r + 2] << 16 | this[r + 3] << 24;
  }, f.prototype.readInt32BE = function(r, i) {
    return r = r >>> 0, i || Y(r, 4, this.length), this[r] << 24 | this[r + 1] << 16 | this[r + 2] << 8 | this[r + 3];
  }, f.prototype.readBigInt64LE = ue(function(r) {
    r = r >>> 0, R(r, "offset");
    const i = this[r], u = this[r + 7];
    (i === void 0 || u === void 0) && N(r, this.length - 8);
    const p = this[r + 4] + this[r + 5] * 2 ** 8 + this[r + 6] * 2 ** 16 + (u << 24);
    return (BigInt(p) << BigInt(32)) + BigInt(i + this[++r] * 2 ** 8 + this[++r] * 2 ** 16 + this[++r] * 2 ** 24);
  }), f.prototype.readBigInt64BE = ue(function(r) {
    r = r >>> 0, R(r, "offset");
    const i = this[r], u = this[r + 7];
    (i === void 0 || u === void 0) && N(r, this.length - 8);
    const p = (i << 24) + // Overflow
    this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + this[++r];
    return (BigInt(p) << BigInt(32)) + BigInt(this[++r] * 2 ** 24 + this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + u);
  }), f.prototype.readFloatLE = function(r, i) {
    return r = r >>> 0, i || Y(r, 4, this.length), n.read(this, r, !0, 23, 4);
  }, f.prototype.readFloatBE = function(r, i) {
    return r = r >>> 0, i || Y(r, 4, this.length), n.read(this, r, !1, 23, 4);
  }, f.prototype.readDoubleLE = function(r, i) {
    return r = r >>> 0, i || Y(r, 8, this.length), n.read(this, r, !0, 52, 8);
  }, f.prototype.readDoubleBE = function(r, i) {
    return r = r >>> 0, i || Y(r, 8, this.length), n.read(this, r, !1, 52, 8);
  };
  function Q(o, r, i, u, p, x) {
    if (!f.isBuffer(o))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (r > p || r < x)
      throw new RangeError('"value" argument is out of bounds');
    if (i + u > o.length)
      throw new RangeError("Index out of range");
  }
  f.prototype.writeUintLE = f.prototype.writeUIntLE = function(r, i, u, p) {
    if (r = +r, i = i >>> 0, u = u >>> 0, !p) {
      const q = Math.pow(2, 8 * u) - 1;
      Q(this, r, i, u, q, 0);
    }
    let x = 1, S = 0;
    for (this[i] = r & 255; ++S < u && (x *= 256); )
      this[i + S] = r / x & 255;
    return i + u;
  }, f.prototype.writeUintBE = f.prototype.writeUIntBE = function(r, i, u, p) {
    if (r = +r, i = i >>> 0, u = u >>> 0, !p) {
      const q = Math.pow(2, 8 * u) - 1;
      Q(this, r, i, u, q, 0);
    }
    let x = u - 1, S = 1;
    for (this[i + x] = r & 255; --x >= 0 && (S *= 256); )
      this[i + x] = r / S & 255;
    return i + u;
  }, f.prototype.writeUint8 = f.prototype.writeUInt8 = function(r, i, u) {
    return r = +r, i = i >>> 0, u || Q(this, r, i, 1, 255, 0), this[i] = r & 255, i + 1;
  }, f.prototype.writeUint16LE = f.prototype.writeUInt16LE = function(r, i, u) {
    return r = +r, i = i >>> 0, u || Q(this, r, i, 2, 65535, 0), this[i] = r & 255, this[i + 1] = r >>> 8, i + 2;
  }, f.prototype.writeUint16BE = f.prototype.writeUInt16BE = function(r, i, u) {
    return r = +r, i = i >>> 0, u || Q(this, r, i, 2, 65535, 0), this[i] = r >>> 8, this[i + 1] = r & 255, i + 2;
  }, f.prototype.writeUint32LE = f.prototype.writeUInt32LE = function(r, i, u) {
    return r = +r, i = i >>> 0, u || Q(this, r, i, 4, 4294967295, 0), this[i + 3] = r >>> 24, this[i + 2] = r >>> 16, this[i + 1] = r >>> 8, this[i] = r & 255, i + 4;
  }, f.prototype.writeUint32BE = f.prototype.writeUInt32BE = function(r, i, u) {
    return r = +r, i = i >>> 0, u || Q(this, r, i, 4, 4294967295, 0), this[i] = r >>> 24, this[i + 1] = r >>> 16, this[i + 2] = r >>> 8, this[i + 3] = r & 255, i + 4;
  };
  function fe(o, r, i, u, p) {
    h(r, u, p, o, i, 7);
    let x = Number(r & BigInt(4294967295));
    o[i++] = x, x = x >> 8, o[i++] = x, x = x >> 8, o[i++] = x, x = x >> 8, o[i++] = x;
    let S = Number(r >> BigInt(32) & BigInt(4294967295));
    return o[i++] = S, S = S >> 8, o[i++] = S, S = S >> 8, o[i++] = S, S = S >> 8, o[i++] = S, i;
  }
  function ge(o, r, i, u, p) {
    h(r, u, p, o, i, 7);
    let x = Number(r & BigInt(4294967295));
    o[i + 7] = x, x = x >> 8, o[i + 6] = x, x = x >> 8, o[i + 5] = x, x = x >> 8, o[i + 4] = x;
    let S = Number(r >> BigInt(32) & BigInt(4294967295));
    return o[i + 3] = S, S = S >> 8, o[i + 2] = S, S = S >> 8, o[i + 1] = S, S = S >> 8, o[i] = S, i + 8;
  }
  f.prototype.writeBigUInt64LE = ue(function(r, i = 0) {
    return fe(this, r, i, BigInt(0), BigInt("0xffffffffffffffff"));
  }), f.prototype.writeBigUInt64BE = ue(function(r, i = 0) {
    return ge(this, r, i, BigInt(0), BigInt("0xffffffffffffffff"));
  }), f.prototype.writeIntLE = function(r, i, u, p) {
    if (r = +r, i = i >>> 0, !p) {
      const J = Math.pow(2, 8 * u - 1);
      Q(this, r, i, u, J - 1, -J);
    }
    let x = 0, S = 1, q = 0;
    for (this[i] = r & 255; ++x < u && (S *= 256); )
      r < 0 && q === 0 && this[i + x - 1] !== 0 && (q = 1), this[i + x] = (r / S >> 0) - q & 255;
    return i + u;
  }, f.prototype.writeIntBE = function(r, i, u, p) {
    if (r = +r, i = i >>> 0, !p) {
      const J = Math.pow(2, 8 * u - 1);
      Q(this, r, i, u, J - 1, -J);
    }
    let x = u - 1, S = 1, q = 0;
    for (this[i + x] = r & 255; --x >= 0 && (S *= 256); )
      r < 0 && q === 0 && this[i + x + 1] !== 0 && (q = 1), this[i + x] = (r / S >> 0) - q & 255;
    return i + u;
  }, f.prototype.writeInt8 = function(r, i, u) {
    return r = +r, i = i >>> 0, u || Q(this, r, i, 1, 127, -128), r < 0 && (r = 255 + r + 1), this[i] = r & 255, i + 1;
  }, f.prototype.writeInt16LE = function(r, i, u) {
    return r = +r, i = i >>> 0, u || Q(this, r, i, 2, 32767, -32768), this[i] = r & 255, this[i + 1] = r >>> 8, i + 2;
  }, f.prototype.writeInt16BE = function(r, i, u) {
    return r = +r, i = i >>> 0, u || Q(this, r, i, 2, 32767, -32768), this[i] = r >>> 8, this[i + 1] = r & 255, i + 2;
  }, f.prototype.writeInt32LE = function(r, i, u) {
    return r = +r, i = i >>> 0, u || Q(this, r, i, 4, 2147483647, -2147483648), this[i] = r & 255, this[i + 1] = r >>> 8, this[i + 2] = r >>> 16, this[i + 3] = r >>> 24, i + 4;
  }, f.prototype.writeInt32BE = function(r, i, u) {
    return r = +r, i = i >>> 0, u || Q(this, r, i, 4, 2147483647, -2147483648), r < 0 && (r = 4294967295 + r + 1), this[i] = r >>> 24, this[i + 1] = r >>> 16, this[i + 2] = r >>> 8, this[i + 3] = r & 255, i + 4;
  }, f.prototype.writeBigInt64LE = ue(function(r, i = 0) {
    return fe(this, r, i, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  }), f.prototype.writeBigInt64BE = ue(function(r, i = 0) {
    return ge(this, r, i, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  function ce(o, r, i, u, p, x) {
    if (i + u > o.length)
      throw new RangeError("Index out of range");
    if (i < 0)
      throw new RangeError("Index out of range");
  }
  function w(o, r, i, u, p) {
    return r = +r, i = i >>> 0, p || ce(o, r, i, 4), n.write(o, r, i, u, 23, 4), i + 4;
  }
  f.prototype.writeFloatLE = function(r, i, u) {
    return w(this, r, i, !0, u);
  }, f.prototype.writeFloatBE = function(r, i, u) {
    return w(this, r, i, !1, u);
  };
  function g(o, r, i, u, p) {
    return r = +r, i = i >>> 0, p || ce(o, r, i, 8), n.write(o, r, i, u, 52, 8), i + 8;
  }
  f.prototype.writeDoubleLE = function(r, i, u) {
    return g(this, r, i, !0, u);
  }, f.prototype.writeDoubleBE = function(r, i, u) {
    return g(this, r, i, !1, u);
  }, f.prototype.copy = function(r, i, u, p) {
    if (!f.isBuffer(r))
      throw new TypeError("argument should be a Buffer");
    if (u || (u = 0), !p && p !== 0 && (p = this.length), i >= r.length && (i = r.length), i || (i = 0), p > 0 && p < u && (p = u), p === u || r.length === 0 || this.length === 0)
      return 0;
    if (i < 0)
      throw new RangeError("targetStart out of bounds");
    if (u < 0 || u >= this.length)
      throw new RangeError("Index out of range");
    if (p < 0)
      throw new RangeError("sourceEnd out of bounds");
    p > this.length && (p = this.length), r.length - i < p - u && (p = r.length - i + u);
    const x = p - u;
    return this === r && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(i, u, p) : Uint8Array.prototype.set.call(
      r,
      this.subarray(u, p),
      i
    ), x;
  }, f.prototype.fill = function(r, i, u, p) {
    if (typeof r == "string") {
      if (typeof i == "string" ? (p = i, i = 0, u = this.length) : typeof u == "string" && (p = u, u = this.length), p !== void 0 && typeof p != "string")
        throw new TypeError("encoding must be a string");
      if (typeof p == "string" && !f.isEncoding(p))
        throw new TypeError("Unknown encoding: " + p);
      if (r.length === 1) {
        const S = r.charCodeAt(0);
        (p === "utf8" && S < 128 || p === "latin1") && (r = S);
      }
    } else
      typeof r == "number" ? r = r & 255 : typeof r == "boolean" && (r = Number(r));
    if (i < 0 || this.length < i || this.length < u)
      throw new RangeError("Out of range index");
    if (u <= i)
      return this;
    i = i >>> 0, u = u === void 0 ? this.length : u >>> 0, r || (r = 0);
    let x;
    if (typeof r == "number")
      for (x = i; x < u; ++x)
        this[x] = r;
    else {
      const S = f.isBuffer(r) ? r : f.from(r, p), q = S.length;
      if (q === 0)
        throw new TypeError('The value "' + r + '" is invalid for argument "value"');
      for (x = 0; x < u - i; ++x)
        this[x + i] = S[x % q];
    }
    return this;
  };
  const A = {};
  function D(o, r, i) {
    A[o] = class extends i {
      constructor() {
        super(), Object.defineProperty(this, "message", {
          value: r.apply(this, arguments),
          writable: !0,
          configurable: !0
        }), this.name = `${this.name} [${o}]`, this.stack, delete this.name;
      }
      get code() {
        return o;
      }
      set code(p) {
        Object.defineProperty(this, "code", {
          configurable: !0,
          enumerable: !0,
          value: p,
          writable: !0
        });
      }
      toString() {
        return `${this.name} [${o}]: ${this.message}`;
      }
    };
  }
  D(
    "ERR_BUFFER_OUT_OF_BOUNDS",
    function(o) {
      return o ? `${o} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
    },
    RangeError
  ), D(
    "ERR_INVALID_ARG_TYPE",
    function(o, r) {
      return `The "${o}" argument must be of type number. Received type ${typeof r}`;
    },
    TypeError
  ), D(
    "ERR_OUT_OF_RANGE",
    function(o, r, i) {
      let u = `The value of "${o}" is out of range.`, p = i;
      return Number.isInteger(i) && Math.abs(i) > 2 ** 32 ? p = $(String(i)) : typeof i == "bigint" && (p = String(i), (i > BigInt(2) ** BigInt(32) || i < -(BigInt(2) ** BigInt(32))) && (p = $(p)), p += "n"), u += ` It must be ${r}. Received ${p}`, u;
    },
    RangeError
  );
  function $(o) {
    let r = "", i = o.length;
    const u = o[0] === "-" ? 1 : 0;
    for (; i >= u + 4; i -= 3)
      r = `_${o.slice(i - 3, i)}${r}`;
    return `${o.slice(0, i)}${r}`;
  }
  function l(o, r, i) {
    R(r, "offset"), (o[r] === void 0 || o[r + i] === void 0) && N(r, o.length - (i + 1));
  }
  function h(o, r, i, u, p, x) {
    if (o > i || o < r) {
      const S = typeof r == "bigint" ? "n" : "";
      let q;
      throw r === 0 || r === BigInt(0) ? q = `>= 0${S} and < 2${S} ** ${(x + 1) * 8}${S}` : q = `>= -(2${S} ** ${(x + 1) * 8 - 1}${S}) and < 2 ** ${(x + 1) * 8 - 1}${S}`, new A.ERR_OUT_OF_RANGE("value", q, o);
    }
    l(u, p, x);
  }
  function R(o, r) {
    if (typeof o != "number")
      throw new A.ERR_INVALID_ARG_TYPE(r, "number", o);
  }
  function N(o, r, i) {
    throw Math.floor(o) !== o ? (R(o, i), new A.ERR_OUT_OF_RANGE("offset", "an integer", o)) : r < 0 ? new A.ERR_BUFFER_OUT_OF_BOUNDS() : new A.ERR_OUT_OF_RANGE(
      "offset",
      `>= 0 and <= ${r}`,
      o
    );
  }
  const K = /[^+/0-9A-Za-z-_]/g;
  function H(o) {
    if (o = o.split("=")[0], o = o.trim().replace(K, ""), o.length < 2)
      return "";
    for (; o.length % 4 !== 0; )
      o = o + "=";
    return o;
  }
  function j(o, r) {
    r = r || 1 / 0;
    let i;
    const u = o.length;
    let p = null;
    const x = [];
    for (let S = 0; S < u; ++S) {
      if (i = o.charCodeAt(S), i > 55295 && i < 57344) {
        if (!p) {
          if (i > 56319) {
            (r -= 3) > -1 && x.push(239, 191, 189);
            continue;
          } else if (S + 1 === u) {
            (r -= 3) > -1 && x.push(239, 191, 189);
            continue;
          }
          p = i;
          continue;
        }
        if (i < 56320) {
          (r -= 3) > -1 && x.push(239, 191, 189), p = i;
          continue;
        }
        i = (p - 55296 << 10 | i - 56320) + 65536;
      } else
        p && (r -= 3) > -1 && x.push(239, 191, 189);
      if (p = null, i < 128) {
        if ((r -= 1) < 0)
          break;
        x.push(i);
      } else if (i < 2048) {
        if ((r -= 2) < 0)
          break;
        x.push(
          i >> 6 | 192,
          i & 63 | 128
        );
      } else if (i < 65536) {
        if ((r -= 3) < 0)
          break;
        x.push(
          i >> 12 | 224,
          i >> 6 & 63 | 128,
          i & 63 | 128
        );
      } else if (i < 1114112) {
        if ((r -= 4) < 0)
          break;
        x.push(
          i >> 18 | 240,
          i >> 12 & 63 | 128,
          i >> 6 & 63 | 128,
          i & 63 | 128
        );
      } else
        throw new Error("Invalid code point");
    }
    return x;
  }
  function we(o) {
    const r = [];
    for (let i = 0; i < o.length; ++i)
      r.push(o.charCodeAt(i) & 255);
    return r;
  }
  function Be(o, r) {
    let i, u, p;
    const x = [];
    for (let S = 0; S < o.length && !((r -= 2) < 0); ++S)
      i = o.charCodeAt(S), u = i >> 8, p = i % 256, x.push(p), x.push(u);
    return x;
  }
  function Ce(o) {
    return t.toByteArray(H(o));
  }
  function Re(o, r, i, u) {
    let p;
    for (p = 0; p < u && !(p + i >= r.length || p >= o.length); ++p)
      r[p + i] = o[p];
    return p;
  }
  function se(o, r) {
    return o instanceof r || o != null && o.constructor != null && o.constructor.name != null && o.constructor.name === r.name;
  }
  function Ee(o) {
    return o !== o;
  }
  const Fe = function() {
    const o = "0123456789abcdef", r = new Array(256);
    for (let i = 0; i < 16; ++i) {
      const u = i * 16;
      for (let p = 0; p < 16; ++p)
        r[u + p] = o[i] + o[p];
    }
    return r;
  }();
  function ue(o) {
    return typeof BigInt > "u" ? me : o;
  }
  function me() {
    throw new Error("BigInt not supported");
  }
})(Ye);
var Qt, Tr;
function nn() {
  if (Tr)
    return Qt;
  Tr = 1;
  function e(k, U) {
    var C = Object.keys(k);
    if (Object.getOwnPropertySymbols) {
      var d = Object.getOwnPropertySymbols(k);
      U && (d = d.filter(function(E) {
        return Object.getOwnPropertyDescriptor(k, E).enumerable;
      })), C.push.apply(C, d);
    }
    return C;
  }
  function t(k) {
    for (var U = 1; U < arguments.length; U++) {
      var C = arguments[U] != null ? arguments[U] : {};
      U % 2 ? e(Object(C), !0).forEach(function(d) {
        n(k, d, C[d]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(k, Object.getOwnPropertyDescriptors(C)) : e(Object(C)).forEach(function(d) {
        Object.defineProperty(k, d, Object.getOwnPropertyDescriptor(C, d));
      });
    }
    return k;
  }
  function n(k, U, C) {
    return U = _(U), U in k ? Object.defineProperty(k, U, { value: C, enumerable: !0, configurable: !0, writable: !0 }) : k[U] = C, k;
  }
  function a(k, U) {
    if (!(k instanceof U))
      throw new TypeError("Cannot call a class as a function");
  }
  function s(k, U) {
    for (var C = 0; C < U.length; C++) {
      var d = U[C];
      d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(k, _(d.key), d);
    }
  }
  function c(k, U, C) {
    return U && s(k.prototype, U), Object.defineProperty(k, "prototype", { writable: !1 }), k;
  }
  function _(k) {
    var U = f(k, "string");
    return typeof U == "symbol" ? U : String(U);
  }
  function f(k, U) {
    if (typeof k != "object" || k === null)
      return k;
    var C = k[Symbol.toPrimitive];
    if (C !== void 0) {
      var d = C.call(k, U || "default");
      if (typeof d != "object")
        return d;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (U === "string" ? String : Number)(k);
  }
  var b = Ye, v = b.Buffer, B = ai, y = B.inspect, T = y && y.custom || "inspect";
  function m(k, U, C) {
    v.prototype.copy.call(k, U, C);
  }
  return Qt = /* @__PURE__ */ function() {
    function k() {
      a(this, k), this.head = null, this.tail = null, this.length = 0;
    }
    return c(k, [{
      key: "push",
      value: function(C) {
        var d = {
          data: C,
          next: null
        };
        this.length > 0 ? this.tail.next = d : this.head = d, this.tail = d, ++this.length;
      }
    }, {
      key: "unshift",
      value: function(C) {
        var d = {
          data: C,
          next: this.head
        };
        this.length === 0 && (this.tail = d), this.head = d, ++this.length;
      }
    }, {
      key: "shift",
      value: function() {
        if (this.length !== 0) {
          var C = this.head.data;
          return this.length === 1 ? this.head = this.tail = null : this.head = this.head.next, --this.length, C;
        }
      }
    }, {
      key: "clear",
      value: function() {
        this.head = this.tail = null, this.length = 0;
      }
    }, {
      key: "join",
      value: function(C) {
        if (this.length === 0)
          return "";
        for (var d = this.head, E = "" + d.data; d = d.next; )
          E += C + d.data;
        return E;
      }
    }, {
      key: "concat",
      value: function(C) {
        if (this.length === 0)
          return v.alloc(0);
        for (var d = v.allocUnsafe(C >>> 0), E = this.head, I = 0; E; )
          m(E.data, d, I), I += E.data.length, E = E.next;
        return d;
      }
      // Consumes a specified amount of bytes or characters from the buffered data.
    }, {
      key: "consume",
      value: function(C, d) {
        var E;
        return C < this.head.data.length ? (E = this.head.data.slice(0, C), this.head.data = this.head.data.slice(C)) : C === this.head.data.length ? E = this.shift() : E = d ? this._getString(C) : this._getBuffer(C), E;
      }
    }, {
      key: "first",
      value: function() {
        return this.head.data;
      }
      // Consumes a specified amount of characters from the buffered data.
    }, {
      key: "_getString",
      value: function(C) {
        var d = this.head, E = 1, I = d.data;
        for (C -= I.length; d = d.next; ) {
          var F = d.data, M = C > F.length ? F.length : C;
          if (M === F.length ? I += F : I += F.slice(0, C), C -= M, C === 0) {
            M === F.length ? (++E, d.next ? this.head = d.next : this.head = this.tail = null) : (this.head = d, d.data = F.slice(M));
            break;
          }
          ++E;
        }
        return this.length -= E, I;
      }
      // Consumes a specified amount of bytes from the buffered data.
    }, {
      key: "_getBuffer",
      value: function(C) {
        var d = v.allocUnsafe(C), E = this.head, I = 1;
        for (E.data.copy(d), C -= E.data.length; E = E.next; ) {
          var F = E.data, M = C > F.length ? F.length : C;
          if (F.copy(d, d.length - C, 0, M), C -= M, C === 0) {
            M === F.length ? (++I, E.next ? this.head = E.next : this.head = this.tail = null) : (this.head = E, E.data = F.slice(M));
            break;
          }
          ++I;
        }
        return this.length -= I, d;
      }
      // Make sure the linked list only shows the minimal necessary information.
    }, {
      key: T,
      value: function(C, d) {
        return y(this, t(t({}, d), {}, {
          // Only inspect one level.
          depth: 0,
          // It should not recurse.
          customInspect: !1
        }));
      }
    }]), k;
  }(), Qt;
}
function on(e, t) {
  var n = this, a = this._readableState && this._readableState.destroyed, s = this._writableState && this._writableState.destroyed;
  return a || s ? (t ? t(e) : e && (this._writableState ? this._writableState.errorEmitted || (this._writableState.errorEmitted = !0, process.nextTick(lr, this, e)) : process.nextTick(lr, this, e)), this) : (this._readableState && (this._readableState.destroyed = !0), this._writableState && (this._writableState.destroyed = !0), this._destroy(e || null, function(c) {
    !t && c ? n._writableState ? n._writableState.errorEmitted ? process.nextTick(rt, n) : (n._writableState.errorEmitted = !0, process.nextTick(Ir, n, c)) : process.nextTick(Ir, n, c) : t ? (process.nextTick(rt, n), t(c)) : process.nextTick(rt, n);
  }), this);
}
function Ir(e, t) {
  lr(e, t), rt(e);
}
function rt(e) {
  e._writableState && !e._writableState.emitClose || e._readableState && !e._readableState.emitClose || e.emit("close");
}
function an() {
  this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, this._readableState.ended = !1, this._readableState.endEmitted = !1), this._writableState && (this._writableState.destroyed = !1, this._writableState.ended = !1, this._writableState.ending = !1, this._writableState.finalCalled = !1, this._writableState.prefinished = !1, this._writableState.finished = !1, this._writableState.errorEmitted = !1);
}
function lr(e, t) {
  e.emit("error", t);
}
function fn(e, t) {
  var n = e._readableState, a = e._writableState;
  n && n.autoDestroy || a && a.autoDestroy ? e.destroy(t) : e.emit("error", t);
}
var ui = {
  destroy: on,
  undestroy: an,
  errorOrDestroy: fn
}, Ne = {};
function sn(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t;
}
var li = {};
function de(e, t, n) {
  n || (n = Error);
  function a(c, _, f) {
    return typeof t == "string" ? t : t(c, _, f);
  }
  var s = /* @__PURE__ */ function(c) {
    sn(_, c);
    function _(f, b, v) {
      return c.call(this, a(f, b, v)) || this;
    }
    return _;
  }(n);
  s.prototype.name = n.name, s.prototype.code = e, li[e] = s;
}
function Cr(e, t) {
  if (Array.isArray(e)) {
    var n = e.length;
    return e = e.map(function(a) {
      return String(a);
    }), n > 2 ? "one of ".concat(t, " ").concat(e.slice(0, n - 1).join(", "), ", or ") + e[n - 1] : n === 2 ? "one of ".concat(t, " ").concat(e[0], " or ").concat(e[1]) : "of ".concat(t, " ").concat(e[0]);
  } else
    return "of ".concat(t, " ").concat(String(e));
}
function un(e, t, n) {
  return e.substr(0, t.length) === t;
}
function ln(e, t, n) {
  return (n === void 0 || n > e.length) && (n = e.length), e.substring(n - t.length, n) === t;
}
function hn(e, t, n) {
  return typeof n != "number" && (n = 0), n + t.length > e.length ? !1 : e.indexOf(t, n) !== -1;
}
de("ERR_INVALID_OPT_VALUE", function(e, t) {
  return 'The value "' + t + '" is invalid for option "' + e + '"';
}, TypeError);
de("ERR_INVALID_ARG_TYPE", function(e, t, n) {
  var a;
  typeof t == "string" && un(t, "not ") ? (a = "must not be", t = t.replace(/^not /, "")) : a = "must be";
  var s;
  if (ln(e, " argument"))
    s = "The ".concat(e, " ").concat(a, " ").concat(Cr(t, "type"));
  else {
    var c = hn(e, ".") ? "property" : "argument";
    s = 'The "'.concat(e, '" ').concat(c, " ").concat(a, " ").concat(Cr(t, "type"));
  }
  return s += ". Received type ".concat(typeof n), s;
}, TypeError);
de("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF");
de("ERR_METHOD_NOT_IMPLEMENTED", function(e) {
  return "The " + e + " method is not implemented";
});
de("ERR_STREAM_PREMATURE_CLOSE", "Premature close");
de("ERR_STREAM_DESTROYED", function(e) {
  return "Cannot call " + e + " after a stream was destroyed";
});
de("ERR_MULTIPLE_CALLBACK", "Callback called multiple times");
de("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable");
de("ERR_STREAM_WRITE_AFTER_END", "write after end");
de("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError);
de("ERR_UNKNOWN_ENCODING", function(e) {
  return "Unknown encoding: " + e;
}, TypeError);
de("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event");
Ne.codes = li;
var cn = Ne.codes.ERR_INVALID_OPT_VALUE;
function _n(e, t, n) {
  return e.highWaterMark != null ? e.highWaterMark : t ? e[n] : null;
}
function dn(e, t, n, a) {
  var s = _n(t, a, n);
  if (s != null) {
    if (!(isFinite(s) && Math.floor(s) === s) || s < 0) {
      var c = a ? n : "highWaterMark";
      throw new cn(c, s);
    }
    return Math.floor(s);
  }
  return e.objectMode ? 16 : 16 * 1024;
}
var hi = {
  getHighWaterMark: dn
}, pn = yn;
function yn(e, t) {
  if (er("noDeprecation"))
    return e;
  var n = !1;
  function a() {
    if (!n) {
      if (er("throwDeprecation"))
        throw new Error(t);
      er("traceDeprecation") ? console.trace(t) : console.warn(t), n = !0;
    }
    return e.apply(this, arguments);
  }
  return a;
}
function er(e) {
  try {
    if (!Oe.localStorage)
      return !1;
  } catch {
    return !1;
  }
  var t = Oe.localStorage[e];
  return t == null ? !1 : String(t).toLowerCase() === "true";
}
var tr, Fr;
function ci() {
  if (Fr)
    return tr;
  Fr = 1, tr = O;
  function e(w) {
    var g = this;
    this.next = null, this.entry = null, this.finish = function() {
      ce(g, w);
    };
  }
  var t;
  O.WritableState = L;
  var n = {
    deprecate: pn
  }, a = fi, s = Ye.Buffer, c = (typeof Oe < "u" ? Oe : typeof window < "u" ? window : typeof self < "u" ? self : {}).Uint8Array || function() {
  };
  function _(w) {
    return s.from(w);
  }
  function f(w) {
    return s.isBuffer(w) || w instanceof c;
  }
  var b = ui, v = hi, B = v.getHighWaterMark, y = Ne.codes, T = y.ERR_INVALID_ARG_TYPE, m = y.ERR_METHOD_NOT_IMPLEMENTED, k = y.ERR_MULTIPLE_CALLBACK, U = y.ERR_STREAM_CANNOT_PIPE, C = y.ERR_STREAM_DESTROYED, d = y.ERR_STREAM_NULL_VALUES, E = y.ERR_STREAM_WRITE_AFTER_END, I = y.ERR_UNKNOWN_ENCODING, F = b.errorOrDestroy;
  xe(O, a);
  function M() {
  }
  function L(w, g, A) {
    t = t || $e(), w = w || {}, typeof A != "boolean" && (A = g instanceof t), this.objectMode = !!w.objectMode, A && (this.objectMode = this.objectMode || !!w.writableObjectMode), this.highWaterMark = B(this, w, "writableHighWaterMark", A), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1;
    var D = w.decodeStrings === !1;
    this.decodeStrings = !D, this.defaultEncoding = w.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function($) {
      ve(g, $);
    }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.emitClose = w.emitClose !== !1, this.autoDestroy = !!w.autoDestroy, this.bufferedRequestCount = 0, this.corkedRequestsFree = new e(this);
  }
  L.prototype.getBuffer = function() {
    for (var g = this.bufferedRequest, A = []; g; )
      A.push(g), g = g.next;
    return A;
  }, function() {
    try {
      Object.defineProperty(L.prototype, "buffer", {
        get: n.deprecate(function() {
          return this.getBuffer();
        }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
      });
    } catch {
    }
  }();
  var W;
  typeof Symbol == "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] == "function" ? (W = Function.prototype[Symbol.hasInstance], Object.defineProperty(O, Symbol.hasInstance, {
    value: function(g) {
      return W.call(this, g) ? !0 : this !== O ? !1 : g && g._writableState instanceof L;
    }
  })) : W = function(g) {
    return g instanceof this;
  };
  function O(w) {
    t = t || $e();
    var g = this instanceof t;
    if (!g && !W.call(O, this))
      return new O(w);
    this._writableState = new L(w, this, g), this.writable = !0, w && (typeof w.write == "function" && (this._write = w.write), typeof w.writev == "function" && (this._writev = w.writev), typeof w.destroy == "function" && (this._destroy = w.destroy), typeof w.final == "function" && (this._final = w.final)), a.call(this);
  }
  O.prototype.pipe = function() {
    F(this, new U());
  };
  function P(w, g) {
    var A = new E();
    F(w, A), process.nextTick(g, A);
  }
  function V(w, g, A, D) {
    var $;
    return A === null ? $ = new d() : typeof A != "string" && !g.objectMode && ($ = new T("chunk", ["string", "Buffer"], A)), $ ? (F(w, $), process.nextTick(D, $), !1) : !0;
  }
  O.prototype.write = function(w, g, A) {
    var D = this._writableState, $ = !1, l = !D.objectMode && f(w);
    return l && !s.isBuffer(w) && (w = _(w)), typeof g == "function" && (A = g, g = null), l ? g = "buffer" : g || (g = D.defaultEncoding), typeof A != "function" && (A = M), D.ending ? P(this, A) : (l || V(this, D, w, A)) && (D.pendingcb++, $ = pe(this, D, l, w, g, A)), $;
  }, O.prototype.cork = function() {
    this._writableState.corked++;
  }, O.prototype.uncork = function() {
    var w = this._writableState;
    w.corked && (w.corked--, !w.writing && !w.corked && !w.bufferProcessing && w.bufferedRequest && he(this, w));
  }, O.prototype.setDefaultEncoding = function(g) {
    if (typeof g == "string" && (g = g.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((g + "").toLowerCase()) > -1))
      throw new I(g);
    return this._writableState.defaultEncoding = g, this;
  }, Object.defineProperty(O.prototype, "writableBuffer", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: function() {
      return this._writableState && this._writableState.getBuffer();
    }
  });
  function ne(w, g, A) {
    return !w.objectMode && w.decodeStrings !== !1 && typeof g == "string" && (g = s.from(g, A)), g;
  }
  Object.defineProperty(O.prototype, "writableHighWaterMark", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: function() {
      return this._writableState.highWaterMark;
    }
  });
  function pe(w, g, A, D, $, l) {
    if (!A) {
      var h = ne(g, D, $);
      D !== h && (A = !0, $ = "buffer", D = h);
    }
    var R = g.objectMode ? 1 : D.length;
    g.length += R;
    var N = g.length < g.highWaterMark;
    if (N || (g.needDrain = !0), g.writing || g.corked) {
      var K = g.lastBufferedRequest;
      g.lastBufferedRequest = {
        chunk: D,
        encoding: $,
        isBuf: A,
        callback: l,
        next: null
      }, K ? K.next = g.lastBufferedRequest : g.bufferedRequest = g.lastBufferedRequest, g.bufferedRequestCount += 1;
    } else
      te(w, g, !1, R, D, $, l);
    return N;
  }
  function te(w, g, A, D, $, l, h) {
    g.writelen = D, g.writecb = h, g.writing = !0, g.sync = !0, g.destroyed ? g.onwrite(new C("write")) : A ? w._writev($, g.onwrite) : w._write($, l, g.onwrite), g.sync = !1;
  }
  function oe(w, g, A, D, $) {
    --g.pendingcb, A ? (process.nextTick($, D), process.nextTick(fe, w, g), w._writableState.errorEmitted = !0, F(w, D)) : ($(D), w._writableState.errorEmitted = !0, F(w, D), fe(w, g));
  }
  function ae(w) {
    w.writing = !1, w.writecb = null, w.length -= w.writelen, w.writelen = 0;
  }
  function ve(w, g) {
    var A = w._writableState, D = A.sync, $ = A.writecb;
    if (typeof $ != "function")
      throw new k();
    if (ae(A), g)
      oe(w, A, D, g, $);
    else {
      var l = be(A) || w.destroyed;
      !l && !A.corked && !A.bufferProcessing && A.bufferedRequest && he(w, A), D ? process.nextTick(le, w, A, l, $) : le(w, A, l, $);
    }
  }
  function le(w, g, A, D) {
    A || ye(w, g), g.pendingcb--, D(), fe(w, g);
  }
  function ye(w, g) {
    g.length === 0 && g.needDrain && (g.needDrain = !1, w.emit("drain"));
  }
  function he(w, g) {
    g.bufferProcessing = !0;
    var A = g.bufferedRequest;
    if (w._writev && A && A.next) {
      var D = g.bufferedRequestCount, $ = new Array(D), l = g.corkedRequestsFree;
      l.entry = A;
      for (var h = 0, R = !0; A; )
        $[h] = A, A.isBuf || (R = !1), A = A.next, h += 1;
      $.allBuffers = R, te(w, g, !0, g.length, $, "", l.finish), g.pendingcb++, g.lastBufferedRequest = null, l.next ? (g.corkedRequestsFree = l.next, l.next = null) : g.corkedRequestsFree = new e(g), g.bufferedRequestCount = 0;
    } else {
      for (; A; ) {
        var N = A.chunk, K = A.encoding, H = A.callback, j = g.objectMode ? 1 : N.length;
        if (te(w, g, !1, j, N, K, H), A = A.next, g.bufferedRequestCount--, g.writing)
          break;
      }
      A === null && (g.lastBufferedRequest = null);
    }
    g.bufferedRequest = A, g.bufferProcessing = !1;
  }
  O.prototype._write = function(w, g, A) {
    A(new m("_write()"));
  }, O.prototype._writev = null, O.prototype.end = function(w, g, A) {
    var D = this._writableState;
    return typeof w == "function" ? (A = w, w = null, g = null) : typeof g == "function" && (A = g, g = null), w != null && this.write(w, g), D.corked && (D.corked = 1, this.uncork()), D.ending || ge(this, D, A), this;
  }, Object.defineProperty(O.prototype, "writableLength", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: function() {
      return this._writableState.length;
    }
  });
  function be(w) {
    return w.ending && w.length === 0 && w.bufferedRequest === null && !w.finished && !w.writing;
  }
  function Y(w, g) {
    w._final(function(A) {
      g.pendingcb--, A && F(w, A), g.prefinished = !0, w.emit("prefinish"), fe(w, g);
    });
  }
  function Q(w, g) {
    !g.prefinished && !g.finalCalled && (typeof w._final == "function" && !g.destroyed ? (g.pendingcb++, g.finalCalled = !0, process.nextTick(Y, w, g)) : (g.prefinished = !0, w.emit("prefinish")));
  }
  function fe(w, g) {
    var A = be(g);
    if (A && (Q(w, g), g.pendingcb === 0 && (g.finished = !0, w.emit("finish"), g.autoDestroy))) {
      var D = w._readableState;
      (!D || D.autoDestroy && D.endEmitted) && w.destroy();
    }
    return A;
  }
  function ge(w, g, A) {
    g.ending = !0, fe(w, g), A && (g.finished ? process.nextTick(A) : w.once("finish", A)), g.ended = !0, w.writable = !1;
  }
  function ce(w, g, A) {
    var D = w.entry;
    for (w.entry = null; D; ) {
      var $ = D.callback;
      g.pendingcb--, $(A), D = D.next;
    }
    g.corkedRequestsFree.next = w;
  }
  return Object.defineProperty(O.prototype, "destroyed", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: function() {
      return this._writableState === void 0 ? !1 : this._writableState.destroyed;
    },
    set: function(g) {
      this._writableState && (this._writableState.destroyed = g);
    }
  }), O.prototype.destroy = b.destroy, O.prototype._undestroy = b.undestroy, O.prototype._destroy = function(w, g) {
    g(w);
  }, tr;
}
var rr, kr;
function $e() {
  if (kr)
    return rr;
  kr = 1;
  var e = Object.keys || function(v) {
    var B = [];
    for (var y in v)
      B.push(y);
    return B;
  };
  rr = _;
  var t = di(), n = ci();
  xe(_, t);
  for (var a = e(n.prototype), s = 0; s < a.length; s++) {
    var c = a[s];
    _.prototype[c] || (_.prototype[c] = n.prototype[c]);
  }
  function _(v) {
    if (!(this instanceof _))
      return new _(v);
    t.call(this, v), n.call(this, v), this.allowHalfOpen = !0, v && (v.readable === !1 && (this.readable = !1), v.writable === !1 && (this.writable = !1), v.allowHalfOpen === !1 && (this.allowHalfOpen = !1, this.once("end", f)));
  }
  Object.defineProperty(_.prototype, "writableHighWaterMark", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: function() {
      return this._writableState.highWaterMark;
    }
  }), Object.defineProperty(_.prototype, "writableBuffer", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: function() {
      return this._writableState && this._writableState.getBuffer();
    }
  }), Object.defineProperty(_.prototype, "writableLength", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: function() {
      return this._writableState.length;
    }
  });
  function f() {
    this._writableState.ended || process.nextTick(b, this);
  }
  function b(v) {
    v.end();
  }
  return Object.defineProperty(_.prototype, "destroyed", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: function() {
      return this._readableState === void 0 || this._writableState === void 0 ? !1 : this._readableState.destroyed && this._writableState.destroyed;
    },
    set: function(B) {
      this._readableState === void 0 || this._writableState === void 0 || (this._readableState.destroyed = B, this._writableState.destroyed = B);
    }
  }), rr;
}
var ir = {}, hr = { exports: {} };
/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
(function(e, t) {
  var n = Ye, a = n.Buffer;
  function s(_, f) {
    for (var b in _)
      f[b] = _[b];
  }
  a.from && a.alloc && a.allocUnsafe && a.allocUnsafeSlow ? e.exports = n : (s(n, t), t.Buffer = c);
  function c(_, f, b) {
    return a(_, f, b);
  }
  c.prototype = Object.create(a.prototype), s(a, c), c.from = function(_, f, b) {
    if (typeof _ == "number")
      throw new TypeError("Argument must not be a number");
    return a(_, f, b);
  }, c.alloc = function(_, f, b) {
    if (typeof _ != "number")
      throw new TypeError("Argument must be a number");
    var v = a(_);
    return f !== void 0 ? typeof b == "string" ? v.fill(f, b) : v.fill(f) : v.fill(0), v;
  }, c.allocUnsafe = function(_) {
    if (typeof _ != "number")
      throw new TypeError("Argument must be a number");
    return a(_);
  }, c.allocUnsafeSlow = function(_) {
    if (typeof _ != "number")
      throw new TypeError("Argument must be a number");
    return n.SlowBuffer(_);
  };
})(hr, hr.exports);
var ke = hr.exports, Mr;
function Ur() {
  if (Mr)
    return ir;
  Mr = 1;
  var e = ke.Buffer, t = e.isEncoding || function(d) {
    switch (d = "" + d, d && d.toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
      case "raw":
        return !0;
      default:
        return !1;
    }
  };
  function n(d) {
    if (!d)
      return "utf8";
    for (var E; ; )
      switch (d) {
        case "utf8":
        case "utf-8":
          return "utf8";
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return "utf16le";
        case "latin1":
        case "binary":
          return "latin1";
        case "base64":
        case "ascii":
        case "hex":
          return d;
        default:
          if (E)
            return;
          d = ("" + d).toLowerCase(), E = !0;
      }
  }
  function a(d) {
    var E = n(d);
    if (typeof E != "string" && (e.isEncoding === t || !t(d)))
      throw new Error("Unknown encoding: " + d);
    return E || d;
  }
  ir.StringDecoder = s;
  function s(d) {
    this.encoding = a(d);
    var E;
    switch (this.encoding) {
      case "utf16le":
        this.text = y, this.end = T, E = 4;
        break;
      case "utf8":
        this.fillLast = b, E = 4;
        break;
      case "base64":
        this.text = m, this.end = k, E = 3;
        break;
      default:
        this.write = U, this.end = C;
        return;
    }
    this.lastNeed = 0, this.lastTotal = 0, this.lastChar = e.allocUnsafe(E);
  }
  s.prototype.write = function(d) {
    if (d.length === 0)
      return "";
    var E, I;
    if (this.lastNeed) {
      if (E = this.fillLast(d), E === void 0)
        return "";
      I = this.lastNeed, this.lastNeed = 0;
    } else
      I = 0;
    return I < d.length ? E ? E + this.text(d, I) : this.text(d, I) : E || "";
  }, s.prototype.end = B, s.prototype.text = v, s.prototype.fillLast = function(d) {
    if (this.lastNeed <= d.length)
      return d.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
    d.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, d.length), this.lastNeed -= d.length;
  };
  function c(d) {
    return d <= 127 ? 0 : d >> 5 === 6 ? 2 : d >> 4 === 14 ? 3 : d >> 3 === 30 ? 4 : d >> 6 === 2 ? -1 : -2;
  }
  function _(d, E, I) {
    var F = E.length - 1;
    if (F < I)
      return 0;
    var M = c(E[F]);
    return M >= 0 ? (M > 0 && (d.lastNeed = M - 1), M) : --F < I || M === -2 ? 0 : (M = c(E[F]), M >= 0 ? (M > 0 && (d.lastNeed = M - 2), M) : --F < I || M === -2 ? 0 : (M = c(E[F]), M >= 0 ? (M > 0 && (M === 2 ? M = 0 : d.lastNeed = M - 3), M) : 0));
  }
  function f(d, E, I) {
    if ((E[0] & 192) !== 128)
      return d.lastNeed = 0, "�";
    if (d.lastNeed > 1 && E.length > 1) {
      if ((E[1] & 192) !== 128)
        return d.lastNeed = 1, "�";
      if (d.lastNeed > 2 && E.length > 2 && (E[2] & 192) !== 128)
        return d.lastNeed = 2, "�";
    }
  }
  function b(d) {
    var E = this.lastTotal - this.lastNeed, I = f(this, d);
    if (I !== void 0)
      return I;
    if (this.lastNeed <= d.length)
      return d.copy(this.lastChar, E, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
    d.copy(this.lastChar, E, 0, d.length), this.lastNeed -= d.length;
  }
  function v(d, E) {
    var I = _(this, d, E);
    if (!this.lastNeed)
      return d.toString("utf8", E);
    this.lastTotal = I;
    var F = d.length - (I - this.lastNeed);
    return d.copy(this.lastChar, 0, F), d.toString("utf8", E, F);
  }
  function B(d) {
    var E = d && d.length ? this.write(d) : "";
    return this.lastNeed ? E + "�" : E;
  }
  function y(d, E) {
    if ((d.length - E) % 2 === 0) {
      var I = d.toString("utf16le", E);
      if (I) {
        var F = I.charCodeAt(I.length - 1);
        if (F >= 55296 && F <= 56319)
          return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = d[d.length - 2], this.lastChar[1] = d[d.length - 1], I.slice(0, -1);
      }
      return I;
    }
    return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = d[d.length - 1], d.toString("utf16le", E, d.length - 1);
  }
  function T(d) {
    var E = d && d.length ? this.write(d) : "";
    if (this.lastNeed) {
      var I = this.lastTotal - this.lastNeed;
      return E + this.lastChar.toString("utf16le", 0, I);
    }
    return E;
  }
  function m(d, E) {
    var I = (d.length - E) % 3;
    return I === 0 ? d.toString("base64", E) : (this.lastNeed = 3 - I, this.lastTotal = 3, I === 1 ? this.lastChar[0] = d[d.length - 1] : (this.lastChar[0] = d[d.length - 2], this.lastChar[1] = d[d.length - 1]), d.toString("base64", E, d.length - I));
  }
  function k(d) {
    var E = d && d.length ? this.write(d) : "";
    return this.lastNeed ? E + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : E;
  }
  function U(d) {
    return d.toString(this.encoding);
  }
  function C(d) {
    return d && d.length ? this.write(d) : "";
  }
  return ir;
}
var Nr = Ne.codes.ERR_STREAM_PREMATURE_CLOSE;
function bn(e) {
  var t = !1;
  return function() {
    if (!t) {
      t = !0;
      for (var n = arguments.length, a = new Array(n), s = 0; s < n; s++)
        a[s] = arguments[s];
      e.apply(this, a);
    }
  };
}
function gn() {
}
function wn(e) {
  return e.setHeader && typeof e.abort == "function";
}
function _i(e, t, n) {
  if (typeof t == "function")
    return _i(e, null, t);
  t || (t = {}), n = bn(n || gn);
  var a = t.readable || t.readable !== !1 && e.readable, s = t.writable || t.writable !== !1 && e.writable, c = function() {
    e.writable || f();
  }, _ = e._writableState && e._writableState.finished, f = function() {
    s = !1, _ = !0, a || n.call(e);
  }, b = e._readableState && e._readableState.endEmitted, v = function() {
    a = !1, b = !0, s || n.call(e);
  }, B = function(k) {
    n.call(e, k);
  }, y = function() {
    var k;
    if (a && !b)
      return (!e._readableState || !e._readableState.ended) && (k = new Nr()), n.call(e, k);
    if (s && !_)
      return (!e._writableState || !e._writableState.ended) && (k = new Nr()), n.call(e, k);
  }, T = function() {
    e.req.on("finish", f);
  };
  return wn(e) ? (e.on("complete", f), e.on("abort", y), e.req ? T() : e.on("request", T)) : s && !e._writableState && (e.on("end", c), e.on("close", c)), e.on("end", v), e.on("finish", f), t.error !== !1 && e.on("error", B), e.on("close", y), function() {
    e.removeListener("complete", f), e.removeListener("abort", y), e.removeListener("request", T), e.req && e.req.removeListener("finish", f), e.removeListener("end", c), e.removeListener("close", c), e.removeListener("finish", f), e.removeListener("end", v), e.removeListener("error", B), e.removeListener("close", y);
  };
}
var vr = _i, nr, Dr;
function xn() {
  if (Dr)
    return nr;
  Dr = 1;
  var e;
  function t(I, F, M) {
    return F = n(F), F in I ? Object.defineProperty(I, F, { value: M, enumerable: !0, configurable: !0, writable: !0 }) : I[F] = M, I;
  }
  function n(I) {
    var F = a(I, "string");
    return typeof F == "symbol" ? F : String(F);
  }
  function a(I, F) {
    if (typeof I != "object" || I === null)
      return I;
    var M = I[Symbol.toPrimitive];
    if (M !== void 0) {
      var L = M.call(I, F || "default");
      if (typeof L != "object")
        return L;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (F === "string" ? String : Number)(I);
  }
  var s = vr, c = Symbol("lastResolve"), _ = Symbol("lastReject"), f = Symbol("error"), b = Symbol("ended"), v = Symbol("lastPromise"), B = Symbol("handlePromise"), y = Symbol("stream");
  function T(I, F) {
    return {
      value: I,
      done: F
    };
  }
  function m(I) {
    var F = I[c];
    if (F !== null) {
      var M = I[y].read();
      M !== null && (I[v] = null, I[c] = null, I[_] = null, F(T(M, !1)));
    }
  }
  function k(I) {
    process.nextTick(m, I);
  }
  function U(I, F) {
    return function(M, L) {
      I.then(function() {
        if (F[b]) {
          M(T(void 0, !0));
          return;
        }
        F[B](M, L);
      }, L);
    };
  }
  var C = Object.getPrototypeOf(function() {
  }), d = Object.setPrototypeOf((e = {
    get stream() {
      return this[y];
    },
    next: function() {
      var F = this, M = this[f];
      if (M !== null)
        return Promise.reject(M);
      if (this[b])
        return Promise.resolve(T(void 0, !0));
      if (this[y].destroyed)
        return new Promise(function(P, V) {
          process.nextTick(function() {
            F[f] ? V(F[f]) : P(T(void 0, !0));
          });
        });
      var L = this[v], W;
      if (L)
        W = new Promise(U(L, this));
      else {
        var O = this[y].read();
        if (O !== null)
          return Promise.resolve(T(O, !1));
        W = new Promise(this[B]);
      }
      return this[v] = W, W;
    }
  }, t(e, Symbol.asyncIterator, function() {
    return this;
  }), t(e, "return", function() {
    var F = this;
    return new Promise(function(M, L) {
      F[y].destroy(null, function(W) {
        if (W) {
          L(W);
          return;
        }
        M(T(void 0, !0));
      });
    });
  }), e), C), E = function(F) {
    var M, L = Object.create(d, (M = {}, t(M, y, {
      value: F,
      writable: !0
    }), t(M, c, {
      value: null,
      writable: !0
    }), t(M, _, {
      value: null,
      writable: !0
    }), t(M, f, {
      value: null,
      writable: !0
    }), t(M, b, {
      value: F._readableState.endEmitted,
      writable: !0
    }), t(M, B, {
      value: function(O, P) {
        var V = L[y].read();
        V ? (L[v] = null, L[c] = null, L[_] = null, O(T(V, !1))) : (L[c] = O, L[_] = P);
      },
      writable: !0
    }), M));
    return L[v] = null, s(F, function(W) {
      if (W && W.code !== "ERR_STREAM_PREMATURE_CLOSE") {
        var O = L[_];
        O !== null && (L[v] = null, L[c] = null, L[_] = null, O(W)), L[f] = W;
        return;
      }
      var P = L[c];
      P !== null && (L[v] = null, L[c] = null, L[_] = null, P(T(void 0, !0))), L[b] = !0;
    }), F.on("readable", k.bind(null, L)), L;
  };
  return nr = E, nr;
}
var or, Lr;
function vn() {
  return Lr || (Lr = 1, or = function() {
    throw new Error("Readable.from is not available in the browser");
  }), or;
}
var ar, Pr;
function di() {
  if (Pr)
    return ar;
  Pr = 1, ar = P;
  var e;
  P.ReadableState = O, oi.EventEmitter;
  var t = function(h, R) {
    return h.listeners(R).length;
  }, n = fi, a = Ye.Buffer, s = (typeof Oe < "u" ? Oe : typeof window < "u" ? window : typeof self < "u" ? self : {}).Uint8Array || function() {
  };
  function c(l) {
    return a.from(l);
  }
  function _(l) {
    return a.isBuffer(l) || l instanceof s;
  }
  var f = ai, b;
  f && f.debuglog ? b = f.debuglog("stream") : b = function() {
  };
  var v = nn(), B = ui, y = hi, T = y.getHighWaterMark, m = Ne.codes, k = m.ERR_INVALID_ARG_TYPE, U = m.ERR_STREAM_PUSH_AFTER_EOF, C = m.ERR_METHOD_NOT_IMPLEMENTED, d = m.ERR_STREAM_UNSHIFT_AFTER_END_EVENT, E, I, F;
  xe(P, n);
  var M = B.errorOrDestroy, L = ["error", "close", "destroy", "pause", "resume"];
  function W(l, h, R) {
    if (typeof l.prependListener == "function")
      return l.prependListener(h, R);
    !l._events || !l._events[h] ? l.on(h, R) : Array.isArray(l._events[h]) ? l._events[h].unshift(R) : l._events[h] = [R, l._events[h]];
  }
  function O(l, h, R) {
    e = e || $e(), l = l || {}, typeof R != "boolean" && (R = h instanceof e), this.objectMode = !!l.objectMode, R && (this.objectMode = this.objectMode || !!l.readableObjectMode), this.highWaterMark = T(this, l, "readableHighWaterMark", R), this.buffer = new v(), this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.paused = !0, this.emitClose = l.emitClose !== !1, this.autoDestroy = !!l.autoDestroy, this.destroyed = !1, this.defaultEncoding = l.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, l.encoding && (E || (E = Ur().StringDecoder), this.decoder = new E(l.encoding), this.encoding = l.encoding);
  }
  function P(l) {
    if (e = e || $e(), !(this instanceof P))
      return new P(l);
    var h = this instanceof e;
    this._readableState = new O(l, this, h), this.readable = !0, l && (typeof l.read == "function" && (this._read = l.read), typeof l.destroy == "function" && (this._destroy = l.destroy)), n.call(this);
  }
  Object.defineProperty(P.prototype, "destroyed", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: function() {
      return this._readableState === void 0 ? !1 : this._readableState.destroyed;
    },
    set: function(h) {
      this._readableState && (this._readableState.destroyed = h);
    }
  }), P.prototype.destroy = B.destroy, P.prototype._undestroy = B.undestroy, P.prototype._destroy = function(l, h) {
    h(l);
  }, P.prototype.push = function(l, h) {
    var R = this._readableState, N;
    return R.objectMode ? N = !0 : typeof l == "string" && (h = h || R.defaultEncoding, h !== R.encoding && (l = a.from(l, h), h = ""), N = !0), V(this, l, h, !1, N);
  }, P.prototype.unshift = function(l) {
    return V(this, l, null, !0, !1);
  };
  function V(l, h, R, N, K) {
    b("readableAddChunk", h);
    var H = l._readableState;
    if (h === null)
      H.reading = !1, ve(l, H);
    else {
      var j;
      if (K || (j = pe(H, h)), j)
        M(l, j);
      else if (H.objectMode || h && h.length > 0)
        if (typeof h != "string" && !H.objectMode && Object.getPrototypeOf(h) !== a.prototype && (h = c(h)), N)
          H.endEmitted ? M(l, new d()) : ne(l, H, h, !0);
        else if (H.ended)
          M(l, new U());
        else {
          if (H.destroyed)
            return !1;
          H.reading = !1, H.decoder && !R ? (h = H.decoder.write(h), H.objectMode || h.length !== 0 ? ne(l, H, h, !1) : he(l, H)) : ne(l, H, h, !1);
        }
      else
        N || (H.reading = !1, he(l, H));
    }
    return !H.ended && (H.length < H.highWaterMark || H.length === 0);
  }
  function ne(l, h, R, N) {
    h.flowing && h.length === 0 && !h.sync ? (h.awaitDrain = 0, l.emit("data", R)) : (h.length += h.objectMode ? 1 : R.length, N ? h.buffer.unshift(R) : h.buffer.push(R), h.needReadable && le(l)), he(l, h);
  }
  function pe(l, h) {
    var R;
    return !_(h) && typeof h != "string" && h !== void 0 && !l.objectMode && (R = new k("chunk", ["string", "Buffer", "Uint8Array"], h)), R;
  }
  P.prototype.isPaused = function() {
    return this._readableState.flowing === !1;
  }, P.prototype.setEncoding = function(l) {
    E || (E = Ur().StringDecoder);
    var h = new E(l);
    this._readableState.decoder = h, this._readableState.encoding = this._readableState.decoder.encoding;
    for (var R = this._readableState.buffer.head, N = ""; R !== null; )
      N += h.write(R.data), R = R.next;
    return this._readableState.buffer.clear(), N !== "" && this._readableState.buffer.push(N), this._readableState.length = N.length, this;
  };
  var te = 1073741824;
  function oe(l) {
    return l >= te ? l = te : (l--, l |= l >>> 1, l |= l >>> 2, l |= l >>> 4, l |= l >>> 8, l |= l >>> 16, l++), l;
  }
  function ae(l, h) {
    return l <= 0 || h.length === 0 && h.ended ? 0 : h.objectMode ? 1 : l !== l ? h.flowing && h.length ? h.buffer.head.data.length : h.length : (l > h.highWaterMark && (h.highWaterMark = oe(l)), l <= h.length ? l : h.ended ? h.length : (h.needReadable = !0, 0));
  }
  P.prototype.read = function(l) {
    b("read", l), l = parseInt(l, 10);
    var h = this._readableState, R = l;
    if (l !== 0 && (h.emittedReadable = !1), l === 0 && h.needReadable && ((h.highWaterMark !== 0 ? h.length >= h.highWaterMark : h.length > 0) || h.ended))
      return b("read: emitReadable", h.length, h.ended), h.length === 0 && h.ended ? A(this) : le(this), null;
    if (l = ae(l, h), l === 0 && h.ended)
      return h.length === 0 && A(this), null;
    var N = h.needReadable;
    b("need readable", N), (h.length === 0 || h.length - l < h.highWaterMark) && (N = !0, b("length less than watermark", N)), h.ended || h.reading ? (N = !1, b("reading or ended", N)) : N && (b("do read"), h.reading = !0, h.sync = !0, h.length === 0 && (h.needReadable = !0), this._read(h.highWaterMark), h.sync = !1, h.reading || (l = ae(R, h)));
    var K;
    return l > 0 ? K = g(l, h) : K = null, K === null ? (h.needReadable = h.length <= h.highWaterMark, l = 0) : (h.length -= l, h.awaitDrain = 0), h.length === 0 && (h.ended || (h.needReadable = !0), R !== l && h.ended && A(this)), K !== null && this.emit("data", K), K;
  };
  function ve(l, h) {
    if (b("onEofChunk"), !h.ended) {
      if (h.decoder) {
        var R = h.decoder.end();
        R && R.length && (h.buffer.push(R), h.length += h.objectMode ? 1 : R.length);
      }
      h.ended = !0, h.sync ? le(l) : (h.needReadable = !1, h.emittedReadable || (h.emittedReadable = !0, ye(l)));
    }
  }
  function le(l) {
    var h = l._readableState;
    b("emitReadable", h.needReadable, h.emittedReadable), h.needReadable = !1, h.emittedReadable || (b("emitReadable", h.flowing), h.emittedReadable = !0, process.nextTick(ye, l));
  }
  function ye(l) {
    var h = l._readableState;
    b("emitReadable_", h.destroyed, h.length, h.ended), !h.destroyed && (h.length || h.ended) && (l.emit("readable"), h.emittedReadable = !1), h.needReadable = !h.flowing && !h.ended && h.length <= h.highWaterMark, w(l);
  }
  function he(l, h) {
    h.readingMore || (h.readingMore = !0, process.nextTick(be, l, h));
  }
  function be(l, h) {
    for (; !h.reading && !h.ended && (h.length < h.highWaterMark || h.flowing && h.length === 0); ) {
      var R = h.length;
      if (b("maybeReadMore read 0"), l.read(0), R === h.length)
        break;
    }
    h.readingMore = !1;
  }
  P.prototype._read = function(l) {
    M(this, new C("_read()"));
  }, P.prototype.pipe = function(l, h) {
    var R = this, N = this._readableState;
    switch (N.pipesCount) {
      case 0:
        N.pipes = l;
        break;
      case 1:
        N.pipes = [N.pipes, l];
        break;
      default:
        N.pipes.push(l);
        break;
    }
    N.pipesCount += 1, b("pipe count=%d opts=%j", N.pipesCount, h);
    var K = (!h || h.end !== !1) && l !== process.stdout && l !== process.stderr, H = K ? we : me;
    N.endEmitted ? process.nextTick(H) : R.once("end", H), l.on("unpipe", j);
    function j(o, r) {
      b("onunpipe"), o === R && r && r.hasUnpiped === !1 && (r.hasUnpiped = !0, Re());
    }
    function we() {
      b("onend"), l.end();
    }
    var Be = Y(R);
    l.on("drain", Be);
    var Ce = !1;
    function Re() {
      b("cleanup"), l.removeListener("close", Fe), l.removeListener("finish", ue), l.removeListener("drain", Be), l.removeListener("error", Ee), l.removeListener("unpipe", j), R.removeListener("end", we), R.removeListener("end", me), R.removeListener("data", se), Ce = !0, N.awaitDrain && (!l._writableState || l._writableState.needDrain) && Be();
    }
    R.on("data", se);
    function se(o) {
      b("ondata");
      var r = l.write(o);
      b("dest.write", r), r === !1 && ((N.pipesCount === 1 && N.pipes === l || N.pipesCount > 1 && $(N.pipes, l) !== -1) && !Ce && (b("false write response, pause", N.awaitDrain), N.awaitDrain++), R.pause());
    }
    function Ee(o) {
      b("onerror", o), me(), l.removeListener("error", Ee), t(l, "error") === 0 && M(l, o);
    }
    W(l, "error", Ee);
    function Fe() {
      l.removeListener("finish", ue), me();
    }
    l.once("close", Fe);
    function ue() {
      b("onfinish"), l.removeListener("close", Fe), me();
    }
    l.once("finish", ue);
    function me() {
      b("unpipe"), R.unpipe(l);
    }
    return l.emit("pipe", R), N.flowing || (b("pipe resume"), R.resume()), l;
  };
  function Y(l) {
    return function() {
      var R = l._readableState;
      b("pipeOnDrain", R.awaitDrain), R.awaitDrain && R.awaitDrain--, R.awaitDrain === 0 && t(l, "data") && (R.flowing = !0, w(l));
    };
  }
  P.prototype.unpipe = function(l) {
    var h = this._readableState, R = {
      hasUnpiped: !1
    };
    if (h.pipesCount === 0)
      return this;
    if (h.pipesCount === 1)
      return l && l !== h.pipes ? this : (l || (l = h.pipes), h.pipes = null, h.pipesCount = 0, h.flowing = !1, l && l.emit("unpipe", this, R), this);
    if (!l) {
      var N = h.pipes, K = h.pipesCount;
      h.pipes = null, h.pipesCount = 0, h.flowing = !1;
      for (var H = 0; H < K; H++)
        N[H].emit("unpipe", this, {
          hasUnpiped: !1
        });
      return this;
    }
    var j = $(h.pipes, l);
    return j === -1 ? this : (h.pipes.splice(j, 1), h.pipesCount -= 1, h.pipesCount === 1 && (h.pipes = h.pipes[0]), l.emit("unpipe", this, R), this);
  }, P.prototype.on = function(l, h) {
    var R = n.prototype.on.call(this, l, h), N = this._readableState;
    return l === "data" ? (N.readableListening = this.listenerCount("readable") > 0, N.flowing !== !1 && this.resume()) : l === "readable" && !N.endEmitted && !N.readableListening && (N.readableListening = N.needReadable = !0, N.flowing = !1, N.emittedReadable = !1, b("on readable", N.length, N.reading), N.length ? le(this) : N.reading || process.nextTick(fe, this)), R;
  }, P.prototype.addListener = P.prototype.on, P.prototype.removeListener = function(l, h) {
    var R = n.prototype.removeListener.call(this, l, h);
    return l === "readable" && process.nextTick(Q, this), R;
  }, P.prototype.removeAllListeners = function(l) {
    var h = n.prototype.removeAllListeners.apply(this, arguments);
    return (l === "readable" || l === void 0) && process.nextTick(Q, this), h;
  };
  function Q(l) {
    var h = l._readableState;
    h.readableListening = l.listenerCount("readable") > 0, h.resumeScheduled && !h.paused ? h.flowing = !0 : l.listenerCount("data") > 0 && l.resume();
  }
  function fe(l) {
    b("readable nexttick read 0"), l.read(0);
  }
  P.prototype.resume = function() {
    var l = this._readableState;
    return l.flowing || (b("resume"), l.flowing = !l.readableListening, ge(this, l)), l.paused = !1, this;
  };
  function ge(l, h) {
    h.resumeScheduled || (h.resumeScheduled = !0, process.nextTick(ce, l, h));
  }
  function ce(l, h) {
    b("resume", h.reading), h.reading || l.read(0), h.resumeScheduled = !1, l.emit("resume"), w(l), h.flowing && !h.reading && l.read(0);
  }
  P.prototype.pause = function() {
    return b("call pause flowing=%j", this._readableState.flowing), this._readableState.flowing !== !1 && (b("pause"), this._readableState.flowing = !1, this.emit("pause")), this._readableState.paused = !0, this;
  };
  function w(l) {
    var h = l._readableState;
    for (b("flow", h.flowing); h.flowing && l.read() !== null; )
      ;
  }
  P.prototype.wrap = function(l) {
    var h = this, R = this._readableState, N = !1;
    l.on("end", function() {
      if (b("wrapped end"), R.decoder && !R.ended) {
        var j = R.decoder.end();
        j && j.length && h.push(j);
      }
      h.push(null);
    }), l.on("data", function(j) {
      if (b("wrapped data"), R.decoder && (j = R.decoder.write(j)), !(R.objectMode && j == null) && !(!R.objectMode && (!j || !j.length))) {
        var we = h.push(j);
        we || (N = !0, l.pause());
      }
    });
    for (var K in l)
      this[K] === void 0 && typeof l[K] == "function" && (this[K] = /* @__PURE__ */ function(we) {
        return function() {
          return l[we].apply(l, arguments);
        };
      }(K));
    for (var H = 0; H < L.length; H++)
      l.on(L[H], this.emit.bind(this, L[H]));
    return this._read = function(j) {
      b("wrapped _read", j), N && (N = !1, l.resume());
    }, this;
  }, typeof Symbol == "function" && (P.prototype[Symbol.asyncIterator] = function() {
    return I === void 0 && (I = xn()), I(this);
  }), Object.defineProperty(P.prototype, "readableHighWaterMark", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: function() {
      return this._readableState.highWaterMark;
    }
  }), Object.defineProperty(P.prototype, "readableBuffer", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: function() {
      return this._readableState && this._readableState.buffer;
    }
  }), Object.defineProperty(P.prototype, "readableFlowing", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: function() {
      return this._readableState.flowing;
    },
    set: function(h) {
      this._readableState && (this._readableState.flowing = h);
    }
  }), P._fromList = g, Object.defineProperty(P.prototype, "readableLength", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: function() {
      return this._readableState.length;
    }
  });
  function g(l, h) {
    if (h.length === 0)
      return null;
    var R;
    return h.objectMode ? R = h.buffer.shift() : !l || l >= h.length ? (h.decoder ? R = h.buffer.join("") : h.buffer.length === 1 ? R = h.buffer.first() : R = h.buffer.concat(h.length), h.buffer.clear()) : R = h.buffer.consume(l, h.decoder), R;
  }
  function A(l) {
    var h = l._readableState;
    b("endReadable", h.endEmitted), h.endEmitted || (h.ended = !0, process.nextTick(D, h, l));
  }
  function D(l, h) {
    if (b("endReadableNT", l.endEmitted, l.length), !l.endEmitted && l.length === 0 && (l.endEmitted = !0, h.readable = !1, h.emit("end"), l.autoDestroy)) {
      var R = h._writableState;
      (!R || R.autoDestroy && R.finished) && h.destroy();
    }
  }
  typeof Symbol == "function" && (P.from = function(l, h) {
    return F === void 0 && (F = vn()), F(P, l, h);
  });
  function $(l, h) {
    for (var R = 0, N = l.length; R < N; R++)
      if (l[R] === h)
        return R;
    return -1;
  }
  return ar;
}
var pi = Te, ft = Ne.codes, En = ft.ERR_METHOD_NOT_IMPLEMENTED, mn = ft.ERR_MULTIPLE_CALLBACK, Sn = ft.ERR_TRANSFORM_ALREADY_TRANSFORMING, Bn = ft.ERR_TRANSFORM_WITH_LENGTH_0, st = $e();
xe(Te, st);
function Rn(e, t) {
  var n = this._transformState;
  n.transforming = !1;
  var a = n.writecb;
  if (a === null)
    return this.emit("error", new mn());
  n.writechunk = null, n.writecb = null, t != null && this.push(t), a(e);
  var s = this._readableState;
  s.reading = !1, (s.needReadable || s.length < s.highWaterMark) && this._read(s.highWaterMark);
}
function Te(e) {
  if (!(this instanceof Te))
    return new Te(e);
  st.call(this, e), this._transformState = {
    afterTransform: Rn.bind(this),
    needTransform: !1,
    transforming: !1,
    writecb: null,
    writechunk: null,
    writeencoding: null
  }, this._readableState.needReadable = !0, this._readableState.sync = !1, e && (typeof e.transform == "function" && (this._transform = e.transform), typeof e.flush == "function" && (this._flush = e.flush)), this.on("prefinish", An);
}
function An() {
  var e = this;
  typeof this._flush == "function" && !this._readableState.destroyed ? this._flush(function(t, n) {
    Or(e, t, n);
  }) : Or(this, null, null);
}
Te.prototype.push = function(e, t) {
  return this._transformState.needTransform = !1, st.prototype.push.call(this, e, t);
};
Te.prototype._transform = function(e, t, n) {
  n(new En("_transform()"));
};
Te.prototype._write = function(e, t, n) {
  var a = this._transformState;
  if (a.writecb = n, a.writechunk = e, a.writeencoding = t, !a.transforming) {
    var s = this._readableState;
    (a.needTransform || s.needReadable || s.length < s.highWaterMark) && this._read(s.highWaterMark);
  }
};
Te.prototype._read = function(e) {
  var t = this._transformState;
  t.writechunk !== null && !t.transforming ? (t.transforming = !0, this._transform(t.writechunk, t.writeencoding, t.afterTransform)) : t.needTransform = !0;
};
Te.prototype._destroy = function(e, t) {
  st.prototype._destroy.call(this, e, function(n) {
    t(n);
  });
};
function Or(e, t, n) {
  if (t)
    return e.emit("error", t);
  if (n != null && e.push(n), e._writableState.length)
    throw new Bn();
  if (e._transformState.transforming)
    throw new Sn();
  return e.push(null);
}
var Tn = Ge, yi = pi;
xe(Ge, yi);
function Ge(e) {
  if (!(this instanceof Ge))
    return new Ge(e);
  yi.call(this, e);
}
Ge.prototype._transform = function(e, t, n) {
  n(null, e);
};
var fr;
function In(e) {
  var t = !1;
  return function() {
    t || (t = !0, e.apply(void 0, arguments));
  };
}
var bi = Ne.codes, Cn = bi.ERR_MISSING_ARGS, Fn = bi.ERR_STREAM_DESTROYED;
function $r(e) {
  if (e)
    throw e;
}
function kn(e) {
  return e.setHeader && typeof e.abort == "function";
}
function Mn(e, t, n, a) {
  a = In(a);
  var s = !1;
  e.on("close", function() {
    s = !0;
  }), fr === void 0 && (fr = vr), fr(e, {
    readable: t,
    writable: n
  }, function(_) {
    if (_)
      return a(_);
    s = !0, a();
  });
  var c = !1;
  return function(_) {
    if (!s && !c) {
      if (c = !0, kn(e))
        return e.abort();
      if (typeof e.destroy == "function")
        return e.destroy();
      a(_ || new Fn("pipe"));
    }
  };
}
function Hr(e) {
  e();
}
function Un(e, t) {
  return e.pipe(t);
}
function Nn(e) {
  return !e.length || typeof e[e.length - 1] != "function" ? $r : e.pop();
}
function Dn() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var a = Nn(t);
  if (Array.isArray(t[0]) && (t = t[0]), t.length < 2)
    throw new Cn("streams");
  var s, c = t.map(function(_, f) {
    var b = f < t.length - 1, v = f > 0;
    return Mn(_, b, v, function(B) {
      s || (s = B), B && c.forEach(Hr), !b && (c.forEach(Hr), a(s));
    });
  });
  return t.reduce(Un);
}
var Ln = Dn;
(function(e, t) {
  t = e.exports = di(), t.Stream = t, t.Readable = t, t.Writable = ci(), t.Duplex = $e(), t.Transform = pi, t.PassThrough = Tn, t.finished = vr, t.pipeline = Ln;
})(ur, ur.exports);
var gi = ur.exports;
const { Transform: Pn } = gi;
var On = (e) => class wi extends Pn {
  constructor(n, a, s, c, _) {
    super(_), this._rate = n, this._capacity = a, this._delimitedSuffix = s, this._hashBitLength = c, this._options = _, this._state = new e(), this._state.initialize(n, a), this._finalized = !1;
  }
  _transform(n, a, s) {
    let c = null;
    try {
      this.update(n, a);
    } catch (_) {
      c = _;
    }
    s(c);
  }
  _flush(n) {
    let a = null;
    try {
      this.push(this.digest());
    } catch (s) {
      a = s;
    }
    n(a);
  }
  update(n, a) {
    if (!Buffer.isBuffer(n) && typeof n != "string")
      throw new TypeError("Data must be a string or a buffer");
    if (this._finalized)
      throw new Error("Digest already called");
    return Buffer.isBuffer(n) || (n = Buffer.from(n, a)), this._state.absorb(n), this;
  }
  digest(n) {
    if (this._finalized)
      throw new Error("Digest already called");
    this._finalized = !0, this._delimitedSuffix && this._state.absorbLastFewBits(this._delimitedSuffix);
    let a = this._state.squeeze(this._hashBitLength / 8);
    return n !== void 0 && (a = a.toString(n)), this._resetState(), a;
  }
  // remove result from memory
  _resetState() {
    return this._state.initialize(this._rate, this._capacity), this;
  }
  // because sometimes we need hash right now and little later
  _clone() {
    const n = new wi(this._rate, this._capacity, this._delimitedSuffix, this._hashBitLength, this._options);
    return this._state.copy(n._state), n._finalized = this._finalized, n;
  }
};
const { Transform: $n } = gi;
var Hn = (e) => class xi extends $n {
  constructor(n, a, s, c) {
    super(c), this._rate = n, this._capacity = a, this._delimitedSuffix = s, this._options = c, this._state = new e(), this._state.initialize(n, a), this._finalized = !1;
  }
  _transform(n, a, s) {
    let c = null;
    try {
      this.update(n, a);
    } catch (_) {
      c = _;
    }
    s(c);
  }
  _flush() {
  }
  _read(n) {
    this.push(this.squeeze(n));
  }
  update(n, a) {
    if (!Buffer.isBuffer(n) && typeof n != "string")
      throw new TypeError("Data must be a string or a buffer");
    if (this._finalized)
      throw new Error("Squeeze already called");
    return Buffer.isBuffer(n) || (n = Buffer.from(n, a)), this._state.absorb(n), this;
  }
  squeeze(n, a) {
    this._finalized || (this._finalized = !0, this._state.absorbLastFewBits(this._delimitedSuffix));
    let s = this._state.squeeze(n);
    return a !== void 0 && (s = s.toString(a)), s;
  }
  _resetState() {
    return this._state.initialize(this._rate, this._capacity), this;
  }
  _clone() {
    const n = new xi(this._rate, this._capacity, this._delimitedSuffix, this._options);
    return this._state.copy(n._state), n._finalized = this._finalized, n;
  }
};
const qn = On, jn = Hn;
var Wn = function(e) {
  const t = qn(e), n = jn(e);
  return function(a, s) {
    switch (typeof a == "string" ? a.toLowerCase() : a) {
      case "keccak224":
        return new t(1152, 448, null, 224, s);
      case "keccak256":
        return new t(1088, 512, null, 256, s);
      case "keccak384":
        return new t(832, 768, null, 384, s);
      case "keccak512":
        return new t(576, 1024, null, 512, s);
      case "sha3-224":
        return new t(1152, 448, 6, 224, s);
      case "sha3-256":
        return new t(1088, 512, 6, 256, s);
      case "sha3-384":
        return new t(832, 768, 6, 384, s);
      case "sha3-512":
        return new t(576, 1024, 6, 512, s);
      case "shake128":
        return new n(1344, 256, 31, s);
      case "shake256":
        return new n(1088, 512, 31, s);
      default:
        throw new Error("Invald algorithm: " + a);
    }
  };
}, vi = {};
const qr = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648];
vi.p1600 = function(e) {
  for (let t = 0; t < 24; ++t) {
    const n = e[0] ^ e[10] ^ e[20] ^ e[30] ^ e[40], a = e[1] ^ e[11] ^ e[21] ^ e[31] ^ e[41], s = e[2] ^ e[12] ^ e[22] ^ e[32] ^ e[42], c = e[3] ^ e[13] ^ e[23] ^ e[33] ^ e[43], _ = e[4] ^ e[14] ^ e[24] ^ e[34] ^ e[44], f = e[5] ^ e[15] ^ e[25] ^ e[35] ^ e[45], b = e[6] ^ e[16] ^ e[26] ^ e[36] ^ e[46], v = e[7] ^ e[17] ^ e[27] ^ e[37] ^ e[47], B = e[8] ^ e[18] ^ e[28] ^ e[38] ^ e[48], y = e[9] ^ e[19] ^ e[29] ^ e[39] ^ e[49];
    let T = B ^ (s << 1 | c >>> 31), m = y ^ (c << 1 | s >>> 31);
    const k = e[0] ^ T, U = e[1] ^ m, C = e[10] ^ T, d = e[11] ^ m, E = e[20] ^ T, I = e[21] ^ m, F = e[30] ^ T, M = e[31] ^ m, L = e[40] ^ T, W = e[41] ^ m;
    T = n ^ (_ << 1 | f >>> 31), m = a ^ (f << 1 | _ >>> 31);
    const O = e[2] ^ T, P = e[3] ^ m, V = e[12] ^ T, ne = e[13] ^ m, pe = e[22] ^ T, te = e[23] ^ m, oe = e[32] ^ T, ae = e[33] ^ m, ve = e[42] ^ T, le = e[43] ^ m;
    T = s ^ (b << 1 | v >>> 31), m = c ^ (v << 1 | b >>> 31);
    const ye = e[4] ^ T, he = e[5] ^ m, be = e[14] ^ T, Y = e[15] ^ m, Q = e[24] ^ T, fe = e[25] ^ m, ge = e[34] ^ T, ce = e[35] ^ m, w = e[44] ^ T, g = e[45] ^ m;
    T = _ ^ (B << 1 | y >>> 31), m = f ^ (y << 1 | B >>> 31);
    const A = e[6] ^ T, D = e[7] ^ m, $ = e[16] ^ T, l = e[17] ^ m, h = e[26] ^ T, R = e[27] ^ m, N = e[36] ^ T, K = e[37] ^ m, H = e[46] ^ T, j = e[47] ^ m;
    T = b ^ (n << 1 | a >>> 31), m = v ^ (a << 1 | n >>> 31);
    const we = e[8] ^ T, Be = e[9] ^ m, Ce = e[18] ^ T, Re = e[19] ^ m, se = e[28] ^ T, Ee = e[29] ^ m, Fe = e[38] ^ T, ue = e[39] ^ m, me = e[48] ^ T, o = e[49] ^ m, r = k, i = U, u = d << 4 | C >>> 28, p = C << 4 | d >>> 28, x = E << 3 | I >>> 29, S = I << 3 | E >>> 29, q = M << 9 | F >>> 23, J = F << 9 | M >>> 23, G = L << 18 | W >>> 14, Z = W << 18 | L >>> 14, z = O << 1 | P >>> 31, _t = P << 1 | O >>> 31, dt = ne << 12 | V >>> 20, pt = V << 12 | ne >>> 20, yt = pe << 10 | te >>> 22, bt = te << 10 | pe >>> 22, gt = ae << 13 | oe >>> 19, wt = oe << 13 | ae >>> 19, xt = ve << 2 | le >>> 30, vt = le << 2 | ve >>> 30, Et = he << 30 | ye >>> 2, mt = ye << 30 | he >>> 2, St = be << 6 | Y >>> 26, Bt = Y << 6 | be >>> 26, Rt = fe << 11 | Q >>> 21, At = Q << 11 | fe >>> 21, Tt = ge << 15 | ce >>> 17, It = ce << 15 | ge >>> 17, Ct = g << 29 | w >>> 3, Ft = w << 29 | g >>> 3, kt = A << 28 | D >>> 4, Mt = D << 28 | A >>> 4, Ut = l << 23 | $ >>> 9, Nt = $ << 23 | l >>> 9, Dt = h << 25 | R >>> 7, Lt = R << 25 | h >>> 7, Pt = N << 21 | K >>> 11, Ot = K << 21 | N >>> 11, $t = j << 24 | H >>> 8, Ht = H << 24 | j >>> 8, qt = we << 27 | Be >>> 5, jt = Be << 27 | we >>> 5, Wt = Ce << 20 | Re >>> 12, zt = Re << 20 | Ce >>> 12, Gt = Ee << 7 | se >>> 25, Vt = se << 7 | Ee >>> 25, Yt = Fe << 8 | ue >>> 24, Kt = ue << 8 | Fe >>> 24, Xt = me << 14 | o >>> 18, Jt = o << 14 | me >>> 18;
    e[0] = r ^ ~dt & Rt, e[1] = i ^ ~pt & At, e[10] = kt ^ ~Wt & x, e[11] = Mt ^ ~zt & S, e[20] = z ^ ~St & Dt, e[21] = _t ^ ~Bt & Lt, e[30] = qt ^ ~u & yt, e[31] = jt ^ ~p & bt, e[40] = Et ^ ~Ut & Gt, e[41] = mt ^ ~Nt & Vt, e[2] = dt ^ ~Rt & Pt, e[3] = pt ^ ~At & Ot, e[12] = Wt ^ ~x & gt, e[13] = zt ^ ~S & wt, e[22] = St ^ ~Dt & Yt, e[23] = Bt ^ ~Lt & Kt, e[32] = u ^ ~yt & Tt, e[33] = p ^ ~bt & It, e[42] = Ut ^ ~Gt & q, e[43] = Nt ^ ~Vt & J, e[4] = Rt ^ ~Pt & Xt, e[5] = At ^ ~Ot & Jt, e[14] = x ^ ~gt & Ct, e[15] = S ^ ~wt & Ft, e[24] = Dt ^ ~Yt & G, e[25] = Lt ^ ~Kt & Z, e[34] = yt ^ ~Tt & $t, e[35] = bt ^ ~It & Ht, e[44] = Gt ^ ~q & xt, e[45] = Vt ^ ~J & vt, e[6] = Pt ^ ~Xt & r, e[7] = Ot ^ ~Jt & i, e[16] = gt ^ ~Ct & kt, e[17] = wt ^ ~Ft & Mt, e[26] = Yt ^ ~G & z, e[27] = Kt ^ ~Z & _t, e[36] = Tt ^ ~$t & qt, e[37] = It ^ ~Ht & jt, e[46] = q ^ ~xt & Et, e[47] = J ^ ~vt & mt, e[8] = Xt ^ ~r & dt, e[9] = Jt ^ ~i & pt, e[18] = Ct ^ ~kt & Wt, e[19] = Ft ^ ~Mt & zt, e[28] = G ^ ~z & St, e[29] = Z ^ ~_t & Bt, e[38] = $t ^ ~qt & u, e[39] = Ht ^ ~jt & p, e[48] = xt ^ ~Et & Ut, e[49] = vt ^ ~mt & Nt, e[0] ^= qr[t * 2], e[1] ^= qr[t * 2 + 1];
  }
};
const nt = vi;
function qe() {
  this.state = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ], this.blockSize = null, this.count = 0, this.squeezing = !1;
}
qe.prototype.initialize = function(e, t) {
  for (let n = 0; n < 50; ++n)
    this.state[n] = 0;
  this.blockSize = e / 8, this.count = 0, this.squeezing = !1;
};
qe.prototype.absorb = function(e) {
  for (let t = 0; t < e.length; ++t)
    this.state[~~(this.count / 4)] ^= e[t] << 8 * (this.count % 4), this.count += 1, this.count === this.blockSize && (nt.p1600(this.state), this.count = 0);
};
qe.prototype.absorbLastFewBits = function(e) {
  this.state[~~(this.count / 4)] ^= e << 8 * (this.count % 4), e & 128 && this.count === this.blockSize - 1 && nt.p1600(this.state), this.state[~~((this.blockSize - 1) / 4)] ^= 128 << 8 * ((this.blockSize - 1) % 4), nt.p1600(this.state), this.count = 0, this.squeezing = !0;
};
qe.prototype.squeeze = function(e) {
  this.squeezing || this.absorbLastFewBits(1);
  const t = Buffer.alloc(e);
  for (let n = 0; n < e; ++n)
    t[n] = this.state[~~(this.count / 4)] >>> 8 * (this.count % 4) & 255, this.count += 1, this.count === this.blockSize && (nt.p1600(this.state), this.count = 0);
  return t;
};
qe.prototype.copy = function(e) {
  for (let t = 0; t < 50; ++t)
    e.state[t] = this.state[t];
  e.blockSize = this.blockSize, e.count = this.count, e.squeezing = this.squeezing;
};
var zn = qe, ua = Wn(zn), Ei = { exports: {} }, mi = ke.Buffer;
function ut(e, t) {
  this._block = mi.alloc(e), this._finalSize = t, this._blockSize = e, this._len = 0;
}
ut.prototype.update = function(e, t) {
  typeof e == "string" && (t = t || "utf8", e = mi.from(e, t));
  for (var n = this._block, a = this._blockSize, s = e.length, c = this._len, _ = 0; _ < s; ) {
    for (var f = c % a, b = Math.min(s - _, a - f), v = 0; v < b; v++)
      n[f + v] = e[_ + v];
    c += b, _ += b, c % a === 0 && this._update(n);
  }
  return this._len += s, this;
};
ut.prototype.digest = function(e) {
  var t = this._len % this._blockSize;
  this._block[t] = 128, this._block.fill(0, t + 1), t >= this._finalSize && (this._update(this._block), this._block.fill(0));
  var n = this._len * 8;
  if (n <= 4294967295)
    this._block.writeUInt32BE(n, this._blockSize - 4);
  else {
    var a = (n & 4294967295) >>> 0, s = (n - a) / 4294967296;
    this._block.writeUInt32BE(s, this._blockSize - 8), this._block.writeUInt32BE(a, this._blockSize - 4);
  }
  this._update(this._block);
  var c = this._hash();
  return e ? c.toString(e) : c;
};
ut.prototype._update = function() {
  throw new Error("_update must be implemented by subclass");
};
var je = ut, Gn = xe, Si = je, Vn = ke.Buffer, Yn = [
  1518500249,
  1859775393,
  -1894007588,
  -899497514
], Kn = new Array(80);
function Ke() {
  this.init(), this._w = Kn, Si.call(this, 64, 56);
}
Gn(Ke, Si);
Ke.prototype.init = function() {
  return this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520, this;
};
function Xn(e) {
  return e << 5 | e >>> 27;
}
function Jn(e) {
  return e << 30 | e >>> 2;
}
function Zn(e, t, n, a) {
  return e === 0 ? t & n | ~t & a : e === 2 ? t & n | t & a | n & a : t ^ n ^ a;
}
Ke.prototype._update = function(e) {
  for (var t = this._w, n = this._a | 0, a = this._b | 0, s = this._c | 0, c = this._d | 0, _ = this._e | 0, f = 0; f < 16; ++f)
    t[f] = e.readInt32BE(f * 4);
  for (; f < 80; ++f)
    t[f] = t[f - 3] ^ t[f - 8] ^ t[f - 14] ^ t[f - 16];
  for (var b = 0; b < 80; ++b) {
    var v = ~~(b / 20), B = Xn(n) + Zn(v, a, s, c) + _ + t[b] + Yn[v] | 0;
    _ = c, c = s, s = Jn(a), a = n, n = B;
  }
  this._a = n + this._a | 0, this._b = a + this._b | 0, this._c = s + this._c | 0, this._d = c + this._d | 0, this._e = _ + this._e | 0;
};
Ke.prototype._hash = function() {
  var e = Vn.allocUnsafe(20);
  return e.writeInt32BE(this._a | 0, 0), e.writeInt32BE(this._b | 0, 4), e.writeInt32BE(this._c | 0, 8), e.writeInt32BE(this._d | 0, 12), e.writeInt32BE(this._e | 0, 16), e;
};
var Qn = Ke, eo = xe, Bi = je, to = ke.Buffer, ro = [
  1518500249,
  1859775393,
  -1894007588,
  -899497514
], io = new Array(80);
function Xe() {
  this.init(), this._w = io, Bi.call(this, 64, 56);
}
eo(Xe, Bi);
Xe.prototype.init = function() {
  return this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520, this;
};
function no(e) {
  return e << 1 | e >>> 31;
}
function oo(e) {
  return e << 5 | e >>> 27;
}
function ao(e) {
  return e << 30 | e >>> 2;
}
function fo(e, t, n, a) {
  return e === 0 ? t & n | ~t & a : e === 2 ? t & n | t & a | n & a : t ^ n ^ a;
}
Xe.prototype._update = function(e) {
  for (var t = this._w, n = this._a | 0, a = this._b | 0, s = this._c | 0, c = this._d | 0, _ = this._e | 0, f = 0; f < 16; ++f)
    t[f] = e.readInt32BE(f * 4);
  for (; f < 80; ++f)
    t[f] = no(t[f - 3] ^ t[f - 8] ^ t[f - 14] ^ t[f - 16]);
  for (var b = 0; b < 80; ++b) {
    var v = ~~(b / 20), B = oo(n) + fo(v, a, s, c) + _ + t[b] + ro[v] | 0;
    _ = c, c = s, s = ao(a), a = n, n = B;
  }
  this._a = n + this._a | 0, this._b = a + this._b | 0, this._c = s + this._c | 0, this._d = c + this._d | 0, this._e = _ + this._e | 0;
};
Xe.prototype._hash = function() {
  var e = to.allocUnsafe(20);
  return e.writeInt32BE(this._a | 0, 0), e.writeInt32BE(this._b | 0, 4), e.writeInt32BE(this._c | 0, 8), e.writeInt32BE(this._d | 0, 12), e.writeInt32BE(this._e | 0, 16), e;
};
var so = Xe, uo = xe, Ri = je, lo = ke.Buffer, ho = [
  1116352408,
  1899447441,
  3049323471,
  3921009573,
  961987163,
  1508970993,
  2453635748,
  2870763221,
  3624381080,
  310598401,
  607225278,
  1426881987,
  1925078388,
  2162078206,
  2614888103,
  3248222580,
  3835390401,
  4022224774,
  264347078,
  604807628,
  770255983,
  1249150122,
  1555081692,
  1996064986,
  2554220882,
  2821834349,
  2952996808,
  3210313671,
  3336571891,
  3584528711,
  113926993,
  338241895,
  666307205,
  773529912,
  1294757372,
  1396182291,
  1695183700,
  1986661051,
  2177026350,
  2456956037,
  2730485921,
  2820302411,
  3259730800,
  3345764771,
  3516065817,
  3600352804,
  4094571909,
  275423344,
  430227734,
  506948616,
  659060556,
  883997877,
  958139571,
  1322822218,
  1537002063,
  1747873779,
  1955562222,
  2024104815,
  2227730452,
  2361852424,
  2428436474,
  2756734187,
  3204031479,
  3329325298
], co = new Array(64);
function Je() {
  this.init(), this._w = co, Ri.call(this, 64, 56);
}
uo(Je, Ri);
Je.prototype.init = function() {
  return this._a = 1779033703, this._b = 3144134277, this._c = 1013904242, this._d = 2773480762, this._e = 1359893119, this._f = 2600822924, this._g = 528734635, this._h = 1541459225, this;
};
function _o(e, t, n) {
  return n ^ e & (t ^ n);
}
function po(e, t, n) {
  return e & t | n & (e | t);
}
function yo(e) {
  return (e >>> 2 | e << 30) ^ (e >>> 13 | e << 19) ^ (e >>> 22 | e << 10);
}
function bo(e) {
  return (e >>> 6 | e << 26) ^ (e >>> 11 | e << 21) ^ (e >>> 25 | e << 7);
}
function go(e) {
  return (e >>> 7 | e << 25) ^ (e >>> 18 | e << 14) ^ e >>> 3;
}
function wo(e) {
  return (e >>> 17 | e << 15) ^ (e >>> 19 | e << 13) ^ e >>> 10;
}
Je.prototype._update = function(e) {
  for (var t = this._w, n = this._a | 0, a = this._b | 0, s = this._c | 0, c = this._d | 0, _ = this._e | 0, f = this._f | 0, b = this._g | 0, v = this._h | 0, B = 0; B < 16; ++B)
    t[B] = e.readInt32BE(B * 4);
  for (; B < 64; ++B)
    t[B] = wo(t[B - 2]) + t[B - 7] + go(t[B - 15]) + t[B - 16] | 0;
  for (var y = 0; y < 64; ++y) {
    var T = v + bo(_) + _o(_, f, b) + ho[y] + t[y] | 0, m = yo(n) + po(n, a, s) | 0;
    v = b, b = f, f = _, _ = c + T | 0, c = s, s = a, a = n, n = T + m | 0;
  }
  this._a = n + this._a | 0, this._b = a + this._b | 0, this._c = s + this._c | 0, this._d = c + this._d | 0, this._e = _ + this._e | 0, this._f = f + this._f | 0, this._g = b + this._g | 0, this._h = v + this._h | 0;
};
Je.prototype._hash = function() {
  var e = lo.allocUnsafe(32);
  return e.writeInt32BE(this._a, 0), e.writeInt32BE(this._b, 4), e.writeInt32BE(this._c, 8), e.writeInt32BE(this._d, 12), e.writeInt32BE(this._e, 16), e.writeInt32BE(this._f, 20), e.writeInt32BE(this._g, 24), e.writeInt32BE(this._h, 28), e;
};
var Ai = Je, xo = xe, vo = Ai, Eo = je, mo = ke.Buffer, So = new Array(64);
function lt() {
  this.init(), this._w = So, Eo.call(this, 64, 56);
}
xo(lt, vo);
lt.prototype.init = function() {
  return this._a = 3238371032, this._b = 914150663, this._c = 812702999, this._d = 4144912697, this._e = 4290775857, this._f = 1750603025, this._g = 1694076839, this._h = 3204075428, this;
};
lt.prototype._hash = function() {
  var e = mo.allocUnsafe(28);
  return e.writeInt32BE(this._a, 0), e.writeInt32BE(this._b, 4), e.writeInt32BE(this._c, 8), e.writeInt32BE(this._d, 12), e.writeInt32BE(this._e, 16), e.writeInt32BE(this._f, 20), e.writeInt32BE(this._g, 24), e;
};
var Bo = lt, Ro = xe, Ti = je, Ao = ke.Buffer, jr = [
  1116352408,
  3609767458,
  1899447441,
  602891725,
  3049323471,
  3964484399,
  3921009573,
  2173295548,
  961987163,
  4081628472,
  1508970993,
  3053834265,
  2453635748,
  2937671579,
  2870763221,
  3664609560,
  3624381080,
  2734883394,
  310598401,
  1164996542,
  607225278,
  1323610764,
  1426881987,
  3590304994,
  1925078388,
  4068182383,
  2162078206,
  991336113,
  2614888103,
  633803317,
  3248222580,
  3479774868,
  3835390401,
  2666613458,
  4022224774,
  944711139,
  264347078,
  2341262773,
  604807628,
  2007800933,
  770255983,
  1495990901,
  1249150122,
  1856431235,
  1555081692,
  3175218132,
  1996064986,
  2198950837,
  2554220882,
  3999719339,
  2821834349,
  766784016,
  2952996808,
  2566594879,
  3210313671,
  3203337956,
  3336571891,
  1034457026,
  3584528711,
  2466948901,
  113926993,
  3758326383,
  338241895,
  168717936,
  666307205,
  1188179964,
  773529912,
  1546045734,
  1294757372,
  1522805485,
  1396182291,
  2643833823,
  1695183700,
  2343527390,
  1986661051,
  1014477480,
  2177026350,
  1206759142,
  2456956037,
  344077627,
  2730485921,
  1290863460,
  2820302411,
  3158454273,
  3259730800,
  3505952657,
  3345764771,
  106217008,
  3516065817,
  3606008344,
  3600352804,
  1432725776,
  4094571909,
  1467031594,
  275423344,
  851169720,
  430227734,
  3100823752,
  506948616,
  1363258195,
  659060556,
  3750685593,
  883997877,
  3785050280,
  958139571,
  3318307427,
  1322822218,
  3812723403,
  1537002063,
  2003034995,
  1747873779,
  3602036899,
  1955562222,
  1575990012,
  2024104815,
  1125592928,
  2227730452,
  2716904306,
  2361852424,
  442776044,
  2428436474,
  593698344,
  2756734187,
  3733110249,
  3204031479,
  2999351573,
  3329325298,
  3815920427,
  3391569614,
  3928383900,
  3515267271,
  566280711,
  3940187606,
  3454069534,
  4118630271,
  4000239992,
  116418474,
  1914138554,
  174292421,
  2731055270,
  289380356,
  3203993006,
  460393269,
  320620315,
  685471733,
  587496836,
  852142971,
  1086792851,
  1017036298,
  365543100,
  1126000580,
  2618297676,
  1288033470,
  3409855158,
  1501505948,
  4234509866,
  1607167915,
  987167468,
  1816402316,
  1246189591
], To = new Array(160);
function Ze() {
  this.init(), this._w = To, Ti.call(this, 128, 112);
}
Ro(Ze, Ti);
Ze.prototype.init = function() {
  return this._ah = 1779033703, this._bh = 3144134277, this._ch = 1013904242, this._dh = 2773480762, this._eh = 1359893119, this._fh = 2600822924, this._gh = 528734635, this._hh = 1541459225, this._al = 4089235720, this._bl = 2227873595, this._cl = 4271175723, this._dl = 1595750129, this._el = 2917565137, this._fl = 725511199, this._gl = 4215389547, this._hl = 327033209, this;
};
function Wr(e, t, n) {
  return n ^ e & (t ^ n);
}
function zr(e, t, n) {
  return e & t | n & (e | t);
}
function Gr(e, t) {
  return (e >>> 28 | t << 4) ^ (t >>> 2 | e << 30) ^ (t >>> 7 | e << 25);
}
function Vr(e, t) {
  return (e >>> 14 | t << 18) ^ (e >>> 18 | t << 14) ^ (t >>> 9 | e << 23);
}
function Io(e, t) {
  return (e >>> 1 | t << 31) ^ (e >>> 8 | t << 24) ^ e >>> 7;
}
function Co(e, t) {
  return (e >>> 1 | t << 31) ^ (e >>> 8 | t << 24) ^ (e >>> 7 | t << 25);
}
function Fo(e, t) {
  return (e >>> 19 | t << 13) ^ (t >>> 29 | e << 3) ^ e >>> 6;
}
function ko(e, t) {
  return (e >>> 19 | t << 13) ^ (t >>> 29 | e << 3) ^ (e >>> 6 | t << 26);
}
function ie(e, t) {
  return e >>> 0 < t >>> 0 ? 1 : 0;
}
Ze.prototype._update = function(e) {
  for (var t = this._w, n = this._ah | 0, a = this._bh | 0, s = this._ch | 0, c = this._dh | 0, _ = this._eh | 0, f = this._fh | 0, b = this._gh | 0, v = this._hh | 0, B = this._al | 0, y = this._bl | 0, T = this._cl | 0, m = this._dl | 0, k = this._el | 0, U = this._fl | 0, C = this._gl | 0, d = this._hl | 0, E = 0; E < 32; E += 2)
    t[E] = e.readInt32BE(E * 4), t[E + 1] = e.readInt32BE(E * 4 + 4);
  for (; E < 160; E += 2) {
    var I = t[E - 30], F = t[E - 15 * 2 + 1], M = Io(I, F), L = Co(F, I);
    I = t[E - 2 * 2], F = t[E - 2 * 2 + 1];
    var W = Fo(I, F), O = ko(F, I), P = t[E - 7 * 2], V = t[E - 7 * 2 + 1], ne = t[E - 16 * 2], pe = t[E - 16 * 2 + 1], te = L + V | 0, oe = M + P + ie(te, L) | 0;
    te = te + O | 0, oe = oe + W + ie(te, O) | 0, te = te + pe | 0, oe = oe + ne + ie(te, pe) | 0, t[E] = oe, t[E + 1] = te;
  }
  for (var ae = 0; ae < 160; ae += 2) {
    oe = t[ae], te = t[ae + 1];
    var ve = zr(n, a, s), le = zr(B, y, T), ye = Gr(n, B), he = Gr(B, n), be = Vr(_, k), Y = Vr(k, _), Q = jr[ae], fe = jr[ae + 1], ge = Wr(_, f, b), ce = Wr(k, U, C), w = d + Y | 0, g = v + be + ie(w, d) | 0;
    w = w + ce | 0, g = g + ge + ie(w, ce) | 0, w = w + fe | 0, g = g + Q + ie(w, fe) | 0, w = w + te | 0, g = g + oe + ie(w, te) | 0;
    var A = he + le | 0, D = ye + ve + ie(A, he) | 0;
    v = b, d = C, b = f, C = U, f = _, U = k, k = m + w | 0, _ = c + g + ie(k, m) | 0, c = s, m = T, s = a, T = y, a = n, y = B, B = w + A | 0, n = g + D + ie(B, w) | 0;
  }
  this._al = this._al + B | 0, this._bl = this._bl + y | 0, this._cl = this._cl + T | 0, this._dl = this._dl + m | 0, this._el = this._el + k | 0, this._fl = this._fl + U | 0, this._gl = this._gl + C | 0, this._hl = this._hl + d | 0, this._ah = this._ah + n + ie(this._al, B) | 0, this._bh = this._bh + a + ie(this._bl, y) | 0, this._ch = this._ch + s + ie(this._cl, T) | 0, this._dh = this._dh + c + ie(this._dl, m) | 0, this._eh = this._eh + _ + ie(this._el, k) | 0, this._fh = this._fh + f + ie(this._fl, U) | 0, this._gh = this._gh + b + ie(this._gl, C) | 0, this._hh = this._hh + v + ie(this._hl, d) | 0;
};
Ze.prototype._hash = function() {
  var e = Ao.allocUnsafe(64);
  function t(n, a, s) {
    e.writeInt32BE(n, s), e.writeInt32BE(a, s + 4);
  }
  return t(this._ah, this._al, 0), t(this._bh, this._bl, 8), t(this._ch, this._cl, 16), t(this._dh, this._dl, 24), t(this._eh, this._el, 32), t(this._fh, this._fl, 40), t(this._gh, this._gl, 48), t(this._hh, this._hl, 56), e;
};
var Ii = Ze, Mo = xe, Uo = Ii, No = je, Do = ke.Buffer, Lo = new Array(160);
function ht() {
  this.init(), this._w = Lo, No.call(this, 128, 112);
}
Mo(ht, Uo);
ht.prototype.init = function() {
  return this._ah = 3418070365, this._bh = 1654270250, this._ch = 2438529370, this._dh = 355462360, this._eh = 1731405415, this._fh = 2394180231, this._gh = 3675008525, this._hh = 1203062813, this._al = 3238371032, this._bl = 914150663, this._cl = 812702999, this._dl = 4144912697, this._el = 4290775857, this._fl = 1750603025, this._gl = 1694076839, this._hl = 3204075428, this;
};
ht.prototype._hash = function() {
  var e = Do.allocUnsafe(48);
  function t(n, a, s) {
    e.writeInt32BE(n, s), e.writeInt32BE(a, s + 4);
  }
  return t(this._ah, this._al, 0), t(this._bh, this._bl, 8), t(this._ch, this._cl, 16), t(this._dh, this._dl, 24), t(this._eh, this._el, 32), t(this._fh, this._fl, 40), e;
};
var Po = ht, De = Ei.exports = function(t) {
  t = t.toLowerCase();
  var n = De[t];
  if (!n)
    throw new Error(t + " is not supported (we accept pull requests)");
  return new n();
};
De.sha = Qn;
De.sha1 = so;
De.sha224 = Bo;
De.sha256 = Ai;
De.sha384 = Po;
De.sha512 = Ii;
var la = Ei.exports, Qe, ee, Ci, Fi, Me, Yr, ki, cr, Er, _r, dr, Mi, Ve = {}, Ui = [], Oo = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, ct = Array.isArray;
function Ae(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Ni(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function pr(e, t, n) {
  var a, s, c, _ = {};
  for (c in t)
    c == "key" ? a = t[c] : c == "ref" ? s = t[c] : _[c] = t[c];
  if (arguments.length > 2 && (_.children = arguments.length > 3 ? Qe.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (c in e.defaultProps)
      _[c] === void 0 && (_[c] = e.defaultProps[c]);
  return We(e, _, a, s, null);
}
function We(e, t, n, a, s) {
  var c = { type: e, props: t, key: n, ref: a, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: s ?? ++Ci, __i: -1, __u: 0 };
  return s == null && ee.vnode != null && ee.vnode(c), c;
}
function $o() {
  return { current: null };
}
function et(e) {
  return e.children;
}
function ze(e, t) {
  this.props = e, this.context = t;
}
function Ue(e, t) {
  if (t == null)
    return e.__ ? Ue(e.__, e.__i + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? Ue(e) : null;
}
function Di(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Di(e);
  }
}
function yr(e) {
  (!e.__d && (e.__d = !0) && Me.push(e) && !ot.__r++ || Yr !== ee.debounceRendering) && ((Yr = ee.debounceRendering) || ki)(ot);
}
function ot() {
  var e, t, n, a, s, c, _, f;
  for (Me.sort(cr); e = Me.shift(); )
    e.__d && (t = Me.length, a = void 0, c = (s = (n = e).__v).__e, _ = [], f = [], n.__P && ((a = Ae({}, s)).__v = s.__v + 1, ee.vnode && ee.vnode(a), mr(n.__P, a, s, n.__n, n.__P.namespaceURI, 32 & s.__u ? [c] : null, _, c ?? Ue(s), !!(32 & s.__u), f), a.__v = s.__v, a.__.__k[a.__i] = a, $i(_, a, f), a.__e != c && Di(a)), Me.length > t && Me.sort(cr));
  ot.__r = 0;
}
function Li(e, t, n, a, s, c, _, f, b, v, B) {
  var y, T, m, k, U, C = a && a.__k || Ui, d = t.length;
  for (n.__d = b, Ho(n, t, C), b = n.__d, y = 0; y < d; y++)
    (m = n.__k[y]) != null && typeof m != "boolean" && typeof m != "function" && (T = m.__i === -1 ? Ve : C[m.__i] || Ve, m.__i = y, mr(e, m, T, s, c, _, f, b, v, B), k = m.__e, m.ref && T.ref != m.ref && (T.ref && Sr(T.ref, null, m), B.push(m.ref, m.__c || k, m)), U == null && k != null && (U = k), 65536 & m.__u || T.__k === m.__k ? b = Pi(m, b, e) : typeof m.type == "function" && m.__d !== void 0 ? b = m.__d : k && (b = k.nextSibling), m.__d = void 0, m.__u &= -196609);
  n.__d = b, n.__e = U;
}
function Ho(e, t, n) {
  var a, s, c, _, f, b = t.length, v = n.length, B = v, y = 0;
  for (e.__k = [], a = 0; a < b; a++)
    _ = a + y, (s = e.__k[a] = (s = t[a]) == null || typeof s == "boolean" || typeof s == "function" ? null : typeof s == "string" || typeof s == "number" || typeof s == "bigint" || s.constructor == String ? We(null, s, null, null, null) : ct(s) ? We(et, { children: s }, null, null, null) : s.constructor === void 0 && s.__b > 0 ? We(s.type, s.props, s.key, s.ref ? s.ref : null, s.__v) : s) != null ? (s.__ = e, s.__b = e.__b + 1, f = qo(s, n, _, B), s.__i = f, c = null, f !== -1 && (B--, (c = n[f]) && (c.__u |= 131072)), c == null || c.__v === null ? (f == -1 && y--, typeof s.type != "function" && (s.__u |= 65536)) : f !== _ && (f == _ - 1 ? y-- : f == _ + 1 ? y++ : f > _ ? B > b - _ ? y += f - _ : y-- : f < _ && (f == _ - y ? y -= f - _ : y++), f !== a + y && (s.__u |= 65536))) : (c = n[_]) && c.key == null && c.__e && !(131072 & c.__u) && (c.__e == e.__d && (e.__d = Ue(c)), br(c, c, !1), n[_] = null, B--);
  if (B)
    for (a = 0; a < v; a++)
      (c = n[a]) != null && !(131072 & c.__u) && (c.__e == e.__d && (e.__d = Ue(c)), br(c, c));
}
function Pi(e, t, n) {
  var a, s;
  if (typeof e.type == "function") {
    for (a = e.__k, s = 0; a && s < a.length; s++)
      a[s] && (a[s].__ = e, t = Pi(a[s], t, n));
    return t;
  }
  e.__e != t && (t && e.type && !n.contains(t) && (t = Ue(e)), n.insertBefore(e.__e, t || null), t = e.__e);
  do
    t = t && t.nextSibling;
  while (t != null && t.nodeType === 8);
  return t;
}
function Oi(e, t) {
  return t = t || [], e == null || typeof e == "boolean" || (ct(e) ? e.some(function(n) {
    Oi(n, t);
  }) : t.push(e)), t;
}
function qo(e, t, n, a) {
  var s = e.key, c = e.type, _ = n - 1, f = n + 1, b = t[n];
  if (b === null || b && s == b.key && c === b.type && !(131072 & b.__u))
    return n;
  if (a > (b != null && !(131072 & b.__u) ? 1 : 0))
    for (; _ >= 0 || f < t.length; ) {
      if (_ >= 0) {
        if ((b = t[_]) && !(131072 & b.__u) && s == b.key && c === b.type)
          return _;
        _--;
      }
      if (f < t.length) {
        if ((b = t[f]) && !(131072 & b.__u) && s == b.key && c === b.type)
          return f;
        f++;
      }
    }
  return -1;
}
function Kr(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || Oo.test(t) ? n : n + "px";
}
function tt(e, t, n, a, s) {
  var c;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof a == "string" && (e.style.cssText = a = ""), a)
          for (t in a)
            n && t in n || Kr(e.style, t, "");
        if (n)
          for (t in n)
            a && n[t] === a[t] || Kr(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      c = t !== (t = t.replace(/(PointerCapture)$|Capture$/i, "$1")), t = t.toLowerCase() in e || t === "onFocusOut" || t === "onFocusIn" ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + c] = n, n ? a ? n.u = a.u : (n.u = Er, e.addEventListener(t, c ? dr : _r, c)) : e.removeEventListener(t, c ? dr : _r, c);
    else {
      if (s == "http://www.w3.org/2000/svg")
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t != "width" && t != "height" && t != "href" && t != "list" && t != "form" && t != "tabIndex" && t != "download" && t != "rowSpan" && t != "colSpan" && t != "role" && t != "popover" && t in e)
        try {
          e[t] = n ?? "";
          break e;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && t[4] !== "-" ? e.removeAttribute(t) : e.setAttribute(t, t == "popover" && n == 1 ? "" : n));
    }
}
function Xr(e) {
  return function(t) {
    if (this.l) {
      var n = this.l[t.type + e];
      if (t.t == null)
        t.t = Er++;
      else if (t.t < n.u)
        return;
      return n(ee.event ? ee.event(t) : t);
    }
  };
}
function mr(e, t, n, a, s, c, _, f, b, v) {
  var B, y, T, m, k, U, C, d, E, I, F, M, L, W, O, P, V = t.type;
  if (t.constructor !== void 0)
    return null;
  128 & n.__u && (b = !!(32 & n.__u), c = [f = t.__e = n.__e]), (B = ee.__b) && B(t);
  e:
    if (typeof V == "function")
      try {
        if (d = t.props, E = "prototype" in V && V.prototype.render, I = (B = V.contextType) && a[B.__c], F = B ? I ? I.props.value : B.__ : a, n.__c ? C = (y = t.__c = n.__c).__ = y.__E : (E ? t.__c = y = new V(d, F) : (t.__c = y = new ze(d, F), y.constructor = V, y.render = Wo), I && I.sub(y), y.props = d, y.state || (y.state = {}), y.context = F, y.__n = a, T = y.__d = !0, y.__h = [], y._sb = []), E && y.__s == null && (y.__s = y.state), E && V.getDerivedStateFromProps != null && (y.__s == y.state && (y.__s = Ae({}, y.__s)), Ae(y.__s, V.getDerivedStateFromProps(d, y.__s))), m = y.props, k = y.state, y.__v = t, T)
          E && V.getDerivedStateFromProps == null && y.componentWillMount != null && y.componentWillMount(), E && y.componentDidMount != null && y.__h.push(y.componentDidMount);
        else {
          if (E && V.getDerivedStateFromProps == null && d !== m && y.componentWillReceiveProps != null && y.componentWillReceiveProps(d, F), !y.__e && (y.shouldComponentUpdate != null && y.shouldComponentUpdate(d, y.__s, F) === !1 || t.__v === n.__v)) {
            for (t.__v !== n.__v && (y.props = d, y.state = y.__s, y.__d = !1), t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(ne) {
              ne && (ne.__ = t);
            }), M = 0; M < y._sb.length; M++)
              y.__h.push(y._sb[M]);
            y._sb = [], y.__h.length && _.push(y);
            break e;
          }
          y.componentWillUpdate != null && y.componentWillUpdate(d, y.__s, F), E && y.componentDidUpdate != null && y.__h.push(function() {
            y.componentDidUpdate(m, k, U);
          });
        }
        if (y.context = F, y.props = d, y.__P = e, y.__e = !1, L = ee.__r, W = 0, E) {
          for (y.state = y.__s, y.__d = !1, L && L(t), B = y.render(y.props, y.state, y.context), O = 0; O < y._sb.length; O++)
            y.__h.push(y._sb[O]);
          y._sb = [];
        } else
          do
            y.__d = !1, L && L(t), B = y.render(y.props, y.state, y.context), y.state = y.__s;
          while (y.__d && ++W < 25);
        y.state = y.__s, y.getChildContext != null && (a = Ae(Ae({}, a), y.getChildContext())), E && !T && y.getSnapshotBeforeUpdate != null && (U = y.getSnapshotBeforeUpdate(m, k)), Li(e, ct(P = B != null && B.type === et && B.key == null ? B.props.children : B) ? P : [P], t, n, a, s, c, _, f, b, v), y.base = t.__e, t.__u &= -161, y.__h.length && _.push(y), C && (y.__E = y.__ = null);
      } catch (ne) {
        if (t.__v = null, b || c != null) {
          for (t.__u |= b ? 160 : 32; f && f.nodeType === 8 && f.nextSibling; )
            f = f.nextSibling;
          c[c.indexOf(f)] = null, t.__e = f;
        } else
          t.__e = n.__e, t.__k = n.__k;
        ee.__e(ne, t, n);
      }
    else
      c == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = jo(n.__e, t, n, a, s, c, _, b, v);
  (B = ee.diffed) && B(t);
}
function $i(e, t, n) {
  t.__d = void 0;
  for (var a = 0; a < n.length; a++)
    Sr(n[a], n[++a], n[++a]);
  ee.__c && ee.__c(t, e), e.some(function(s) {
    try {
      e = s.__h, s.__h = [], e.some(function(c) {
        c.call(s);
      });
    } catch (c) {
      ee.__e(c, s.__v);
    }
  });
}
function jo(e, t, n, a, s, c, _, f, b) {
  var v, B, y, T, m, k, U, C = n.props, d = t.props, E = t.type;
  if (E === "svg" ? s = "http://www.w3.org/2000/svg" : E === "math" ? s = "http://www.w3.org/1998/Math/MathML" : s || (s = "http://www.w3.org/1999/xhtml"), c != null) {
    for (v = 0; v < c.length; v++)
      if ((m = c[v]) && "setAttribute" in m == !!E && (E ? m.localName === E : m.nodeType === 3)) {
        e = m, c[v] = null;
        break;
      }
  }
  if (e == null) {
    if (E === null)
      return document.createTextNode(d);
    e = document.createElementNS(s, E, d.is && d), c = null, f = !1;
  }
  if (E === null)
    C === d || f && e.data === d || (e.data = d);
  else {
    if (c = c && Qe.call(e.childNodes), C = n.props || Ve, !f && c != null)
      for (C = {}, v = 0; v < e.attributes.length; v++)
        C[(m = e.attributes[v]).name] = m.value;
    for (v in C)
      if (m = C[v], v != "children") {
        if (v == "dangerouslySetInnerHTML")
          y = m;
        else if (v !== "key" && !(v in d)) {
          if (v == "value" && "defaultValue" in d || v == "checked" && "defaultChecked" in d)
            continue;
          tt(e, v, null, m, s);
        }
      }
    for (v in d)
      m = d[v], v == "children" ? T = m : v == "dangerouslySetInnerHTML" ? B = m : v == "value" ? k = m : v == "checked" ? U = m : v === "key" || f && typeof m != "function" || C[v] === m || tt(e, v, m, C[v], s);
    if (B)
      f || y && (B.__html === y.__html || B.__html === e.innerHTML) || (e.innerHTML = B.__html), t.__k = [];
    else if (y && (e.innerHTML = ""), Li(e, ct(T) ? T : [T], t, n, a, E === "foreignObject" ? "http://www.w3.org/1999/xhtml" : s, c, _, c ? c[0] : n.__k && Ue(n, 0), f, b), c != null)
      for (v = c.length; v--; )
        c[v] != null && Ni(c[v]);
    f || (v = "value", k !== void 0 && (k !== e[v] || E === "progress" && !k || E === "option" && k !== C[v]) && tt(e, v, k, C[v], s), v = "checked", U !== void 0 && U !== e[v] && tt(e, v, U, C[v], s));
  }
  return e;
}
function Sr(e, t, n) {
  try {
    if (typeof e == "function") {
      var a = typeof e.__u == "function";
      a && e.__u(), a && t == null || (e.__u = e(t));
    } else
      e.current = t;
  } catch (s) {
    ee.__e(s, n);
  }
}
function br(e, t, n) {
  var a, s;
  if (ee.unmount && ee.unmount(e), (a = e.ref) && (a.current && a.current !== e.__e || Sr(a, null, t)), (a = e.__c) != null) {
    if (a.componentWillUnmount)
      try {
        a.componentWillUnmount();
      } catch (c) {
        ee.__e(c, t);
      }
    a.base = a.__P = null;
  }
  if (a = e.__k)
    for (s = 0; s < a.length; s++)
      a[s] && br(a[s], t, n || typeof e.type != "function");
  n || e.__e == null || Ni(e.__e), e.__c = e.__ = e.__e = e.__d = void 0;
}
function Wo(e, t, n) {
  return this.constructor(e, n);
}
function Hi(e, t, n) {
  var a, s, c, _;
  ee.__ && ee.__(e, t), s = (a = typeof n == "function") ? null : n && n.__k || t.__k, c = [], _ = [], mr(t, e = (!a && n || t).__k = pr(et, null, [e]), s || Ve, Ve, t.namespaceURI, !a && n ? [n] : s ? null : t.firstChild ? Qe.call(t.childNodes) : null, c, !a && n ? n : s ? s.__e : t.firstChild, a, _), $i(c, e, _);
}
function qi(e, t) {
  Hi(e, t, qi);
}
function zo(e, t, n) {
  var a, s, c, _, f = Ae({}, e.props);
  for (c in e.type && e.type.defaultProps && (_ = e.type.defaultProps), t)
    c == "key" ? a = t[c] : c == "ref" ? s = t[c] : f[c] = t[c] === void 0 && _ !== void 0 ? _[c] : t[c];
  return arguments.length > 2 && (f.children = arguments.length > 3 ? Qe.call(arguments, 2) : n), We(e.type, f, a || e.key, s || e.ref, null);
}
function Go(e, t) {
  var n = { __c: t = "__cC" + Mi++, __: e, Consumer: function(a, s) {
    return a.children(s);
  }, Provider: function(a) {
    var s, c;
    return this.getChildContext || (s = [], (c = {})[t] = this, this.getChildContext = function() {
      return c;
    }, this.componentWillUnmount = function() {
      s = null;
    }, this.shouldComponentUpdate = function(_) {
      this.props.value !== _.value && s.some(function(f) {
        f.__e = !0, yr(f);
      });
    }, this.sub = function(_) {
      s.push(_);
      var f = _.componentWillUnmount;
      _.componentWillUnmount = function() {
        s && s.splice(s.indexOf(_), 1), f && f.call(_);
      };
    }), a.children;
  } };
  return n.Provider.__ = n.Consumer.contextType = n;
}
Qe = Ui.slice, ee = { __e: function(e, t, n, a) {
  for (var s, c, _; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((c = s.constructor) && c.getDerivedStateFromError != null && (s.setState(c.getDerivedStateFromError(e)), _ = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, a || {}), _ = s.__d), _)
          return s.__E = s;
      } catch (f) {
        e = f;
      }
  throw e;
} }, Ci = 0, Fi = function(e) {
  return e != null && e.constructor == null;
}, ze.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ae({}, this.state), typeof e == "function" && (e = e(Ae({}, n), this.props)), e && Ae(n, e), e != null && this.__v && (t && this._sb.push(t), yr(this));
}, ze.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), yr(this));
}, ze.prototype.render = et, Me = [], ki = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, cr = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, ot.__r = 0, Er = 0, _r = Xr(!1), dr = Xr(!0), Mi = 0;
const Vo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Component: ze,
  Fragment: et,
  cloneElement: zo,
  createContext: Go,
  createElement: pr,
  createRef: $o,
  h: pr,
  hydrate: qi,
  get isValidElement() {
    return Fi;
  },
  get options() {
    return ee;
  },
  render: Hi,
  toChildArray: Oi
}, Symbol.toStringTag, { value: "Module" })), ha = /* @__PURE__ */ wr(Vo);
var Ie, X, sr, Jr, He = 0, ji = [], re = ee, Zr = re.__b, Qr = re.__r, ei = re.diffed, ti = re.__c, ri = re.unmount, ii = re.__;
function Le(e, t) {
  re.__h && re.__h(X, e, He || t), He = 0;
  var n = X.__H || (X.__H = { __: [], __h: [] });
  return e >= n.__.length && n.__.push({}), n.__[e];
}
function Wi(e) {
  return He = 1, zi(Vi, e);
}
function zi(e, t, n) {
  var a = Le(Ie++, 2);
  if (a.t = e, !a.__c && (a.__ = [n ? n(t) : Vi(void 0, t), function(f) {
    var b = a.__N ? a.__N[0] : a.__[0], v = a.t(b, f);
    b !== v && (a.__N = [v, a.__[1]], a.__c.setState({}));
  }], a.__c = X, !X.u)) {
    var s = function(f, b, v) {
      if (!a.__c.__H)
        return !0;
      var B = a.__c.__H.__.filter(function(T) {
        return !!T.__c;
      });
      if (B.every(function(T) {
        return !T.__N;
      }))
        return !c || c.call(this, f, b, v);
      var y = !1;
      return B.forEach(function(T) {
        if (T.__N) {
          var m = T.__[0];
          T.__ = T.__N, T.__N = void 0, m !== T.__[0] && (y = !0);
        }
      }), !(!y && a.__c.props === f) && (!c || c.call(this, f, b, v));
    };
    X.u = !0;
    var c = X.shouldComponentUpdate, _ = X.componentWillUpdate;
    X.componentWillUpdate = function(f, b, v) {
      if (this.__e) {
        var B = c;
        c = void 0, s(f, b, v), c = B;
      }
      _ && _.call(this, f, b, v);
    }, X.shouldComponentUpdate = s;
  }
  return a.__N || a.__;
}
function Yo(e, t) {
  var n = Le(Ie++, 3);
  !re.__s && Rr(n.__H, t) && (n.__ = e, n.i = t, X.__H.__h.push(n));
}
function Gi(e, t) {
  var n = Le(Ie++, 4);
  !re.__s && Rr(n.__H, t) && (n.__ = e, n.i = t, X.__h.push(n));
}
function Ko(e) {
  return He = 5, Br(function() {
    return { current: e };
  }, []);
}
function Xo(e, t, n) {
  He = 6, Gi(function() {
    return typeof e == "function" ? (e(t()), function() {
      return e(null);
    }) : e ? (e.current = t(), function() {
      return e.current = null;
    }) : void 0;
  }, n == null ? n : n.concat(e));
}
function Br(e, t) {
  var n = Le(Ie++, 7);
  return Rr(n.__H, t) && (n.__ = e(), n.__H = t, n.__h = e), n.__;
}
function Jo(e, t) {
  return He = 8, Br(function() {
    return e;
  }, t);
}
function Zo(e) {
  var t = X.context[e.__c], n = Le(Ie++, 9);
  return n.c = e, t ? (n.__ == null && (n.__ = !0, t.sub(X)), t.props.value) : e.__;
}
function Qo(e, t) {
  re.useDebugValue && re.useDebugValue(t ? t(e) : e);
}
function ea(e) {
  var t = Le(Ie++, 10), n = Wi();
  return t.__ = e, X.componentDidCatch || (X.componentDidCatch = function(a, s) {
    t.__ && t.__(a, s), n[1](a);
  }), [n[0], function() {
    n[1](void 0);
  }];
}
function ta() {
  var e = Le(Ie++, 11);
  if (!e.__) {
    for (var t = X.__v; t !== null && !t.__m && t.__ !== null; )
      t = t.__;
    var n = t.__m || (t.__m = [0, 0]);
    e.__ = "P" + n[0] + "-" + n[1]++;
  }
  return e.__;
}
function ra() {
  for (var e; e = ji.shift(); )
    if (e.__P && e.__H)
      try {
        e.__H.__h.forEach(it), e.__H.__h.forEach(gr), e.__H.__h = [];
      } catch (t) {
        e.__H.__h = [], re.__e(t, e.__v);
      }
}
re.__b = function(e) {
  X = null, Zr && Zr(e);
}, re.__ = function(e, t) {
  e && t.__k && t.__k.__m && (e.__m = t.__k.__m), ii && ii(e, t);
}, re.__r = function(e) {
  Qr && Qr(e), Ie = 0;
  var t = (X = e.__c).__H;
  t && (sr === X ? (t.__h = [], X.__h = [], t.__.forEach(function(n) {
    n.__N && (n.__ = n.__N), n.i = n.__N = void 0;
  })) : (t.__h.forEach(it), t.__h.forEach(gr), t.__h = [], Ie = 0)), sr = X;
}, re.diffed = function(e) {
  ei && ei(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (ji.push(t) !== 1 && Jr === re.requestAnimationFrame || ((Jr = re.requestAnimationFrame) || ia)(ra)), t.__H.__.forEach(function(n) {
    n.i && (n.__H = n.i), n.i = void 0;
  })), sr = X = null;
}, re.__c = function(e, t) {
  t.some(function(n) {
    try {
      n.__h.forEach(it), n.__h = n.__h.filter(function(a) {
        return !a.__ || gr(a);
      });
    } catch (a) {
      t.some(function(s) {
        s.__h && (s.__h = []);
      }), t = [], re.__e(a, n.__v);
    }
  }), ti && ti(e, t);
}, re.unmount = function(e) {
  ri && ri(e);
  var t, n = e.__c;
  n && n.__H && (n.__H.__.forEach(function(a) {
    try {
      it(a);
    } catch (s) {
      t = s;
    }
  }), n.__H = void 0, t && re.__e(t, n.__v));
};
var ni = typeof requestAnimationFrame == "function";
function ia(e) {
  var t, n = function() {
    clearTimeout(a), ni && cancelAnimationFrame(t), setTimeout(e);
  }, a = setTimeout(n, 100);
  ni && (t = requestAnimationFrame(n));
}
function it(e) {
  var t = X, n = e.__c;
  typeof n == "function" && (e.__c = void 0, n()), X = t;
}
function gr(e) {
  var t = X;
  e.__c = e.__(), X = t;
}
function Rr(e, t) {
  return !e || e.length !== t.length || t.some(function(n, a) {
    return n !== e[a];
  });
}
function Vi(e, t) {
  return typeof t == "function" ? t(e) : t;
}
const na = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  useCallback: Jo,
  useContext: Zo,
  useDebugValue: Qo,
  useEffect: Yo,
  useErrorBoundary: ea,
  useId: ta,
  useImperativeHandle: Xo,
  useLayoutEffect: Gi,
  useMemo: Br,
  useReducer: zi,
  useRef: Ko,
  useState: Wi
}, Symbol.toStringTag, { value: "Module" })), ca = /* @__PURE__ */ wr(na);
export {
  ca as a,
  fa as b,
  ua as j,
  ha as r,
  la as s
};
