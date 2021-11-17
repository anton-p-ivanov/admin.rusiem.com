const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const path = require("path");
const fs = require("fs");

module.exports = (env, options) => {
  const mode = options.mode || 'development';
  const dotenv = [`.env.${mode}.local`, `.env.${mode}`, ".env.local", ".env"]
      .filter((filename) => fs.existsSync(path.resolve(__dirname, filename)))
      .shift();

  return ({
    mode,
    entry: "./src/index.tsx",
    devtool: 'inline-source-map',
    output: {
      filename: "[name].[fullhash].js",
      path: path.resolve(__dirname, "public"),
      publicPath: "/"
    },
    plugins: [
      new Dotenv({
        path: dotenv
      }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "public", "index.html"),
      })
    ],
    resolve: {
      modules: [__dirname, "src", "node_modules"],
      extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
      alias: {
        '@news': path.resolve(__dirname, "src/modules/content/modules/news")
      }
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          enforce: "pre",
          use: ["source-map-loader"],
        },
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: require.resolve("babel-loader"),
        },
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-react",
                "@babel/preset-typescript",
              ],
              plugins: [
                "@babel/plugin-transform-runtime",
              ]
            },
          },
        },
        {
          test: /\.s[ac]ss$/,
          include: /src/,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
        {
          test: /\.png|svg|jpg|gif$/,
          use: ["file-loader"],
        },
      ],
    },
    devServer: {
      historyApiFallback: true,
    },
  });
};
