const path = require("path");

module.exports = {
  mode: "production",
  entry: { filename: path.resolve(__dirname, "src/index.js") },
  output: { path: path.resolve(__dirname, "dist"), filename: "index.js" },
  devServer: {
    port: 9000,
    compress: true,
    hot: true,
    static: {
      directory: path.join(__dirname, "dist"),
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};
