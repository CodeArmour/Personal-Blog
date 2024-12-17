const e = "styled-components", t = "6.1.13", s = "CSS for the <Component> Age. Style components your way with speed, strong typing, and flexibility.", n = "dist/index.d.ts", o = "dist/styled-components.cjs.js", r = "./dist/styled-components.esm.js", p = {
  "./dist/styled-components.cjs.js": "./dist/styled-components.browser.cjs.js",
  "./dist/styled-components.esm.js": "./dist/styled-components.browser.esm.js"
}, c = !1, i = {
  generateErrors: "node scripts/generateErrorMap.js",
  prebuild: "rimraf dist && yarn run generateErrors",
  build: "rollup -c",
  postbuild: "yarn run size",
  pretest: "yarn run generateErrors",
  test: "yarn run test:web && yarn run test:native",
  "test:web": "jest -c jest.config.main.js",
  "test:native": "jest -c jest.config.native.js --forceExit",
  "test:integration": "jest -c jest.config.integration.js --runInBand --forceExit",
  size: "bundlewatch",
  prettier: "prettier src --write",
  "prettier:check": "prettier src --check",
  prepublishOnly: "cp ../../README.md . && yarn run build"
}, l = {
  type: "git",
  url: "git+https://github.com/styled-components/styled-components.git"
}, a = [
  "LICENSE",
  "README.md",
  "dist",
  "native",
  "test-utils"
], d = [
  "react",
  "css",
  "css-in-js",
  "styled-components",
  "styling"
], u = "Glen Maddern", y = "MIT", m = {
  url: "https://github.com/styled-components/styled-components/issues"
}, b = "https://styled-components.com", g = {
  "@emotion/is-prop-valid": "1.2.2",
  "@emotion/unitless": "0.8.1",
  "@types/stylis": "4.2.5",
  "css-to-react-native": "3.2.0",
  csstype: "3.1.3",
  postcss: "8.4.38",
  shallowequal: "1.1.0",
  stylis: "4.3.2",
  tslib: "2.6.2"
}, j = {
  react: ">= 16.8.0",
  "react-dom": ">= 16.8.0"
}, h = {
  "@babel/core": "7.24.5",
  "@babel/helper-module-imports": "7.24.3",
  "@babel/plugin-external-helpers": "7.24.1",
  "@babel/plugin-proposal-class-properties": "7.18.6",
  "@babel/plugin-proposal-object-rest-spread": "7.20.7",
  "@babel/plugin-transform-flow-strip-types": "7.24.1",
  "@babel/preset-env": "7.24.5",
  "@babel/preset-react": "7.24.1",
  "@babel/preset-typescript": "7.24.1",
  "@rollup/plugin-typescript": "11.1.6",
  "@types/enzyme": "3.10.18",
  "@types/jest": "29.5.12",
  "@types/js-beautify": "1.14.3",
  "@types/node": "18.19.31",
  "@types/react": "17.0.80",
  "@types/react-dom": "17.0.25",
  "@types/react-frame-component": "4.1.6",
  "@types/react-native": "0.69.26",
  "@types/react-test-renderer": "17.0.9",
  "@types/shallowequal": "1.1.5",
  "babel-jest": "29.7.0",
  "babel-plugin-add-module-exports": "1.0.4",
  "babel-plugin-styled-components": "2.1.4",
  "babel-plugin-tester": "10.1.0",
  bundlewatch: "0.3.3",
  jest: "29.7.0",
  "jest-environment-jsdom": "29.7.0",
  "jest-serializer-html": "7.1.0",
  "jest-watch-typeahead": "2.2.2",
  "js-beautify": "1.15.1",
  prettier: "3.2.5",
  "prop-types": "15.8.1",
  react: "17.0.2",
  "react-dom": "17.0.2",
  "react-frame-component": "4.1.3",
  "react-native": "0.70.15",
  "react-test-renderer": "17.0.2",
  rollup: "3.29.4",
  "rollup-plugin-commonjs": "10.1.0",
  "rollup-plugin-json": "4.0.0",
  "rollup-plugin-node-resolve": "5.2.0",
  "rollup-plugin-replace": "2.2.0",
  "rollup-plugin-sourcemaps": "0.6.3",
  "rollup-plugin-terser": "7.0.2",
  "stylis-plugin-rtl": "2.1.1",
  "ts-toolbelt": "9.6.0",
  typescript: "5.4.5"
}, f = {
  files: [
    {
      path: "./dist/styled-components.min.js",
      maxSize: "11.5kB"
    }
  ]
}, v = {
  type: "opencollective",
  url: "https://opencollective.com/styled-components"
}, w = {
  type: "opencollective",
  url: "https://opencollective.com/styled-components"
}, E = {
  node: ">= 16"
}, x = {
  name: e,
  version: t,
  description: s,
  types: n,
  main: o,
  module: r,
  "react-native": "native/dist/styled-components.native.cjs.js",
  browser: p,
  sideEffects: c,
  scripts: i,
  repository: l,
  files: a,
  keywords: d,
  author: u,
  license: y,
  bugs: m,
  homepage: b,
  dependencies: g,
  peerDependencies: j,
  devDependencies: h,
  bundlewatch: f,
  collective: v,
  funding: w,
  engines: E
};
export {
  u as author,
  p as browser,
  m as bugs,
  f as bundlewatch,
  v as collective,
  x as default,
  g as dependencies,
  s as description,
  h as devDependencies,
  E as engines,
  a as files,
  w as funding,
  b as homepage,
  d as keywords,
  y as license,
  o as main,
  r as module,
  e as name,
  j as peerDependencies,
  l as repository,
  i as scripts,
  c as sideEffects,
  n as types,
  t as version
};
