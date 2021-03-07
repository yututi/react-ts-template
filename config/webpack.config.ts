import path from 'path'
import { Configuration } from 'webpack'

const currentDir = process.cwd()

const isEnvProd = process.env.NODE_ENV === 'production'

const config: Configuration = {
  context: path.join(currentDir, 'src'),
  entry: './index.tsx',
  output: {
    path: path.join(currentDir, 'dist'),
    filename: 'bundle.js',
    publicPath: '/assets'
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        use: 'ts-loader'
      },
      {
        test: /\.(css|scss|sass)?$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack']
      }
    ]
  },
  mode: isEnvProd ? 'production' : 'development',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  devtool: isEnvProd ? false : 'source-map',
  devServer: {
    contentBase: path.join(currentDir, 'static'),
    open: true,
    port: 3000
  }
}

export default config
