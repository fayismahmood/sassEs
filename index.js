var sass = require('sass');
let path = require("path")

let sassEs = {
    name: 'sass',
    setup(build) {
      // Intercept import paths called "env" so esbuild doesn't attempt
      // to map them to a file system location. Tag them with the "env-ns"
      // namespace to reserve them for this plugin.
      build.onResolve({ filter: /\.scss$/ }, args => {
       // console.log(args);  
        return{
            path: path.resolve(args.resolveDir,args.path),
            namespace: 'sass',
          }
      })
  
      // Load paths tagged with the "env-ns" namespace and behave as if
      // they point to a JSON file containing the environment variables.
      build.onLoad({ filter: /.*/, namespace: 'sass' }, (args) => {        
        let compiled=sass.renderSync({file: args.path});
        return{
            contents: compiled.css.toString(),
            loader: 'css',
          }
      })
    },
  }


  module.exports=sassEs