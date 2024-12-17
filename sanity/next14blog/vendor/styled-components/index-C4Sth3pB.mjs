import O, { useState as Je, useMemo as vt, useEffect as Qe, useContext as Se, createElement as Xe } from "react";
function tr(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var x = function() {
  return x = Object.assign || function(e) {
    for (var r, n = 1, s = arguments.length; n < s; n++) {
      r = arguments[n];
      for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
    }
    return e;
  }, x.apply(this, arguments);
};
function V(t, e, r) {
  if (r || arguments.length === 2) for (var n = 0, s = e.length, o; n < s; n++)
    (o || !(n in e)) && (o || (o = Array.prototype.slice.call(e, 0, n)), o[n] = e[n]);
  return t.concat(o || Array.prototype.slice.call(e));
}
var er = function(e, r, n, s) {
  var o = n ? n.call(s, e, r) : void 0;
  if (o !== void 0)
    return !!o;
  if (e === r)
    return !0;
  if (typeof e != "object" || !e || typeof r != "object" || !r)
    return !1;
  var a = Object.keys(e), c = Object.keys(r);
  if (a.length !== c.length)
    return !1;
  for (var i = Object.prototype.hasOwnProperty.bind(r), h = 0; h < a.length; h++) {
    var u = a[h];
    if (!i(u))
      return !1;
    var p = e[u], l = r[u];
    if (o = n ? n.call(s, p, l, u) : void 0, o === !1 || o === void 0 && p !== l)
      return !1;
  }
  return !0;
};
const rr = /* @__PURE__ */ tr(er);
var S = "-ms-", it = "-moz-", m = "-webkit-", we = "comm", At = "rule", Ut = "decl", nr = "@import", be = "@keyframes", sr = "@layer", Ce = Math.abs, Vt = String.fromCharCode, Gt = Object.assign;
function or(t, e) {
  return A(t, 0) ^ 45 ? (((e << 2 ^ A(t, 0)) << 2 ^ A(t, 1)) << 2 ^ A(t, 2)) << 2 ^ A(t, 3) : 0;
}
function Ie(t) {
  return t.trim();
}
function j(t, e) {
  return (t = e.exec(t)) ? t[0] : t;
}
function f(t, e, r) {
  return t.replace(e, r);
}
function St(t, e, r) {
  return t.indexOf(e, r);
}
function A(t, e) {
  return t.charCodeAt(e) | 0;
}
function Z(t, e, r) {
  return t.slice(e, r);
}
function T(t) {
  return t.length;
}
function Pe(t) {
  return t.length;
}
function at(t, e) {
  return e.push(t), t;
}
function ar(t, e) {
  return t.map(e).join("");
}
function ae(t, e) {
  return t.filter(function(r) {
    return !j(r, e);
  });
}
var Ot = 1, J = 1, Ee = 0, $ = 0, E = 0, et = "";
function Rt(t, e, r, n, s, o, a, c) {
  return { value: t, root: e, parent: r, type: n, props: s, children: o, line: Ot, column: J, length: a, return: "", siblings: c };
}
function M(t, e) {
  return Gt(Rt("", null, null, "", null, null, 0, t.siblings), t, { length: -t.length }, e);
}
function K(t) {
  for (; t.root; )
    t = M(t.root, { children: [t] });
  at(t, t.siblings);
}
function ir() {
  return E;
}
function cr() {
  return E = $ > 0 ? A(et, --$) : 0, J--, E === 10 && (J = 1, Ot--), E;
}
function N() {
  return E = $ < Ee ? A(et, $++) : 0, J++, E === 10 && (J = 1, Ot++), E;
}
function B() {
  return A(et, $);
}
function wt() {
  return $;
}
function kt(t, e) {
  return Z(et, t, e);
}
function Lt(t) {
  switch (t) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function ur(t) {
  return Ot = J = 1, Ee = T(et = t), $ = 0, [];
}
function fr(t) {
  return et = "", t;
}
function jt(t) {
  return Ie(kt($ - 1, Wt(t === 91 ? t + 2 : t === 40 ? t + 1 : t)));
}
function pr(t) {
  for (; (E = B()) && E < 33; )
    N();
  return Lt(t) > 2 || Lt(E) > 3 ? "" : " ";
}
function hr(t, e) {
  for (; --e && N() && !(E < 48 || E > 102 || E > 57 && E < 65 || E > 70 && E < 97); )
    ;
  return kt(t, wt() + (e < 6 && B() == 32 && N() == 32));
}
function Wt(t) {
  for (; N(); )
    switch (E) {
      case t:
        return $;
      case 34:
      case 39:
        t !== 34 && t !== 39 && Wt(E);
        break;
      case 40:
        t === 41 && Wt(t);
        break;
      case 92:
        N();
        break;
    }
  return $;
}
function lr(t, e) {
  for (; N() && t + E !== 57; )
    if (t + E === 84 && B() === 47)
      break;
  return "/*" + kt(e, $ - 1) + "*" + Vt(t === 47 ? t : N());
}
function dr(t) {
  for (; !Lt(B()); )
    N();
  return kt(t, $);
}
function gr(t) {
  return fr(bt("", null, null, null, [""], t = ur(t), 0, [0], t));
}
function bt(t, e, r, n, s, o, a, c, i) {
  for (var h = 0, u = 0, p = a, l = 0, g = 0, y = 0, w = 1, R = 1, P = 1, C = 0, b = "", I = s, _ = o, v = n, d = b; R; )
    switch (y = C, C = N()) {
      case 40:
        if (y != 108 && A(d, p - 1) == 58) {
          St(d += f(jt(C), "&", "&\f"), "&\f", Ce(h ? c[h - 1] : 0)) != -1 && (P = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        d += jt(C);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        d += pr(y);
        break;
      case 92:
        d += hr(wt() - 1, 7);
        continue;
      case 47:
        switch (B()) {
          case 42:
          case 47:
            at(mr(lr(N(), wt()), e, r, i), i);
            break;
          default:
            d += "/";
        }
        break;
      case 123 * w:
        c[h++] = T(d) * P;
      case 125 * w:
      case 59:
      case 0:
        switch (C) {
          case 0:
          case 125:
            R = 0;
          case 59 + u:
            P == -1 && (d = f(d, /\f/g, "")), g > 0 && T(d) - p && at(g > 32 ? ce(d + ";", n, r, p - 1, i) : ce(f(d, " ", "") + ";", n, r, p - 2, i), i);
            break;
          case 59:
            d += ";";
          default:
            if (at(v = ie(d, e, r, h, u, s, c, b, I = [], _ = [], p, o), o), C === 123)
              if (u === 0)
                bt(d, e, v, v, I, o, p, c, _);
              else
                switch (l === 99 && A(d, 3) === 110 ? 100 : l) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    bt(t, v, v, n && at(ie(t, v, v, 0, 0, s, c, b, s, I = [], p, _), _), s, _, p, c, n ? I : _);
                    break;
                  default:
                    bt(d, v, v, v, [""], _, 0, c, _);
                }
        }
        h = u = g = 0, w = P = 1, b = d = "", p = a;
        break;
      case 58:
        p = 1 + T(d), g = y;
      default:
        if (w < 1) {
          if (C == 123)
            --w;
          else if (C == 125 && w++ == 0 && cr() == 125)
            continue;
        }
        switch (d += Vt(C), C * w) {
          case 38:
            P = u > 0 ? 1 : (d += "\f", -1);
            break;
          case 44:
            c[h++] = (T(d) - 1) * P, P = 1;
            break;
          case 64:
            B() === 45 && (d += jt(N())), l = B(), u = p = T(b = d += dr(wt())), C++;
            break;
          case 45:
            y === 45 && T(d) == 2 && (w = 0);
        }
    }
  return o;
}
function ie(t, e, r, n, s, o, a, c, i, h, u, p) {
  for (var l = s - 1, g = s === 0 ? o : [""], y = Pe(g), w = 0, R = 0, P = 0; w < n; ++w)
    for (var C = 0, b = Z(t, l + 1, l = Ce(R = a[w])), I = t; C < y; ++C)
      (I = Ie(R > 0 ? g[C] + " " + b : f(b, /&\f/g, g[C]))) && (i[P++] = I);
  return Rt(t, e, r, s === 0 ? At : c, i, h, u, p);
}
function mr(t, e, r, n) {
  return Rt(t, e, r, we, Vt(ir()), Z(t, 2, -2), 0, n);
}
function ce(t, e, r, n, s) {
  return Rt(t, e, r, Ut, Z(t, 0, n), Z(t, n + 1, -1), n, s);
}
function xe(t, e, r) {
  switch (or(t, e)) {
    case 5103:
      return m + "print-" + t + t;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return m + t + t;
    case 4789:
      return it + t + t;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return m + t + it + t + S + t + t;
    case 5936:
      switch (A(t, e + 11)) {
        case 114:
          return m + t + S + f(t, /[svh]\w+-[tblr]{2}/, "tb") + t;
        case 108:
          return m + t + S + f(t, /[svh]\w+-[tblr]{2}/, "tb-rl") + t;
        case 45:
          return m + t + S + f(t, /[svh]\w+-[tblr]{2}/, "lr") + t;
      }
    case 6828:
    case 4268:
    case 2903:
      return m + t + S + t + t;
    case 6165:
      return m + t + S + "flex-" + t + t;
    case 5187:
      return m + t + f(t, /(\w+).+(:[^]+)/, m + "box-$1$2" + S + "flex-$1$2") + t;
    case 5443:
      return m + t + S + "flex-item-" + f(t, /flex-|-self/g, "") + (j(t, /flex-|baseline/) ? "" : S + "grid-row-" + f(t, /flex-|-self/g, "")) + t;
    case 4675:
      return m + t + S + "flex-line-pack" + f(t, /align-content|flex-|-self/g, "") + t;
    case 5548:
      return m + t + S + f(t, "shrink", "negative") + t;
    case 5292:
      return m + t + S + f(t, "basis", "preferred-size") + t;
    case 6060:
      return m + "box-" + f(t, "-grow", "") + m + t + S + f(t, "grow", "positive") + t;
    case 4554:
      return m + f(t, /([^-])(transform)/g, "$1" + m + "$2") + t;
    case 6187:
      return f(f(f(t, /(zoom-|grab)/, m + "$1"), /(image-set)/, m + "$1"), t, "") + t;
    case 5495:
    case 3959:
      return f(t, /(image-set\([^]*)/, m + "$1$`$1");
    case 4968:
      return f(f(t, /(.+:)(flex-)?(.*)/, m + "box-pack:$3" + S + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + m + t + t;
    case 4200:
      if (!j(t, /flex-|baseline/)) return S + "grid-column-align" + Z(t, e) + t;
      break;
    case 2592:
    case 3360:
      return S + f(t, "template-", "") + t;
    case 4384:
    case 3616:
      return r && r.some(function(n, s) {
        return e = s, j(n.props, /grid-\w+-end/);
      }) ? ~St(t + (r = r[e].value), "span", 0) ? t : S + f(t, "-start", "") + t + S + "grid-row-span:" + (~St(r, "span", 0) ? j(r, /\d+/) : +j(r, /\d+/) - +j(t, /\d+/)) + ";" : S + f(t, "-start", "") + t;
    case 4896:
    case 4128:
      return r && r.some(function(n) {
        return j(n.props, /grid-\w+-start/);
      }) ? t : S + f(f(t, "-end", "-span"), "span ", "") + t;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return f(t, /(.+)-inline(.+)/, m + "$1$2") + t;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (T(t) - 1 - e > 6)
        switch (A(t, e + 1)) {
          case 109:
            if (A(t, e + 4) !== 45)
              break;
          case 102:
            return f(t, /(.+:)(.+)-([^]+)/, "$1" + m + "$2-$3$1" + it + (A(t, e + 3) == 108 ? "$3" : "$2-$3")) + t;
          case 115:
            return ~St(t, "stretch", 0) ? xe(f(t, "stretch", "fill-available"), e, r) + t : t;
        }
      break;
    case 5152:
    case 5920:
      return f(t, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(n, s, o, a, c, i, h) {
        return S + s + ":" + o + h + (a ? S + s + "-span:" + (c ? i : +i - +o) + h : "") + t;
      });
    case 4949:
      if (A(t, e + 6) === 121)
        return f(t, ":", ":" + m) + t;
      break;
    case 6444:
      switch (A(t, A(t, 14) === 45 ? 18 : 11)) {
        case 120:
          return f(t, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + m + (A(t, 14) === 45 ? "inline-" : "") + "box$3$1" + m + "$2$3$1" + S + "$2box$3") + t;
        case 100:
          return f(t, ":", ":" + S) + t;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return f(t, "scroll-", "scroll-snap-") + t;
  }
  return t;
}
function Pt(t, e) {
  for (var r = "", n = 0; n < t.length; n++)
    r += e(t[n], n, t, e) || "";
  return r;
}
function yr(t, e, r, n) {
  switch (t.type) {
    case sr:
      if (t.children.length) break;
    case nr:
    case Ut:
      return t.return = t.return || t.value;
    case we:
      return "";
    case be:
      return t.return = t.value + "{" + Pt(t.children, n) + "}";
    case At:
      if (!T(t.value = t.props.join(","))) return "";
  }
  return T(r = Pt(t.children, n)) ? t.return = t.value + "{" + r + "}" : "";
}
function vr(t) {
  var e = Pe(t);
  return function(r, n, s, o) {
    for (var a = "", c = 0; c < e; c++)
      a += t[c](r, n, s, o) || "";
    return a;
  };
}
function Sr(t) {
  return function(e) {
    e.root || (e = e.return) && t(e);
  };
}
function wr(t, e, r, n) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case Ut:
        t.return = xe(t.value, t.length, r);
        return;
      case be:
        return Pt([M(t, { value: f(t.value, "@", "@" + m) })], n);
      case At:
        if (t.length)
          return ar(r = t.props, function(s) {
            switch (j(s, n = /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                K(M(t, { props: [f(s, /:(read-\w+)/, ":" + it + "$1")] })), K(M(t, { props: [s] })), Gt(t, { props: ae(r, n) });
                break;
              case "::placeholder":
                K(M(t, { props: [f(s, /:(plac\w+)/, ":" + m + "input-$1")] })), K(M(t, { props: [f(s, /:(plac\w+)/, ":" + it + "$1")] })), K(M(t, { props: [f(s, /:(plac\w+)/, S + "input-$1")] })), K(M(t, { props: [s] })), Gt(t, { props: ae(r, n) });
                break;
            }
            return "";
          });
    }
}
var br = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, L = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", _e = "active", Et = "data-styled-version", Q = "6.1.13", Zt = `/*!sc*/
`, ct = typeof window < "u" && "HTMLElement" in window, Cr = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" && process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY), Ir = {}, $t = Object.freeze([]), X = Object.freeze({});
function Jt(t, e, r) {
  return r === void 0 && (r = X), t.theme !== r.theme && t.theme || e || r.theme;
}
var Ae = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), Pr = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Er = /(^-|-$)/g;
function ue(t) {
  return t.replace(Pr, "-").replace(Er, "");
}
var xr = /(a)(d)/gi, mt = 52, fe = function(t) {
  return String.fromCharCode(t + (t > 25 ? 39 : 97));
};
function Yt(t) {
  var e, r = "";
  for (e = Math.abs(t); e > mt; e = e / mt | 0) r = fe(e % mt) + r;
  return (fe(e % mt) + r).replace(xr, "$1-$2");
}
var zt, Oe = 5381, U = function(t, e) {
  for (var r = e.length; r; ) t = 33 * t ^ e.charCodeAt(--r);
  return t;
}, Re = function(t) {
  return U(Oe, t);
};
function Qt(t) {
  return Yt(Re(t) >>> 0);
}
function ke(t) {
  return t.displayName || t.name || "Component";
}
function Ft(t) {
  return typeof t == "string" && !0;
}
var $e = typeof Symbol == "function" && Symbol.for, Ne = $e ? Symbol.for("react.memo") : 60115, _r = $e ? Symbol.for("react.forward_ref") : 60112, Ar = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, Or = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, Te = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, Rr = ((zt = {})[_r] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, zt[Ne] = Te, zt);
function pe(t) {
  return ("type" in (e = t) && e.type.$$typeof) === Ne ? Te : "$$typeof" in t ? Rr[t.$$typeof] : Ar;
  var e;
}
var kr = Object.defineProperty, $r = Object.getOwnPropertyNames, he = Object.getOwnPropertySymbols, Nr = Object.getOwnPropertyDescriptor, Tr = Object.getPrototypeOf, le = Object.prototype;
function Xt(t, e, r) {
  if (typeof e != "string") {
    if (le) {
      var n = Tr(e);
      n && n !== le && Xt(t, n, r);
    }
    var s = $r(e);
    he && (s = s.concat(he(e)));
    for (var o = pe(t), a = pe(e), c = 0; c < s.length; ++c) {
      var i = s[c];
      if (!(i in Or || r && r[i] || a && i in a || o && i in o)) {
        var h = Nr(e, i);
        try {
          kr(t, i, h);
        } catch {
        }
      }
    }
  }
  return t;
}
function q(t) {
  return typeof t == "function";
}
function te(t) {
  return typeof t == "object" && "styledComponentId" in t;
}
function Y(t, e) {
  return t && e ? "".concat(t, " ").concat(e) : t || e || "";
}
function ut(t, e) {
  if (t.length === 0) return "";
  for (var r = t[0], n = 1; n < t.length; n++) r += e ? e + t[n] : t[n];
  return r;
}
function ft(t) {
  return t !== null && typeof t == "object" && t.constructor.name === Object.name && !("props" in t && t.$$typeof);
}
function Bt(t, e, r) {
  if (r === void 0 && (r = !1), !r && !ft(t) && !Array.isArray(t)) return e;
  if (Array.isArray(e)) for (var n = 0; n < e.length; n++) t[n] = Bt(t[n], e[n]);
  else if (ft(e)) for (var n in e) t[n] = Bt(t[n], e[n]);
  return t;
}
function ee(t, e) {
  Object.defineProperty(t, "toString", { value: e });
}
function k(t) {
  for (var e = [], r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
  return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t, " for more information.").concat(e.length > 0 ? " Args: ".concat(e.join(", ")) : ""));
}
var Dr = function() {
  function t(e) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = e;
  }
  return t.prototype.indexOfGroup = function(e) {
    for (var r = 0, n = 0; n < e; n++) r += this.groupSizes[n];
    return r;
  }, t.prototype.insertRules = function(e, r) {
    if (e >= this.groupSizes.length) {
      for (var n = this.groupSizes, s = n.length, o = s; e >= o; ) if ((o <<= 1) < 0) throw k(16, "".concat(e));
      this.groupSizes = new Uint32Array(o), this.groupSizes.set(n), this.length = o;
      for (var a = s; a < o; a++) this.groupSizes[a] = 0;
    }
    for (var c = this.indexOfGroup(e + 1), i = (a = 0, r.length); a < i; a++) this.tag.insertRule(c, r[a]) && (this.groupSizes[e]++, c++);
  }, t.prototype.clearGroup = function(e) {
    if (e < this.length) {
      var r = this.groupSizes[e], n = this.indexOfGroup(e), s = n + r;
      this.groupSizes[e] = 0;
      for (var o = n; o < s; o++) this.tag.deleteRule(n);
    }
  }, t.prototype.getGroup = function(e) {
    var r = "";
    if (e >= this.length || this.groupSizes[e] === 0) return r;
    for (var n = this.groupSizes[e], s = this.indexOfGroup(e), o = s + n, a = s; a < o; a++) r += "".concat(this.tag.getRule(a)).concat(Zt);
    return r;
  }, t;
}(), Ct = /* @__PURE__ */ new Map(), xt = /* @__PURE__ */ new Map(), It = 1, yt = function(t) {
  if (Ct.has(t)) return Ct.get(t);
  for (; xt.has(It); ) It++;
  var e = It++;
  return Ct.set(t, e), xt.set(e, t), e;
}, jr = function(t, e) {
  It = e + 1, Ct.set(t, e), xt.set(e, t);
}, zr = "style[".concat(L, "][").concat(Et, '="').concat(Q, '"]'), Fr = new RegExp("^".concat(L, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), Mr = function(t, e, r) {
  for (var n, s = r.split(","), o = 0, a = s.length; o < a; o++) (n = s[o]) && t.registerName(e, n);
}, Gr = function(t, e) {
  for (var r, n = ((r = e.textContent) !== null && r !== void 0 ? r : "").split(Zt), s = [], o = 0, a = n.length; o < a; o++) {
    var c = n[o].trim();
    if (c) {
      var i = c.match(Fr);
      if (i) {
        var h = 0 | parseInt(i[1], 10), u = i[2];
        h !== 0 && (jr(u, h), Mr(t, u, i[3]), t.getTag().insertRules(h, s)), s.length = 0;
      } else s.push(c);
    }
  }
}, de = function(t) {
  for (var e = document.querySelectorAll(zr), r = 0, n = e.length; r < n; r++) {
    var s = e[r];
    s && s.getAttribute(L) !== _e && (Gr(t, s), s.parentNode && s.parentNode.removeChild(s));
  }
};
function qt() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var De = function(t) {
  var e = document.head, r = t || e, n = document.createElement("style"), s = function(c) {
    var i = Array.from(c.querySelectorAll("style[".concat(L, "]")));
    return i[i.length - 1];
  }(r), o = s !== void 0 ? s.nextSibling : null;
  n.setAttribute(L, _e), n.setAttribute(Et, Q);
  var a = qt();
  return a && n.setAttribute("nonce", a), r.insertBefore(n, o), n;
}, Lr = function() {
  function t(e) {
    this.element = De(e), this.element.appendChild(document.createTextNode("")), this.sheet = function(r) {
      if (r.sheet) return r.sheet;
      for (var n = document.styleSheets, s = 0, o = n.length; s < o; s++) {
        var a = n[s];
        if (a.ownerNode === r) return a;
      }
      throw k(17);
    }(this.element), this.length = 0;
  }
  return t.prototype.insertRule = function(e, r) {
    try {
      return this.sheet.insertRule(r, e), this.length++, !0;
    } catch {
      return !1;
    }
  }, t.prototype.deleteRule = function(e) {
    this.sheet.deleteRule(e), this.length--;
  }, t.prototype.getRule = function(e) {
    var r = this.sheet.cssRules[e];
    return r && r.cssText ? r.cssText : "";
  }, t;
}(), Wr = function() {
  function t(e) {
    this.element = De(e), this.nodes = this.element.childNodes, this.length = 0;
  }
  return t.prototype.insertRule = function(e, r) {
    if (e <= this.length && e >= 0) {
      var n = document.createTextNode(r);
      return this.element.insertBefore(n, this.nodes[e] || null), this.length++, !0;
    }
    return !1;
  }, t.prototype.deleteRule = function(e) {
    this.element.removeChild(this.nodes[e]), this.length--;
  }, t.prototype.getRule = function(e) {
    return e < this.length ? this.nodes[e].textContent : "";
  }, t;
}(), Yr = function() {
  function t(e) {
    this.rules = [], this.length = 0;
  }
  return t.prototype.insertRule = function(e, r) {
    return e <= this.length && (this.rules.splice(e, 0, r), this.length++, !0);
  }, t.prototype.deleteRule = function(e) {
    this.rules.splice(e, 1), this.length--;
  }, t.prototype.getRule = function(e) {
    return e < this.length ? this.rules[e] : "";
  }, t;
}(), ge = ct, Br = { isServer: !ct, useCSSOMInjection: !Cr }, tt = function() {
  function t(e, r, n) {
    e === void 0 && (e = X), r === void 0 && (r = {});
    var s = this;
    this.options = x(x({}, Br), e), this.gs = r, this.names = new Map(n), this.server = !!e.isServer, !this.server && ct && ge && (ge = !1, de(this)), ee(this, function() {
      return function(o) {
        for (var a = o.getTag(), c = a.length, i = "", h = function(p) {
          var l = function(P) {
            return xt.get(P);
          }(p);
          if (l === void 0) return "continue";
          var g = o.names.get(l), y = a.getGroup(p);
          if (g === void 0 || !g.size || y.length === 0) return "continue";
          var w = "".concat(L, ".g").concat(p, '[id="').concat(l, '"]'), R = "";
          g !== void 0 && g.forEach(function(P) {
            P.length > 0 && (R += "".concat(P, ","));
          }), i += "".concat(y).concat(w, '{content:"').concat(R, '"}').concat(Zt);
        }, u = 0; u < c; u++) h(u);
        return i;
      }(s);
    });
  }
  return t.registerId = function(e) {
    return yt(e);
  }, t.prototype.rehydrate = function() {
    !this.server && ct && de(this);
  }, t.prototype.reconstructWithOptions = function(e, r) {
    return r === void 0 && (r = !0), new t(x(x({}, this.options), e), this.gs, r && this.names || void 0);
  }, t.prototype.allocateGSInstance = function(e) {
    return this.gs[e] = (this.gs[e] || 0) + 1;
  }, t.prototype.getTag = function() {
    return this.tag || (this.tag = (e = function(r) {
      var n = r.useCSSOMInjection, s = r.target;
      return r.isServer ? new Yr(s) : n ? new Lr(s) : new Wr(s);
    }(this.options), new Dr(e)));
    var e;
  }, t.prototype.hasNameForId = function(e, r) {
    return this.names.has(e) && this.names.get(e).has(r);
  }, t.prototype.registerName = function(e, r) {
    if (yt(e), this.names.has(e)) this.names.get(e).add(r);
    else {
      var n = /* @__PURE__ */ new Set();
      n.add(r), this.names.set(e, n);
    }
  }, t.prototype.insertRules = function(e, r, n) {
    this.registerName(e, r), this.getTag().insertRules(yt(e), n);
  }, t.prototype.clearNames = function(e) {
    this.names.has(e) && this.names.get(e).clear();
  }, t.prototype.clearRules = function(e) {
    this.getTag().clearGroup(yt(e)), this.clearNames(e);
  }, t.prototype.clearTag = function() {
    this.tag = void 0;
  }, t;
}(), qr = /&/g, Hr = /^\s*\/\/.*$/gm;
function je(t, e) {
  return t.map(function(r) {
    return r.type === "rule" && (r.value = "".concat(e, " ").concat(r.value), r.value = r.value.replaceAll(",", ",".concat(e, " ")), r.props = r.props.map(function(n) {
      return "".concat(e, " ").concat(n);
    })), Array.isArray(r.children) && r.type !== "@keyframes" && (r.children = je(r.children, e)), r;
  });
}
function ze(t) {
  var e, r, n, s = t === void 0 ? X : t, o = s.options, a = o === void 0 ? X : o, c = s.plugins, i = c === void 0 ? $t : c, h = function(l, g, y) {
    return y.startsWith(r) && y.endsWith(r) && y.replaceAll(r, "").length > 0 ? ".".concat(e) : l;
  }, u = i.slice();
  u.push(function(l) {
    l.type === At && l.value.includes("&") && (l.props[0] = l.props[0].replace(qr, r).replace(n, h));
  }), a.prefix && u.push(wr), u.push(yr);
  var p = function(l, g, y, w) {
    g === void 0 && (g = ""), y === void 0 && (y = ""), w === void 0 && (w = "&"), e = w, r = g, n = new RegExp("\\".concat(r, "\\b"), "g");
    var R = l.replace(Hr, ""), P = gr(y || g ? "".concat(y, " ").concat(g, " { ").concat(R, " }") : R);
    a.namespace && (P = je(P, a.namespace));
    var C = [];
    return Pt(P, vr(u.concat(Sr(function(b) {
      return C.push(b);
    })))), C;
  };
  return p.hash = i.length ? i.reduce(function(l, g) {
    return g.name || k(15), U(l, g.name);
  }, Oe).toString() : "", p;
}
var Fe = new tt(), Ht = ze(), re = O.createContext({ shouldForwardProp: void 0, styleSheet: Fe, stylis: Ht }), nn = re.Consumer, Kr = O.createContext(void 0);
function _t() {
  return Se(re);
}
function Ur(t) {
  var e = Je(t.stylisPlugins), r = e[0], n = e[1], s = _t().styleSheet, o = vt(function() {
    var i = s;
    return t.sheet ? i = t.sheet : t.target && (i = i.reconstructWithOptions({ target: t.target }, !1)), t.disableCSSOMInjection && (i = i.reconstructWithOptions({ useCSSOMInjection: !1 })), i;
  }, [t.disableCSSOMInjection, t.sheet, t.target, s]), a = vt(function() {
    return ze({ options: { namespace: t.namespace, prefix: t.enableVendorPrefixes }, plugins: r });
  }, [t.enableVendorPrefixes, t.namespace, r]);
  Qe(function() {
    rr(r, t.stylisPlugins) || n(t.stylisPlugins);
  }, [t.stylisPlugins]);
  var c = vt(function() {
    return { shouldForwardProp: t.shouldForwardProp, styleSheet: o, stylis: a };
  }, [t.shouldForwardProp, o, a]);
  return O.createElement(re.Provider, { value: c }, O.createElement(Kr.Provider, { value: a }, t.children));
}
var Me = function() {
  function t(e, r) {
    var n = this;
    this.inject = function(s, o) {
      o === void 0 && (o = Ht);
      var a = n.name + o.hash;
      s.hasNameForId(n.id, a) || s.insertRules(n.id, a, o(n.rules, a, "@keyframes"));
    }, this.name = e, this.id = "sc-keyframes-".concat(e), this.rules = r, ee(this, function() {
      throw k(12, String(n.name));
    });
  }
  return t.prototype.getName = function(e) {
    return e === void 0 && (e = Ht), this.name + e.hash;
  }, t;
}(), Vr = function(t) {
  return t >= "A" && t <= "Z";
};
function me(t) {
  for (var e = "", r = 0; r < t.length; r++) {
    var n = t[r];
    if (r === 1 && n === "-" && t[0] === "-") return t;
    Vr(n) ? e += "-" + n.toLowerCase() : e += n;
  }
  return e.startsWith("ms-") ? "-" + e : e;
}
var Ge = function(t) {
  return t == null || t === !1 || t === "";
}, Le = function(t) {
  var e, r, n = [];
  for (var s in t) {
    var o = t[s];
    t.hasOwnProperty(s) && !Ge(o) && (Array.isArray(o) && o.isCss || q(o) ? n.push("".concat(me(s), ":"), o, ";") : ft(o) ? n.push.apply(n, V(V(["".concat(s, " {")], Le(o), !1), ["}"], !1)) : n.push("".concat(me(s), ": ").concat((e = s, (r = o) == null || typeof r == "boolean" || r === "" ? "" : typeof r != "number" || r === 0 || e in br || e.startsWith("--") ? String(r).trim() : "".concat(r, "px")), ";")));
  }
  return n;
};
function G(t, e, r, n) {
  if (Ge(t)) return [];
  if (te(t)) return [".".concat(t.styledComponentId)];
  if (q(t)) {
    if (!q(o = t) || o.prototype && o.prototype.isReactComponent || !e) return [t];
    var s = t(e);
    return G(s, e, r, n);
  }
  var o;
  return t instanceof Me ? r ? (t.inject(r, n), [t.getName(n)]) : [t] : ft(t) ? Le(t) : Array.isArray(t) ? Array.prototype.concat.apply($t, t.map(function(a) {
    return G(a, e, r, n);
  })) : [t.toString()];
}
function We(t) {
  for (var e = 0; e < t.length; e += 1) {
    var r = t[e];
    if (q(r) && !te(r)) return !1;
  }
  return !0;
}
var Zr = Re(Q), Jr = function() {
  function t(e, r, n) {
    this.rules = e, this.staticRulesId = "", this.isStatic = (n === void 0 || n.isStatic) && We(e), this.componentId = r, this.baseHash = U(Zr, r), this.baseStyle = n, tt.registerId(r);
  }
  return t.prototype.generateAndInjectStyles = function(e, r, n) {
    var s = this.baseStyle ? this.baseStyle.generateAndInjectStyles(e, r, n) : "";
    if (this.isStatic && !n.hash) if (this.staticRulesId && r.hasNameForId(this.componentId, this.staticRulesId)) s = Y(s, this.staticRulesId);
    else {
      var o = ut(G(this.rules, e, r, n)), a = Yt(U(this.baseHash, o) >>> 0);
      if (!r.hasNameForId(this.componentId, a)) {
        var c = n(o, ".".concat(a), void 0, this.componentId);
        r.insertRules(this.componentId, a, c);
      }
      s = Y(s, a), this.staticRulesId = a;
    }
    else {
      for (var i = U(this.baseHash, n.hash), h = "", u = 0; u < this.rules.length; u++) {
        var p = this.rules[u];
        if (typeof p == "string") h += p;
        else if (p) {
          var l = ut(G(p, e, r, n));
          i = U(i, l + u), h += l;
        }
      }
      if (h) {
        var g = Yt(i >>> 0);
        r.hasNameForId(this.componentId, g) || r.insertRules(this.componentId, g, n(h, ".".concat(g), void 0, this.componentId)), s = Y(s, g);
      }
    }
    return s;
  }, t;
}(), H = O.createContext(void 0), sn = H.Consumer;
function on() {
  var t = Se(H);
  if (!t) throw k(18);
  return t;
}
function an(t) {
  var e = O.useContext(H), r = vt(function() {
    return function(n, s) {
      if (!n) throw k(14);
      if (q(n)) {
        var o = n(s);
        return o;
      }
      if (Array.isArray(n) || typeof n != "object") throw k(8);
      return s ? x(x({}, s), n) : n;
    }(t.theme, e);
  }, [t.theme, e]);
  return t.children ? O.createElement(H.Provider, { value: r }, t.children) : null;
}
var Mt = {};
function Qr(t, e, r) {
  var n = te(t), s = t, o = !Ft(t), a = e.attrs, c = a === void 0 ? $t : a, i = e.componentId, h = i === void 0 ? function(I, _) {
    var v = typeof I != "string" ? "sc" : ue(I);
    Mt[v] = (Mt[v] || 0) + 1;
    var d = "".concat(v, "-").concat(Qt(Q + v + Mt[v]));
    return _ ? "".concat(_, "-").concat(d) : d;
  }(e.displayName, e.parentComponentId) : i, u = e.displayName, p = u === void 0 ? function(I) {
    return Ft(I) ? "styled.".concat(I) : "Styled(".concat(ke(I), ")");
  }(t) : u, l = e.displayName && e.componentId ? "".concat(ue(e.displayName), "-").concat(e.componentId) : e.componentId || h, g = n && s.attrs ? s.attrs.concat(c).filter(Boolean) : c, y = e.shouldForwardProp;
  if (n && s.shouldForwardProp) {
    var w = s.shouldForwardProp;
    if (e.shouldForwardProp) {
      var R = e.shouldForwardProp;
      y = function(I, _) {
        return w(I, _) && R(I, _);
      };
    } else y = w;
  }
  var P = new Jr(r, l, n ? s.componentStyle : void 0);
  function C(I, _) {
    return function(v, d, rt) {
      var pt = v.attrs, Be = v.componentStyle, qe = v.defaultProps, He = v.foldedComponentIds, Ke = v.styledComponentId, Ue = v.target, Ve = O.useContext(H), Ze = _t(), Nt = v.shouldForwardProp || Ze.shouldForwardProp, se = Jt(d, Ve, qe) || X, D = function(lt, st, dt) {
        for (var ot, W = x(x({}, st), { className: void 0, theme: dt }), Dt = 0; Dt < lt.length; Dt += 1) {
          var gt = q(ot = lt[Dt]) ? ot(W) : ot;
          for (var F in gt) W[F] = F === "className" ? Y(W[F], gt[F]) : F === "style" ? x(x({}, W[F]), gt[F]) : gt[F];
        }
        return st.className && (W.className = Y(W.className, st.className)), W;
      }(pt, d, se), ht = D.as || Ue, nt = {};
      for (var z in D) D[z] === void 0 || z[0] === "$" || z === "as" || z === "theme" && D.theme === se || (z === "forwardedAs" ? nt.as = D.forwardedAs : Nt && !Nt(z, ht) || (nt[z] = D[z]));
      var oe = function(lt, st) {
        var dt = _t(), ot = lt.generateAndInjectStyles(st, dt.styleSheet, dt.stylis);
        return ot;
      }(Be, D), Tt = Y(He, Ke);
      return oe && (Tt += " " + oe), D.className && (Tt += " " + D.className), nt[Ft(ht) && !Ae.has(ht) ? "class" : "className"] = Tt, nt.ref = rt, Xe(ht, nt);
    }(b, I, _);
  }
  C.displayName = p;
  var b = O.forwardRef(C);
  return b.attrs = g, b.componentStyle = P, b.displayName = p, b.shouldForwardProp = y, b.foldedComponentIds = n ? Y(s.foldedComponentIds, s.styledComponentId) : "", b.styledComponentId = l, b.target = n ? s.target : t, Object.defineProperty(b, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(I) {
    this._foldedDefaultProps = n ? function(_) {
      for (var v = [], d = 1; d < arguments.length; d++) v[d - 1] = arguments[d];
      for (var rt = 0, pt = v; rt < pt.length; rt++) Bt(_, pt[rt], !0);
      return _;
    }({}, s.defaultProps, I) : I;
  } }), ee(b, function() {
    return ".".concat(b.styledComponentId);
  }), o && Xt(b, t, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), b;
}
function ye(t, e) {
  for (var r = [t[0]], n = 0, s = e.length; n < s; n += 1) r.push(e[n], t[n + 1]);
  return r;
}
var ve = function(t) {
  return Object.assign(t, { isCss: !0 });
};
function ne(t) {
  for (var e = [], r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
  if (q(t) || ft(t)) return ve(G(ye($t, V([t], e, !0))));
  var n = t;
  return e.length === 0 && n.length === 1 && typeof n[0] == "string" ? G(n) : ve(G(ye(n, e)));
}
function Kt(t, e, r) {
  if (r === void 0 && (r = X), !e) throw k(1, e);
  var n = function(s) {
    for (var o = [], a = 1; a < arguments.length; a++) o[a - 1] = arguments[a];
    return t(e, r, ne.apply(void 0, V([s], o, !1)));
  };
  return n.attrs = function(s) {
    return Kt(t, e, x(x({}, r), { attrs: Array.prototype.concat(r.attrs, s).filter(Boolean) }));
  }, n.withConfig = function(s) {
    return Kt(t, e, x(x({}, r), s));
  }, n;
}
var Ye = function(t) {
  return Kt(Qr, t);
}, Xr = Ye;
Ae.forEach(function(t) {
  Xr[t] = Ye(t);
});
var tn = function() {
  function t(e, r) {
    this.rules = e, this.componentId = r, this.isStatic = We(e), tt.registerId(this.componentId + 1);
  }
  return t.prototype.createStyles = function(e, r, n, s) {
    var o = s(ut(G(this.rules, r, n, s)), ""), a = this.componentId + e;
    n.insertRules(a, a, o);
  }, t.prototype.removeStyles = function(e, r) {
    r.clearRules(this.componentId + e);
  }, t.prototype.renderStyles = function(e, r, n, s) {
    e > 2 && tt.registerId(this.componentId + e), this.removeStyles(e, n), this.createStyles(e, r, n, s);
  }, t;
}();
function cn(t) {
  for (var e = [], r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
  var n = ne.apply(void 0, V([t], e, !1)), s = "sc-global-".concat(Qt(JSON.stringify(n))), o = new tn(n, s), a = function(c) {
    var i = _t(), h = O.useContext(H), u = O.useRef(i.styleSheet.allocateGSInstance(s)).current;
    return i.styleSheet.server && function(p, l, g, y, w) {
      if (o.isStatic) o.renderStyles(p, Ir, g, w);
      else {
        var R = x(x({}, l), { theme: Jt(l, y, a.defaultProps) });
        o.renderStyles(p, R, g, w);
      }
    }(u, c, i.styleSheet, h, i.stylis), null;
  };
  return O.memo(a);
}
function un(t) {
  for (var e = [], r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
  var n = ut(ne.apply(void 0, V([t], e, !1))), s = Qt(n);
  return new Me(s, n);
}
function fn(t) {
  var e = O.forwardRef(function(r, n) {
    var s = Jt(r, O.useContext(H), t.defaultProps);
    return O.createElement(t, x({}, r, { theme: s, ref: n }));
  });
  return e.displayName = "WithTheme(".concat(ke(t), ")"), Xt(e, t);
}
var en = /^\s*<\/[a-z]/i, pn = function() {
  function t() {
    var e = this;
    this._emitSheetCSS = function() {
      var r = e.instance.toString();
      if (!r) return "";
      var n = qt(), s = ut([n && 'nonce="'.concat(n, '"'), "".concat(L, '="true"'), "".concat(Et, '="').concat(Q, '"')].filter(Boolean), " ");
      return "<style ".concat(s, ">").concat(r, "</style>");
    }, this.getStyleTags = function() {
      if (e.sealed) throw k(2);
      return e._emitSheetCSS();
    }, this.getStyleElement = function() {
      var r;
      if (e.sealed) throw k(2);
      var n = e.instance.toString();
      if (!n) return [];
      var s = ((r = {})[L] = "", r[Et] = Q, r.dangerouslySetInnerHTML = { __html: n }, r), o = qt();
      return o && (s.nonce = o), [O.createElement("style", x({}, s, { key: "sc-0-0" }))];
    }, this.seal = function() {
      e.sealed = !0;
    }, this.instance = new tt({ isServer: !0 }), this.sealed = !1;
  }
  return t.prototype.collectStyles = function(e) {
    if (this.sealed) throw k(2);
    return O.createElement(Ur, { sheet: this.instance }, e);
  }, t.prototype.interleaveWithNodeStream = function(e) {
    if (ct) throw k(3);
    if (this.sealed) throw k(2);
    this.seal();
    var r = require("stream").Transform, n = e, s = this.instance, o = this._emitSheetCSS, a = new r({ transform: function(c, i, h) {
      var u = c.toString(), p = o();
      if (s.clearTag(), en.test(u)) {
        var l = u.indexOf(">") + 1, g = u.slice(0, l), y = u.slice(l);
        this.push(g + p + y);
      } else this.push(p + u);
      h();
    } });
    return n.on("error", function(c) {
      a.emit("error", c);
    }), n.pipe(a);
  }, t;
}(), hn = { StyleSheet: tt, mainSheet: Fe };
export {
  pn as ServerStyleSheet,
  nn as StyleSheetConsumer,
  re as StyleSheetContext,
  Ur as StyleSheetManager,
  sn as ThemeConsumer,
  H as ThemeContext,
  an as ThemeProvider,
  hn as __PRIVATE__,
  cn as createGlobalStyle,
  ne as css,
  Xr as default,
  te as isStyledComponent,
  un as keyframes,
  Xr as styled,
  on as useTheme,
  Q as version,
  fn as withTheme
};
