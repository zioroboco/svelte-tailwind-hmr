import { Configuration, HotModuleReplacementPlugin } from "webpack"
import { resolve } from "path"
import HtmlWebpackPlugin from "html-webpack-plugin"

const config: Configuration = {
  mode: "development",
  entry: "./src/main",
  devtool: "source-map",
  resolve: {
    alias: {
      svelte: resolve("node_modules", "svelte"),
    },
    extensions: [".ts", ".mjs", ".js", ".json", ".svelte"],
    mainFields: ["svelte", "browser", "module", "main"],
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
      {
        test: /\.svelte$/,
        use: {
          loader: "svelte-loader",
          options: {
            hotReload: true,
            preprocess: require("svelte-preprocess")({ postcss: true }),
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
