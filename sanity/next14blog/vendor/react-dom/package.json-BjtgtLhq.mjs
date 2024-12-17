const e = "react-dom", s = "18.3.1", r = "React package for working with the DOM.", o = "index.js", t = {
  type: "git",
  url: "https://github.com/facebook/react.git",
  directory: "packages/react-dom"
}, n = [
  "react"
], c = "MIT", i = {
  url: "https://github.com/facebook/react/issues"
}, a = "https://reactjs.org/", p = {
  "loose-envify": "^1.1.0",
  scheduler: "^0.23.2"
}, d = {
  react: "^18.3.1"
}, j = [
  "LICENSE",
  "README.md",
  "index.js",
  "client.js",
  "profiling.js",
  "server.js",
  "server.browser.js",
  "server.node.js",
  "test-utils.js",
  "cjs/",
  "umd/"
], l = {
  ".": "./index.js",
  "./client": "./client.js",
  "./server": {
    deno: "./server.browser.js",
    worker: "./server.browser.js",
    browser: "./server.browser.js",
    default: "./server.node.js"
  },
  "./server.browser": "./server.browser.js",
  "./server.node": "./server.node.js",
  "./profiling": "./profiling.js",
  "./test-utils": "./test-utils.js",
  "./package.json": "./package.json"
}, b = {
  "./server.js": "./server.browser.js"
}, g = {
  transform: [
    "loose-envify"
  ]
}, v = {
  name: e,
  version: s,
  description: r,
  main: o,
  repository: t,
  keywords: n,
  license: c,
  bugs: i,
  homepage: a,
  dependencies: p,
  peerDependencies: d,
  files: j,
  exports: l,
  browser: b,
  browserify: g
};
export {
  b as browser,
  g as browserify,
  i as bugs,
  v as default,
  p as dependencies,
  r as description,
  l as exports,
  j as files,
  a as homepage,
  n as keywords,
  c as license,
  o as main,
  e as name,
  d as peerDependencies,
  t as repository,
  s as version
};
