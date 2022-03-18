# sassEs

Sass plugin for [esbuild](https://esbuild.github.io/)

## Usage

Install the package using

```console
$ npm i essass
or
$ yarn add essass
```

Import the package to esbuild bundle.js and use as plugin

```javascript
let sassEs = require("essass");
require("esbuild")
.build({
	// ...
	plugins: [sassEs],
	// ...
})
.catch(() =>  process.exit(1));
```

### Import Sass/SCSS files

Simply add Sass files using import

```javascript
import  "./style.scss";
// ...
```
