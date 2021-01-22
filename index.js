var sass = require("sass");
let path = require("path");

let sassEs = {
  name: "sass",
  setup(build) {
    build.onResolve({ filter: /\.scss$/ }, (args) => {
      return {
        path: path.resolve(args.resolveDir, args.path),
        namespace: "sass",
      };
    });
    build.onLoad({ filter: /.*/, namespace: "sass" }, (args) => {
      let compiled = sass.renderSync({ file: args.path });
      return {
        contents: compiled.css.toString(),
        loader: "css",
      };
    });
  },
};

module.exports = sassEs;
