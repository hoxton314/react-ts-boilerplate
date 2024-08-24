import path from 'path'
import { fileURLToPath } from 'url'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import Dotenv from 'dotenv-webpack'
import pkg from 'webpack'

const { ProvidePlugin, ProgressPlugin } = pkg

const { NODE_ENV = 'production' } = process.env

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default {
  entry: {
    app: './src/index.tsx',
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
    fallback: {
      stream: path.resolve(__dirname, 'node_modules/stream-browserify'),
      buffer: path.resolve(__dirname, 'node_modules/buffer/'),
      process: path.resolve(__dirname, 'node_modules/process'),
    },
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@components': path.resolve(__dirname, 'src/components/'),
      '@icons': path.resolve(__dirname, 'src/components/Icons'),
      '@assets': path.resolve(__dirname, 'src/assets/'),
      '@communication': path.resolve(__dirname, 'src/communication/'),
      '@constants': path.resolve(__dirname, 'src/constants/'),
      '@hooks': path.resolve(__dirname, 'src/hooks/'),
      '@methods': path.resolve(__dirname, 'src/methods/'),
      '@modules': path.resolve(__dirname, 'src/modules/'),
      '@store': path.resolve(__dirname, 'src/store/'),
      '@styles': path.resolve(__dirname, 'src/styles/'),
      '@customTypes': path.resolve(__dirname, 'src/types/'),
      '@themes': path.resolve(__dirname, 'src/themes/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif|pdf|eot|woff|woff2|ttf|ico|webmanifest|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.json$/,
        type: 'json',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new ProgressPlugin(),
    new Dotenv(),
    new HtmlWebpackPlugin({
      title: 'React Boilerplate',
      template: './src/index.html',
      inject: true,
    }),
    new ProvidePlugin({
      process: 'process/browser',
    }),
    new ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
    }),
  ],
  mode: NODE_ENV,
  target: 'web',
  output: {
    filename: '[name].[contenthash].bundle.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    clean: true,
  },
  devServer: {
    historyApiFallback: true,
    open: true,
  },
  optimization: {
    moduleIds: 'deterministic',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
}
