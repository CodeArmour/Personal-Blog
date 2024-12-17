import p from "react";
var f = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var i = p, u = Symbol.for("react.element"), a = Symbol.for("react.fragment"), m = Object.prototype.hasOwnProperty, y = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, v = { key: !0, ref: !0, __self: !0, __source: !0 };
function l(o, r, _) {
  var e, t = {}, n = null, s = null;
  _ !== void 0 && (n = "" + _), r.key !== void 0 && (n = "" + r.key), r.ref !== void 0 && (s = r.ref);
  for (e in r) m.call(r, e) && !v.hasOwnProperty(e) && (t[e] = r[e]);
  if (o && o.defaultProps) for (e in r = o.defaultProps, r) t[e] === void 0 && (t[e] = r[e]);
  return { $$typeof: u, type: o, key: n, ref: s, props: t, _owner: y.current };
}
var O = f.Fragment = a, c = f.jsx = l, x = f.jsxs = l;
export {
  O as Fragment,
  f as default,
  c as jsx,
  x as jsxs
};
