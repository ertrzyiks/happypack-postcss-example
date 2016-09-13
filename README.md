# HappyPack + PostCSS example

## Problem?

PostCSS plugins are ignored.

Run `npm run build` and see content of `main.package.js` contains:

```js
exports.push([module.id, "body {\n  display: -ms-flexbox;\n  display: flex;\n}\n", ""]);
```

Run `npm run build-parallel` and see content of `main.package.js` contains:

```js
exports.push([module.id, "body {\n  display: flex;\n}\n", ""]);
```
