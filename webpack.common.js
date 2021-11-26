const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    app: './src/index.tsx'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public/build'),
    publicPath: '/',
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Production',
      template: path.resolve(__dirname, 'public', 'index.html'),
      favicon: path.resolve(__dirname, 'public', 'favicon.ico'),
    })
  ],
  resolve: {
    modules: [__dirname, "src", "node_modules"],
    extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
    alias: {
      '@articles': path.resolve(__dirname, "src/modules/content/modules/articles"),
      '@news': path.resolve(__dirname, "src/modules/content/modules/news")
    }
  },
  module: {
    rules: [
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
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.png|svg|jpg|gif$/,
        use: ["file-loader"],
      },
    ],
  },
};
