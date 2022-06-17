const HtmlWebpackPlugin = require("html-webpack-plugin");
const { join } = require("path");
module.exports = {
  entry: "./src/main.js",
  output: {
    path: join(__dirname, "lib"),
    filename: "webpack-demo.js",
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
        // 建议是绝对路径
        template:join(__dirname,'public/index.html')
    })
]
};
