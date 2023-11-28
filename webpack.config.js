const path = require("path");

module.exports = {
  mode: "development",
  // entry point
  entry: "./src/app.ts",
  devServer: {
    static: [
      {
        directory: path.join(__dirname),
      },
    ],
  },
  //   output
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: '/dist/'
  },
  devtool: 'inline-source-map', //help in debugging, set sourceMap true in tsconfig.json
  //   tell webpack how to deal with the file
  module: {
    rules: [
      {
        test: /\.ts$/, // any file ends with .ts should be handle by this rule
        use: "ts-loader", // tell webpack to deal ts file with this loader
        exclude: /node_modules/, // tell webpack not to look at this modules
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"], // tell webpack look for both ts and js file
  },
};
