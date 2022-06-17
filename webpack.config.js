const HtmlWebpackPlugin = require("html-webpack-plugin");
const { join } = require("path");
module.exports = {
  //   mode: "production",
  mode: "development",
  entry: "./src/main.js",
  output: {
    path: join(__dirname, "lib"),
    filename: "webpack-demo.js",
    clean: true,
  },
  devServer: {
    port: 30000,
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      // 建议是绝对路径
      template: join(__dirname, "public/index.html"),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/i,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.(png|jpg|gif|jpge)$/i,
        type: "asset/resource"
      },
    ],
  },
};
