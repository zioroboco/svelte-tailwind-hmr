import { Configuration, HotModuleReplacementPlugin } from "webpack"
import HtmlWebpackPlugin from "html-webpack-plugin"

const config: Configuration = {
  mode: "development",
  entry: "./src/main",
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: "ts-loader",
          options: {
            configFile: "tsconfig.json",
            transpileOnly: true,
          },
        },
      },
    ],
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: "index.html",
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: "async",
    },
  },
  experiments: {
    topLevelAwait: true,
  },
  devServer: {
    hot: true,
  },
}

export default config
