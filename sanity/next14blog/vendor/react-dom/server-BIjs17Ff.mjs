import it from "react";
var z = {};
/**
 * @license React
 * react-dom-server-legacy.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Le = it;
function c(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var g = Object.prototype.hasOwnProperty, at = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ve = {}, Se = {};
function Oe(e) {
  return g.call(Se, e) ? !0 : g.call(ve, e) ? !1 : at.test(e) ? Se[e] = !0 : (ve[e] = !0, !1);
}
function y(e, t, n, r, l, o, u) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = u;
}
var d = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  d[e] = new y(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  d[t] = new y(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  d[e] = new y(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  d[e] = new y(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  d[e] = new y(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  d[e] = new y(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  d[e] = new y(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  d[e] = new y(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  d[e] = new y(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ie = /[\-:]([a-z])/g;
function ae(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    ie,
    ae
  );
  d[t] = new y(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(ie, ae);
  d[t] = new y(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(ie, ae);
  d[t] = new y(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  d[e] = new y(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
d.xlinkHref = new y("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  d[e] = new y(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
var A = {
  animationIterationCount: !0,
  aspectRatio: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
}, ct = ["Webkit", "ms", "Moz", "O"];
Object.keys(A).forEach(function(e) {
  ct.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), A[t] = A[e];
  });
});
var pt = /["'&<>]/;
function m(e) {
  if (typeof e == "boolean" || typeof e == "number") return "" + e;
  e = "" + e;
  var t = pt.exec(e);
  if (t) {
    var n = "", r, l = 0;
    for (r = t.index; r < e.length; r++) {
      switch (e.charCodeAt(r)) {
        case 34:
          t = "&quot;";
          break;
        case 38:
          t = "&amp;";
          break;
        case 39:
          t = "&#x27;";
          break;
        case 60:
          t = "&lt;";
          break;
        case 62:
          t = "&gt;";
          break;
        default:
          continue;
      }
      l !== r && (n += e.substring(l, r)), l = r + 1, n += t;
    }
    e = l !== r ? n + e.substring(l, r) : n;
  }
  return e;
}
var ft = /([A-Z])/g, ht = /^ms-/, re = Array.isArray;
function w(e, t) {
  return { insertionMode: e, selectedValue: t };
}
function dt(e, t, n) {
  switch (t) {
    case "select":
      return w(1, n.value != null ? n.value : n.defaultValue);
    case "svg":
      return w(2, null);
    case "math":
      return w(3, null);
    case "foreignObject":
      return w(1, null);
    case "table":
      return w(4, null);
    case "thead":
    case "tbody":
    case "tfoot":
      return w(5, null);
    case "colgroup":
      return w(7, null);
    case "tr":
      return w(6, null);
  }
  return 4 <= e.insertionMode || e.insertionMode === 0 ? w(1, null) : e;
}
var xe = /* @__PURE__ */ new Map();
function je(e, t, n) {
  if (typeof n != "object") throw Error(c(62));
  t = !0;
  for (var r in n) if (g.call(n, r)) {
    var l = n[r];
    if (l != null && typeof l != "boolean" && l !== "") {
      if (r.indexOf("--") === 0) {
        var o = m(r);
        l = m(("" + l).trim());
      } else {
        o = r;
        var u = xe.get(o);
        u !== void 0 || (u = m(o.replace(ft, "-$1").toLowerCase().replace(ht, "-ms-")), xe.set(o, u)), o = u, l = typeof l == "number" ? l === 0 || g.call(A, r) ? "" + l : l + "px" : m(("" + l).trim());
      }
      t ? (t = !1, e.push(' style="', o, ":", l)) : e.push(";", o, ":", l);
    }
  }
  t || e.push('"');
}
function v(e, t, n, r) {
  switch (n) {
    case "style":
      je(e, t, r);
      return;
    case "defaultValue":
    case "defaultChecked":
    case "innerHTML":
    case "suppressContentEditableWarning":
    case "suppressHydrationWarning":
      return;
  }
  if (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") {
    if (t = d.hasOwnProperty(n) ? d[n] : null, t !== null) {
      switch (typeof r) {
        case "function":
        case "symbol":
          return;
        case "boolean":
          if (!t.acceptsBooleans) return;
      }
      switch (n = t.attributeName, t.type) {
        case 3:
          r && e.push(" ", n, '=""');
          break;
        case 4:
          r === !0 ? e.push(" ", n, '=""') : r !== !1 && e.push(" ", n, '="', m(r), '"');
          break;
        case 5:
          isNaN(r) || e.push(" ", n, '="', m(r), '"');
          break;
        case 6:
          !isNaN(r) && 1 <= r && e.push(" ", n, '="', m(r), '"');
          break;
        default:
          t.sanitizeURL && (r = "" + r), e.push(" ", n, '="', m(r), '"');
      }
    } else if (Oe(n)) {
      switch (typeof r) {
        case "function":
        case "symbol":
          return;
        case "boolean":
          if (t = n.toLowerCase().slice(0, 5), t !== "data-" && t !== "aria-") return;
      }
      e.push(" ", n, '="', m(r), '"');
    }
  }
}
function H(e, t, n) {
  if (t != null) {
    if (n != null) throw Error(c(60));
    if (typeof t != "object" || !("__html" in t)) throw Error(c(61));
    t = t.__html, t != null && e.push("" + t);
  }
}
function mt(e) {
  var t = "";
  return Le.Children.forEach(e, function(n) {
    n != null && (t += n);
  }), t;
}
function ee(e, t, n, r) {
  e.push(k(n));
  var l = n = null, o;
  for (o in t) if (g.call(t, o)) {
    var u = t[o];
    if (u != null) switch (o) {
      case "children":
        n = u;
        break;
      case "dangerouslySetInnerHTML":
        l = u;
        break;
      default:
        v(e, r, o, u);
    }
  }
  return e.push(">"), H(e, l, n), typeof n == "string" ? (e.push(m(n)), null) : n;
}
var yt = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, ke = /* @__PURE__ */ new Map();
function k(e) {
  var t = ke.get(e);
  if (t === void 0) {
    if (!yt.test(e)) throw Error(c(65, e));
    t = "<" + e, ke.set(e, t);
  }
  return t;
}
function gt(e, t, n, r, l) {
  switch (t) {
    case "select":
      e.push(k("select"));
      var o = null, u = null;
      for (p in n) if (g.call(n, p)) {
        var s = n[p];
        if (s != null) switch (p) {
          case "children":
            o = s;
            break;
          case "dangerouslySetInnerHTML":
            u = s;
            break;
          case "defaultValue":
          case "value":
            break;
          default:
            v(e, r, p, s);
        }
      }
      return e.push(">"), H(e, u, o), o;
    case "option":
      u = l.selectedValue, e.push(k("option"));
      var i = s = null, a = null, p = null;
      for (o in n) if (g.call(n, o)) {
        var h = n[o];
        if (h != null) switch (o) {
          case "children":
            s = h;
            break;
          case "selected":
            a = h;
            break;
          case "dangerouslySetInnerHTML":
            p = h;
            break;
          case "value":
            i = h;
          default:
            v(e, r, o, h);
        }
      }
      if (u != null) if (n = i !== null ? "" + i : mt(s), re(u)) {
        for (r = 0; r < u.length; r++)
          if ("" + u[r] === n) {
            e.push(' selected=""');
            break;
          }
      } else "" + u === n && e.push(' selected=""');
      else a && e.push(' selected=""');
      return e.push(">"), H(e, p, s), s;
    case "textarea":
      e.push(k("textarea")), p = u = o = null;
      for (s in n) if (g.call(n, s) && (i = n[s], i != null)) switch (s) {
        case "children":
          p = i;
          break;
        case "value":
          o = i;
          break;
        case "defaultValue":
          u = i;
          break;
        case "dangerouslySetInnerHTML":
          throw Error(c(91));
        default:
          v(
            e,
            r,
            s,
            i
          );
      }
      if (o === null && u !== null && (o = u), e.push(">"), p != null) {
        if (o != null) throw Error(c(92));
        if (re(p) && 1 < p.length) throw Error(c(93));
        o = "" + p;
      }
      return typeof o == "string" && o[0] === `
` && e.push(`
`), o !== null && e.push(m("" + o)), null;
    case "input":
      e.push(k("input")), i = p = s = o = null;
      for (u in n) if (g.call(n, u) && (a = n[u], a != null)) switch (u) {
        case "children":
        case "dangerouslySetInnerHTML":
          throw Error(c(399, "input"));
        case "defaultChecked":
          i = a;
          break;
        case "defaultValue":
          s = a;
          break;
        case "checked":
          p = a;
          break;
        case "value":
          o = a;
          break;
        default:
          v(e, r, u, a);
      }
      return p !== null ? v(e, r, "checked", p) : i !== null && v(e, r, "checked", i), o !== null ? v(e, r, "value", o) : s !== null && v(e, r, "value", s), e.push("/>"), null;
    case "menuitem":
      e.push(k("menuitem"));
      for (var E in n) if (g.call(n, E) && (o = n[E], o != null)) switch (E) {
        case "children":
        case "dangerouslySetInnerHTML":
          throw Error(c(400));
        default:
          v(e, r, E, o);
      }
      return e.push(">"), null;
    case "title":
      e.push(k("title")), o = null;
      for (h in n) if (g.call(n, h) && (u = n[h], u != null)) switch (h) {
        case "children":
          o = u;
          break;
        case "dangerouslySetInnerHTML":
          throw Error(c(434));
        default:
          v(e, r, h, u);
      }
      return e.push(">"), o;
    case "listing":
    case "pre":
      e.push(k(t)), u = o = null;
      for (i in n) if (g.call(n, i) && (s = n[i], s != null)) switch (i) {
        case "children":
          o = s;
          break;
        case "dangerouslySetInnerHTML":
          u = s;
          break;
        default:
          v(e, r, i, s);
      }
      if (e.push(">"), u != null) {
        if (o != null) throw Error(c(60));
        if (typeof u != "object" || !("__html" in u)) throw Error(c(61));
        n = u.__html, n != null && (typeof n == "string" && 0 < n.length && n[0] === `
` ? e.push(`
`, n) : e.push("" + n));
      }
      return typeof o == "string" && o[0] === `
` && e.push(`
`), o;
    case "area":
    case "base":
    case "br":
    case "col":
    case "embed":
    case "hr":
    case "img":
    case "keygen":
    case "link":
    case "meta":
    case "param":
    case "source":
    case "track":
    case "wbr":
      e.push(k(t));
      for (var T in n) if (g.call(n, T) && (o = n[T], o != null)) switch (T) {
        case "children":
        case "dangerouslySetInnerHTML":
          throw Error(c(399, t));
        default:
          v(e, r, T, o);
      }
      return e.push("/>"), null;
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return ee(
        e,
        n,
        t,
        r
      );
    case "html":
      return l.insertionMode === 0 && e.push("<!DOCTYPE html>"), ee(e, n, t, r);
    default:
      if (t.indexOf("-") === -1 && typeof n.is != "string") return ee(e, n, t, r);
      e.push(k(t)), u = o = null;
      for (a in n) if (g.call(n, a) && (s = n[a], s != null)) switch (a) {
        case "children":
          o = s;
          break;
        case "dangerouslySetInnerHTML":
          u = s;
          break;
        case "style":
          je(e, r, s);
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
          break;
        default:
          Oe(a) && typeof s != "function" && typeof s != "symbol" && e.push(" ", a, '="', m(s), '"');
      }
      return e.push(">"), H(e, u, o), o;
  }
}
function we(e, t, n) {
  if (e.push('<!--$?--><template id="'), n === null) throw Error(c(395));
  return e.push(n), e.push('"></template>');
}
function vt(e, t, n, r) {
  switch (n.insertionMode) {
    case 0:
    case 1:
      return e.push('<div hidden id="'), e.push(t.segmentPrefix), t = r.toString(16), e.push(t), e.push('">');
    case 2:
      return e.push('<svg aria-hidden="true" style="display:none" id="'), e.push(t.segmentPrefix), t = r.toString(16), e.push(t), e.push('">');
    case 3:
      return e.push('<math aria-hidden="true" style="display:none" id="'), e.push(t.segmentPrefix), t = r.toString(16), e.push(t), e.push('">');
    case 4:
      return e.push('<table hidden id="'), e.push(t.segmentPrefix), t = r.toString(16), e.push(t), e.push('">');
    case 5:
      return e.push('<table hidden><tbody id="'), e.push(t.segmentPrefix), t = r.toString(16), e.push(t), e.push('">');
    case 6:
      return e.push('<table hidden><tr id="'), e.push(t.segmentPrefix), t = r.toString(16), e.push(t), e.push('">');
    case 7:
      return e.push('<table hidden><colgroup id="'), e.push(t.segmentPrefix), t = r.toString(16), e.push(t), e.push('">');
    default:
      throw Error(c(397));
  }
}
function St(e, t) {
  switch (t.insertionMode) {
    case 0:
    case 1:
      return e.push("</div>");
    case 2:
      return e.push("</svg>");
    case 3:
      return e.push("</math>");
    case 4:
      return e.push("</table>");
    case 5:
      return e.push("</tbody></table>");
    case 6:
      return e.push("</tr></table>");
    case 7:
      return e.push("</colgroup></table>");
    default:
      throw Error(c(397));
  }
}
var xt = /[<\u2028\u2029]/g;
function te(e) {
  return JSON.stringify(e).replace(xt, function(t) {
    switch (t) {
      case "<":
        return "\\u003c";
      case "\u2028":
        return "\\u2028";
      case "\u2029":
        return "\\u2029";
      default:
        throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
    }
  });
}
function kt(e, t) {
  return t = t === void 0 ? "" : t, { bootstrapChunks: [], startInlineScript: "<script>", placeholderPrefix: t + "P:", segmentPrefix: t + "S:", boundaryPrefix: t + "B:", idPrefix: t, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1, generateStaticMarkup: e };
}
function Ce(e, t, n, r) {
  return n.generateStaticMarkup ? (e.push(m(t)), !1) : (t === "" ? e = r : (r && e.push("<!-- -->"), e.push(m(t)), e = !0), e);
}
var M = Object.assign, wt = Symbol.for("react.element"), Ae = Symbol.for("react.portal"), He = Symbol.for("react.fragment"), be = Symbol.for("react.strict_mode"), We = Symbol.for("react.profiler"), Ue = Symbol.for("react.provider"), qe = Symbol.for("react.context"), Ze = Symbol.for("react.forward_ref"), Ge = Symbol.for("react.suspense"), Xe = Symbol.for("react.suspense_list"), Je = Symbol.for("react.memo"), ce = Symbol.for("react.lazy"), Ct = Symbol.for("react.scope"), Et = Symbol.for("react.debug_trace_mode"), Tt = Symbol.for("react.legacy_hidden"), Ft = Symbol.for("react.default_value"), Ee = Symbol.iterator;
function oe(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case He:
      return "Fragment";
    case Ae:
      return "Portal";
    case We:
      return "Profiler";
    case be:
      return "StrictMode";
    case Ge:
      return "Suspense";
    case Xe:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case qe:
      return (e.displayName || "Context") + ".Consumer";
    case Ue:
      return (e._context.displayName || "Context") + ".Provider";
    case Ze:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Je:
      return t = e.displayName || null, t !== null ? t : oe(e.type) || "Memo";
    case ce:
      t = e._payload, e = e._init;
      try {
        return oe(e(t));
      } catch {
      }
  }
  return null;
}
var Ye = {};
function Te(e, t) {
  if (e = e.contextTypes, !e) return Ye;
  var n = {}, r;
  for (r in e) n[r] = t[r];
  return n;
}
var _ = null;
function Y(e, t) {
  if (e !== t) {
    e.context._currentValue2 = e.parentValue, e = e.parent;
    var n = t.parent;
    if (e === null) {
      if (n !== null) throw Error(c(401));
    } else {
      if (n === null) throw Error(c(401));
      Y(e, n);
    }
    t.context._currentValue2 = t.value;
  }
}
function Ke(e) {
  e.context._currentValue2 = e.parentValue, e = e.parent, e !== null && Ke(e);
}
function Qe(e) {
  var t = e.parent;
  t !== null && Qe(t), e.context._currentValue2 = e.value;
}
function et(e, t) {
  if (e.context._currentValue2 = e.parentValue, e = e.parent, e === null) throw Error(c(402));
  e.depth === t.depth ? Y(e, t) : et(e, t);
}
function tt(e, t) {
  var n = t.parent;
  if (n === null) throw Error(c(402));
  e.depth === n.depth ? Y(e, n) : tt(e, n), t.context._currentValue2 = t.value;
}
function q(e) {
  var t = _;
  t !== e && (t === null ? Qe(e) : e === null ? Ke(t) : t.depth === e.depth ? Y(t, e) : t.depth > e.depth ? et(t, e) : tt(t, e), _ = e);
}
var Fe = { isMounted: function() {
  return !1;
}, enqueueSetState: function(e, t) {
  e = e._reactInternals, e.queue !== null && e.queue.push(t);
}, enqueueReplaceState: function(e, t) {
  e = e._reactInternals, e.replace = !0, e.queue = [t];
}, enqueueForceUpdate: function() {
} };
function Re(e, t, n, r) {
  var l = e.state !== void 0 ? e.state : null;
  e.updater = Fe, e.props = n, e.state = l;
  var o = { queue: [], replace: !1 };
  e._reactInternals = o;
  var u = t.contextType;
  if (e.context = typeof u == "object" && u !== null ? u._currentValue2 : r, u = t.getDerivedStateFromProps, typeof u == "function" && (u = u(n, l), l = u == null ? l : M({}, l, u), e.state = l), typeof t.getDerivedStateFromProps != "function" && typeof e.getSnapshotBeforeUpdate != "function" && (typeof e.UNSAFE_componentWillMount == "function" || typeof e.componentWillMount == "function")) if (t = e.state, typeof e.componentWillMount == "function" && e.componentWillMount(), typeof e.UNSAFE_componentWillMount == "function" && e.UNSAFE_componentWillMount(), t !== e.state && Fe.enqueueReplaceState(e, e.state, null), o.queue !== null && 0 < o.queue.length) if (t = o.queue, u = o.replace, o.queue = null, o.replace = !1, u && t.length === 1) e.state = t[0];
  else {
    for (o = u ? t[0] : e.state, l = !0, u = u ? 1 : 0; u < t.length; u++) {
      var s = t[u];
      s = typeof s == "function" ? s.call(e, o, n, r) : s, s != null && (l ? (l = !1, o = M({}, o, s)) : M(o, s));
    }
    e.state = o;
  }
  else o.queue = null;
}
var Rt = { id: 1, overflow: "" };
function le(e, t, n) {
  var r = e.id;
  e = e.overflow;
  var l = 32 - b(r) - 1;
  r &= ~(1 << l), n += 1;
  var o = 32 - b(t) + l;
  if (30 < o) {
    var u = l - l % 5;
    return o = (r & (1 << u) - 1).toString(32), r >>= u, l -= u, { id: 1 << 32 - b(t) + l | n << l | r, overflow: o + e };
  }
  return { id: 1 << o | n << l | r, overflow: e };
}
var b = Math.clz32 ? Math.clz32 : It, _t = Math.log, Pt = Math.LN2;
function It(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (_t(e) / Pt | 0) | 0;
}
function Mt(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Bt = typeof Object.is == "function" ? Object.is : Mt, C = null, pe = null, W = null, f = null, P = !1, Z = !1, B = 0, F = null, K = 0;
function R() {
  if (C === null) throw Error(c(321));
  return C;
}
function _e() {
  if (0 < K) throw Error(c(312));
  return { memoizedState: null, queue: null, next: null };
}
function fe() {
  return f === null ? W === null ? (P = !1, W = f = _e()) : (P = !0, f = W) : f.next === null ? (P = !1, f = f.next = _e()) : (P = !0, f = f.next), f;
}
function he() {
  pe = C = null, Z = !1, W = null, K = 0, f = F = null;
}
function nt(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Pe(e, t, n) {
  if (C = R(), f = fe(), P) {
    var r = f.queue;
    if (t = r.dispatch, F !== null && (n = F.get(r), n !== void 0)) {
      F.delete(r), r = f.memoizedState;
      do
        r = e(r, n.action), n = n.next;
      while (n !== null);
      return f.memoizedState = r, [r, t];
    }
    return [f.memoizedState, t];
  }
  return e = e === nt ? typeof t == "function" ? t() : t : n !== void 0 ? n(t) : t, f.memoizedState = e, e = f.queue = { last: null, dispatch: null }, e = e.dispatch = Dt.bind(null, C, e), [f.memoizedState, e];
}
function Ie(e, t) {
  if (C = R(), f = fe(), t = t === void 0 ? null : t, f !== null) {
    var n = f.memoizedState;
    if (n !== null && t !== null) {
      var r = n[1];
      e: if (r === null) r = !1;
      else {
        for (var l = 0; l < r.length && l < t.length; l++) if (!Bt(t[l], r[l])) {
          r = !1;
          break e;
        }
        r = !0;
      }
      if (r) return n[0];
    }
  }
  return e = e(), f.memoizedState = [e, t], e;
}
function Dt(e, t, n) {
  if (25 <= K) throw Error(c(301));
  if (e === C) if (Z = !0, e = { action: n, next: null }, F === null && (F = /* @__PURE__ */ new Map()), n = F.get(t), n === void 0) F.set(t, e);
  else {
    for (t = n; t.next !== null; ) t = t.next;
    t.next = e;
  }
}
function zt() {
  throw Error(c(394));
}
function O() {
}
var Me = { readContext: function(e) {
  return e._currentValue2;
}, useContext: function(e) {
  return R(), e._currentValue2;
}, useMemo: Ie, useReducer: Pe, useRef: function(e) {
  C = R(), f = fe();
  var t = f.memoizedState;
  return t === null ? (e = { current: e }, f.memoizedState = e) : t;
}, useState: function(e) {
  return Pe(nt, e);
}, useInsertionEffect: O, useLayoutEffect: function() {
}, useCallback: function(e, t) {
  return Ie(function() {
    return e;
  }, t);
}, useImperativeHandle: O, useEffect: O, useDebugValue: O, useDeferredValue: function(e) {
  return R(), e;
}, useTransition: function() {
  return R(), [
    !1,
    zt
  ];
}, useId: function() {
  var e = pe.treeContext, t = e.overflow;
  e = e.id, e = (e & ~(1 << 32 - b(e) - 1)).toString(32) + t;
  var n = U;
  if (n === null) throw Error(c(404));
  return t = B++, e = ":" + n.idPrefix + "R" + e, 0 < t && (e += "H" + t.toString(32)), e + ":";
}, useMutableSource: function(e, t) {
  return R(), t(e._source);
}, useSyncExternalStore: function(e, t, n) {
  if (n === void 0) throw Error(c(407));
  return n();
} }, U = null, ne = Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
function Nt(e) {
  return console.error(e), null;
}
function I() {
}
function Vt(e, t, n, r, l, o, u, s, i) {
  var a = [], p = /* @__PURE__ */ new Set();
  return t = { destination: null, responseState: t, progressiveChunkSize: r === void 0 ? 12800 : r, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: p, pingedTasks: a, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: l === void 0 ? Nt : l, onAllReady: I, onShellReady: u === void 0 ? I : u, onShellError: I, onFatalError: I }, n = G(t, 0, null, n, !1, !1), n.parentFlushed = !0, e = de(t, e, null, n, p, Ye, null, Rt), a.push(e), t;
}
function de(e, t, n, r, l, o, u, s) {
  e.allPendingTasks++, n === null ? e.pendingRootTasks++ : n.pendingTasks++;
  var i = { node: t, ping: function() {
    var a = e.pingedTasks;
    a.push(i), a.length === 1 && lt(e);
  }, blockedBoundary: n, blockedSegment: r, abortSet: l, legacyContext: o, context: u, treeContext: s };
  return l.add(i), i;
}
function G(e, t, n, r, l, o) {
  return { status: 0, id: -1, index: t, parentFlushed: !1, chunks: [], children: [], formatContext: r, boundary: n, lastPushedText: l, textEmbedded: o };
}
function D(e, t) {
  if (e = e.onError(t), e != null && typeof e != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof e + '" instead');
  return e;
}
function X(e, t) {
  var n = e.onShellError;
  n(t), n = e.onFatalError, n(t), e.destination !== null ? (e.status = 2, e.destination.destroy(t)) : (e.status = 1, e.fatalError = t);
}
function Be(e, t, n, r, l) {
  for (C = {}, pe = t, B = 0, e = n(r, l); Z; ) Z = !1, B = 0, K += 1, f = null, e = n(r, l);
  return he(), e;
}
function De(e, t, n, r) {
  var l = n.render(), o = r.childContextTypes;
  if (o != null) {
    var u = t.legacyContext;
    if (typeof n.getChildContext != "function") r = u;
    else {
      n = n.getChildContext();
      for (var s in n) if (!(s in o)) throw Error(c(108, oe(r) || "Unknown", s));
      r = M({}, u, n);
    }
    t.legacyContext = r, S(e, t, l), t.legacyContext = u;
  } else S(e, t, l);
}
function ze(e, t) {
  if (e && e.defaultProps) {
    t = M({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function ue(e, t, n, r, l) {
  if (typeof n == "function") if (n.prototype && n.prototype.isReactComponent) {
    l = Te(n, t.legacyContext);
    var o = n.contextType;
    o = new n(r, typeof o == "object" && o !== null ? o._currentValue2 : l), Re(o, n, r, l), De(e, t, o, n);
  } else {
    o = Te(n, t.legacyContext), l = Be(e, t, n, r, o);
    var u = B !== 0;
    if (typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0) Re(l, n, r, o), De(e, t, l, n);
    else if (u) {
      r = t.treeContext, t.treeContext = le(r, 1, 0);
      try {
        S(e, t, l);
      } finally {
        t.treeContext = r;
      }
    } else S(e, t, l);
  }
  else if (typeof n == "string") {
    switch (l = t.blockedSegment, o = gt(l.chunks, n, r, e.responseState, l.formatContext), l.lastPushedText = !1, u = l.formatContext, l.formatContext = dt(u, n, r), se(e, t, o), l.formatContext = u, n) {
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "img":
      case "input":
      case "keygen":
      case "link":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
        break;
      default:
        l.chunks.push("</", n, ">");
    }
    l.lastPushedText = !1;
  } else {
    switch (n) {
      case Tt:
      case Et:
      case be:
      case We:
      case He:
        S(e, t, r.children);
        return;
      case Xe:
        S(e, t, r.children);
        return;
      case Ct:
        throw Error(c(343));
      case Ge:
        e: {
          n = t.blockedBoundary, l = t.blockedSegment, o = r.fallback, r = r.children, u = /* @__PURE__ */ new Set();
          var s = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: u, errorDigest: null }, i = G(e, l.chunks.length, s, l.formatContext, !1, !1);
          l.children.push(i), l.lastPushedText = !1;
          var a = G(e, 0, null, l.formatContext, !1, !1);
          a.parentFlushed = !0, t.blockedBoundary = s, t.blockedSegment = a;
          try {
            if (se(
              e,
              t,
              r
            ), e.responseState.generateStaticMarkup || a.lastPushedText && a.textEmbedded && a.chunks.push("<!-- -->"), a.status = 1, J(s, a), s.pendingTasks === 0) break e;
          } catch (p) {
            a.status = 4, s.forceClientRender = !0, s.errorDigest = D(e, p);
          } finally {
            t.blockedBoundary = n, t.blockedSegment = l;
          }
          t = de(e, o, n, i, u, t.legacyContext, t.context, t.treeContext), e.pingedTasks.push(t);
        }
        return;
    }
    if (typeof n == "object" && n !== null) switch (n.$$typeof) {
      case Ze:
        if (r = Be(e, t, n.render, r, l), B !== 0) {
          n = t.treeContext, t.treeContext = le(n, 1, 0);
          try {
            S(e, t, r);
          } finally {
            t.treeContext = n;
          }
        } else S(e, t, r);
        return;
      case Je:
        n = n.type, r = ze(n, r), ue(e, t, n, r, l);
        return;
      case Ue:
        if (l = r.children, n = n._context, r = r.value, o = n._currentValue2, n._currentValue2 = r, u = _, _ = r = { parent: u, depth: u === null ? 0 : u.depth + 1, context: n, parentValue: o, value: r }, t.context = r, S(e, t, l), e = _, e === null) throw Error(c(403));
        r = e.parentValue, e.context._currentValue2 = r === Ft ? e.context._defaultValue : r, e = _ = e.parent, t.context = e;
        return;
      case qe:
        r = r.children, r = r(n._currentValue2), S(e, t, r);
        return;
      case ce:
        l = n._init, n = l(n._payload), r = ze(n, r), ue(
          e,
          t,
          n,
          r,
          void 0
        );
        return;
    }
    throw Error(c(130, n == null ? n : typeof n, ""));
  }
}
function S(e, t, n) {
  if (t.node = n, typeof n == "object" && n !== null) {
    switch (n.$$typeof) {
      case wt:
        ue(e, t, n.type, n.props, n.ref);
        return;
      case Ae:
        throw Error(c(257));
      case ce:
        var r = n._init;
        n = r(n._payload), S(e, t, n);
        return;
    }
    if (re(n)) {
      Ne(e, t, n);
      return;
    }
    if (n === null || typeof n != "object" ? r = null : (r = Ee && n[Ee] || n["@@iterator"], r = typeof r == "function" ? r : null), r && (r = r.call(n))) {
      if (n = r.next(), !n.done) {
        var l = [];
        do
          l.push(n.value), n = r.next();
        while (!n.done);
        Ne(e, t, l);
      }
      return;
    }
    throw e = Object.prototype.toString.call(n), Error(c(31, e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e));
  }
  typeof n == "string" ? (r = t.blockedSegment, r.lastPushedText = Ce(t.blockedSegment.chunks, n, e.responseState, r.lastPushedText)) : typeof n == "number" && (r = t.blockedSegment, r.lastPushedText = Ce(t.blockedSegment.chunks, "" + n, e.responseState, r.lastPushedText));
}
function Ne(e, t, n) {
  for (var r = n.length, l = 0; l < r; l++) {
    var o = t.treeContext;
    t.treeContext = le(o, r, l);
    try {
      se(e, t, n[l]);
    } finally {
      t.treeContext = o;
    }
  }
}
function se(e, t, n) {
  var r = t.blockedSegment.formatContext, l = t.legacyContext, o = t.context;
  try {
    return S(e, t, n);
  } catch (i) {
    if (he(), typeof i == "object" && i !== null && typeof i.then == "function") {
      n = i;
      var u = t.blockedSegment, s = G(e, u.chunks.length, null, u.formatContext, u.lastPushedText, !0);
      u.children.push(s), u.lastPushedText = !1, e = de(e, t.node, t.blockedBoundary, s, t.abortSet, t.legacyContext, t.context, t.treeContext).ping, n.then(e, e), t.blockedSegment.formatContext = r, t.legacyContext = l, t.context = o, q(o);
    } else throw t.blockedSegment.formatContext = r, t.legacyContext = l, t.context = o, q(o), i;
  }
}
function $t(e) {
  var t = e.blockedBoundary;
  e = e.blockedSegment, e.status = 3, ot(this, t, e);
}
function rt(e, t, n) {
  var r = e.blockedBoundary;
  e.blockedSegment.status = 3, r === null ? (t.allPendingTasks--, t.status !== 2 && (t.status = 2, t.destination !== null && t.destination.push(null))) : (r.pendingTasks--, r.forceClientRender || (r.forceClientRender = !0, e = n === void 0 ? Error(c(432)) : n, r.errorDigest = t.onError(e), r.parentFlushed && t.clientRenderedBoundaries.push(r)), r.fallbackAbortableTasks.forEach(function(l) {
    return rt(l, t, n);
  }), r.fallbackAbortableTasks.clear(), t.allPendingTasks--, t.allPendingTasks === 0 && (r = t.onAllReady, r()));
}
function J(e, t) {
  if (t.chunks.length === 0 && t.children.length === 1 && t.children[0].boundary === null) {
    var n = t.children[0];
    n.id = t.id, n.parentFlushed = !0, n.status === 1 && J(e, n);
  } else e.completedSegments.push(t);
}
function ot(e, t, n) {
  if (t === null) {
    if (n.parentFlushed) {
      if (e.completedRootSegment !== null) throw Error(c(389));
      e.completedRootSegment = n;
    }
    e.pendingRootTasks--, e.pendingRootTasks === 0 && (e.onShellError = I, t = e.onShellReady, t());
  } else t.pendingTasks--, t.forceClientRender || (t.pendingTasks === 0 ? (n.parentFlushed && n.status === 1 && J(t, n), t.parentFlushed && e.completedBoundaries.push(t), t.fallbackAbortableTasks.forEach($t, e), t.fallbackAbortableTasks.clear()) : n.parentFlushed && n.status === 1 && (J(t, n), t.completedSegments.length === 1 && t.parentFlushed && e.partialBoundaries.push(t)));
  e.allPendingTasks--, e.allPendingTasks === 0 && (e = e.onAllReady, e());
}
function lt(e) {
  if (e.status !== 2) {
    var t = _, n = ne.current;
    ne.current = Me;
    var r = U;
    U = e.responseState;
    try {
      var l = e.pingedTasks, o;
      for (o = 0; o < l.length; o++) {
        var u = l[o], s = e, i = u.blockedSegment;
        if (i.status === 0) {
          q(u.context);
          try {
            S(s, u, u.node), s.responseState.generateStaticMarkup || i.lastPushedText && i.textEmbedded && i.chunks.push("<!-- -->"), u.abortSet.delete(u), i.status = 1, ot(s, u.blockedBoundary, i);
          } catch (x) {
            if (he(), typeof x == "object" && x !== null && typeof x.then == "function") {
              var a = u.ping;
              x.then(a, a);
            } else {
              u.abortSet.delete(u), i.status = 4;
              var p = u.blockedBoundary, h = x, E = D(s, h);
              if (p === null ? X(s, h) : (p.pendingTasks--, p.forceClientRender || (p.forceClientRender = !0, p.errorDigest = E, p.parentFlushed && s.clientRenderedBoundaries.push(p))), s.allPendingTasks--, s.allPendingTasks === 0) {
                var T = s.onAllReady;
                T();
              }
            }
          } finally {
          }
        }
      }
      l.splice(0, o), e.destination !== null && me(e, e.destination);
    } catch (x) {
      D(e, x), X(e, x);
    } finally {
      U = r, ne.current = n, n === Me && q(t);
    }
  }
}
function j(e, t, n) {
  switch (n.parentFlushed = !0, n.status) {
    case 0:
      var r = n.id = e.nextSegmentId++;
      return n.lastPushedText = !1, n.textEmbedded = !1, e = e.responseState, t.push('<template id="'), t.push(e.placeholderPrefix), e = r.toString(16), t.push(e), t.push('"></template>');
    case 1:
      n.status = 2;
      var l = !0;
      r = n.chunks;
      var o = 0;
      n = n.children;
      for (var u = 0; u < n.length; u++) {
        for (l = n[u]; o < l.index; o++) t.push(r[o]);
        l = Q(e, t, l);
      }
      for (; o < r.length - 1; o++) t.push(r[o]);
      return o < r.length && (l = t.push(r[o])), l;
    default:
      throw Error(c(390));
  }
}
function Q(e, t, n) {
  var r = n.boundary;
  if (r === null) return j(e, t, n);
  if (r.parentFlushed = !0, r.forceClientRender) return e.responseState.generateStaticMarkup || (r = r.errorDigest, t.push("<!--$!-->"), t.push("<template"), r && (t.push(' data-dgst="'), r = m(r), t.push(r), t.push('"')), t.push("></template>")), j(e, t, n), e = e.responseState.generateStaticMarkup ? !0 : t.push("<!--/$-->"), e;
  if (0 < r.pendingTasks) {
    r.rootSegmentID = e.nextSegmentId++, 0 < r.completedSegments.length && e.partialBoundaries.push(r);
    var l = e.responseState, o = l.nextSuspenseID++;
    return l = l.boundaryPrefix + o.toString(16), r = r.id = l, we(t, e.responseState, r), j(e, t, n), t.push("<!--/$-->");
  }
  if (r.byteSize > e.progressiveChunkSize) return r.rootSegmentID = e.nextSegmentId++, e.completedBoundaries.push(r), we(t, e.responseState, r.id), j(e, t, n), t.push("<!--/$-->");
  if (e.responseState.generateStaticMarkup || t.push("<!--$-->"), n = r.completedSegments, n.length !== 1) throw Error(c(391));
  return Q(e, t, n[0]), e = e.responseState.generateStaticMarkup ? !0 : t.push("<!--/$-->"), e;
}
function Ve(e, t, n) {
  return vt(t, e.responseState, n.formatContext, n.id), Q(e, t, n), St(t, n.formatContext);
}
function $e(e, t, n) {
  for (var r = n.completedSegments, l = 0; l < r.length; l++) ut(e, t, n, r[l]);
  if (r.length = 0, e = e.responseState, r = n.id, n = n.rootSegmentID, t.push(e.startInlineScript), e.sentCompleteBoundaryFunction ? t.push('$RC("') : (e.sentCompleteBoundaryFunction = !0, t.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')), r === null) throw Error(c(395));
  return n = n.toString(16), t.push(r), t.push('","'), t.push(e.segmentPrefix), t.push(n), t.push('")<\/script>');
}
function ut(e, t, n, r) {
  if (r.status === 2) return !0;
  var l = r.id;
  if (l === -1) {
    if ((r.id = n.rootSegmentID) === -1) throw Error(c(392));
    return Ve(e, t, r);
  }
  return Ve(e, t, r), e = e.responseState, t.push(e.startInlineScript), e.sentCompleteSegmentFunction ? t.push('$RS("') : (e.sentCompleteSegmentFunction = !0, t.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')), t.push(e.segmentPrefix), l = l.toString(16), t.push(l), t.push('","'), t.push(e.placeholderPrefix), t.push(l), t.push('")<\/script>');
}
function me(e, t) {
  try {
    var n = e.completedRootSegment;
    if (n !== null && e.pendingRootTasks === 0) {
      Q(e, t, n), e.completedRootSegment = null;
      var r = e.responseState.bootstrapChunks;
      for (n = 0; n < r.length - 1; n++) t.push(r[n]);
      n < r.length && t.push(r[n]);
    }
    var l = e.clientRenderedBoundaries, o;
    for (o = 0; o < l.length; o++) {
      var u = l[o];
      r = t;
      var s = e.responseState, i = u.id, a = u.errorDigest, p = u.errorMessage, h = u.errorComponentStack;
      if (r.push(s.startInlineScript), s.sentClientRenderFunction ? r.push('$RX("') : (s.sentClientRenderFunction = !0, r.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')), i === null) throw Error(c(395));
      if (r.push(i), r.push('"'), a || p || h) {
        r.push(",");
        var E = te(a || "");
        r.push(E);
      }
      if (p || h) {
        r.push(",");
        var T = te(p || "");
        r.push(T);
      }
      if (h) {
        r.push(",");
        var x = te(h);
        r.push(x);
      }
      if (!r.push(")<\/script>")) {
        e.destination = null, o++, l.splice(0, o);
        return;
      }
    }
    l.splice(0, o);
    var N = e.completedBoundaries;
    for (o = 0; o < N.length; o++) if (!$e(e, t, N[o])) {
      e.destination = null, o++, N.splice(0, o);
      return;
    }
    N.splice(0, o);
    var V = e.partialBoundaries;
    for (o = 0; o < V.length; o++) {
      var ye = V[o];
      e: {
        l = e, u = t;
        var $ = ye.completedSegments;
        for (s = 0; s < $.length; s++) if (!ut(l, u, ye, $[s])) {
          s++, $.splice(0, s);
          var ge = !1;
          break e;
        }
        $.splice(0, s), ge = !0;
      }
      if (!ge) {
        e.destination = null, o++, V.splice(0, o);
        return;
      }
    }
    V.splice(0, o);
    var L = e.completedBoundaries;
    for (o = 0; o < L.length; o++) if (!$e(e, t, L[o])) {
      e.destination = null, o++, L.splice(0, o);
      return;
    }
    L.splice(0, o);
  } finally {
    e.allPendingTasks === 0 && e.pingedTasks.length === 0 && e.clientRenderedBoundaries.length === 0 && e.completedBoundaries.length === 0 && t.push(null);
  }
}
function Lt(e, t) {
  try {
    var n = e.abortableTasks;
    n.forEach(function(r) {
      return rt(r, e, t);
    }), n.clear(), e.destination !== null && me(e, e.destination);
  } catch (r) {
    D(e, r), X(e, r);
  }
}
function Ot() {
}
function st(e, t, n, r) {
  var l = !1, o = null, u = "", s = { push: function(a) {
    return a !== null && (u += a), !0;
  }, destroy: function(a) {
    l = !0, o = a;
  } }, i = !1;
  if (e = Vt(e, kt(n, t ? t.identifierPrefix : void 0), { insertionMode: 1, selectedValue: null }, 1 / 0, Ot, void 0, function() {
    i = !0;
  }), lt(e), Lt(e, r), e.status === 1) e.status = 2, s.destroy(e.fatalError);
  else if (e.status !== 2 && e.destination === null) {
    e.destination = s;
    try {
      me(e, s);
    } catch (a) {
      D(e, a), X(e, a);
    }
  }
  if (l) throw o;
  if (!i) throw Error(c(426));
  return u;
}
var At = z.renderToNodeStream = function() {
  throw Error(c(207));
}, Ht = z.renderToStaticMarkup = function(e, t) {
  return st(e, t, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
}, bt = z.renderToStaticNodeStream = function() {
  throw Error(c(208));
}, Wt = z.renderToString = function(e, t) {
  return st(e, t, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
}, Ut = z.version = "18.3.1";
export {
  z as default,
  At as renderToNodeStream,
  Ht as renderToStaticMarkup,
  bt as renderToStaticNodeStream,
  Wt as renderToString,
  Ut as version
};
