const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const { HotModuleReplacementPlugin } = require("webpack");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

const devConfig = {
  mode: "development",
  devServer: {
    static: {
      directory: "../public",
    },
    allowedHosts: "all",
    port: 3000,
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin({ overlay: false }),
  ],
  devtool: "eval-source-map",
  module: {
    rules: [
      {
        use: ["style-loader", "css-loader"],
        test: /\.(css)$/,
      },
    ],
  },
};

module.exports = merge(common, devConfig);
