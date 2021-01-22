# sassEs

esbuild sass plugin

## Usage

Install the package using
**npm**
`npm i essass`
or
**yarn**
`yarn add essass`

import the package to esbuild bundle.js and use as plugin

```javascript
let  sassEs = require("essass");
require("esbuild")
.build({
	...
	plugins: [sassEs],
	...
})
.catch(() =>  process.exit(1));
```

### import `sass` files

simply add sass files using import

```javascript
import  "./style.scss";
....
```
