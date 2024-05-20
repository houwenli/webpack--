const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    filename: '[name].js',
    path: path.join(__dirname, './dist'),
    library: {
      name: 'myNpm',
      type: 'umd'
    }
  }
}