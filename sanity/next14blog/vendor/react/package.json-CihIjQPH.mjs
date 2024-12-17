const e = "react", s = "React is a JavaScript library for building user interfaces.", t = [
  "react"
], n = "18.3.1", o = "https://reactjs.org/", r = "https://github.com/facebook/react/issues", c = "MIT", i = [
  "LICENSE",
  "README.md",
  "index.js",
  "cjs/",
  "umd/",
  "jsx-runtime.js",
  "jsx-dev-runtime.js",
  "react.shared-subset.js"
], a = "index.js", d = {
  ".": {
    "react-server": "./react.shared-subset.js",
    default: "./index.js"
  },
  "./package.json": "./package.json",
  "./jsx-runtime": "./jsx-runtime.js",
  "./jsx-dev-runtime": "./jsx-dev-runtime.js"
}, p = {
  type: "git",
  url: "https://github.com/facebook/react.git",
  directory: "packages/react"
}, j = {
  node: ">=0.10.0"
}, u = {
  "loose-envify": "^1.1.0"
}, m = {
  transform: [
    "loose-envify"
  ]
}, g = {
  name: e,
  description: s,
  keywords: t,
  version: n,
  homepage: o,
  bugs: r,
  license: c,
  files: i,
  main: a,
  exports: d,
  repository: p,
  engines: j,
  dependencies: u,
  browserify: m
};
export {
  m as browserify,
  r as bugs,
  g as default,
  u as dependencies,
  s as description,
  j as engines,
  d as exports,
  i as files,
  o as homepage,
  t as keywords,
  c as license,
  a as main,
  e as name,
  p as repository,
  n as version
};
