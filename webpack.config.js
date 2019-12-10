const webpack = require("webpack")
const path = require("path")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const ExtensionReloader  = require("webpack-extension-reloader")

const distFolder = 'dist'
const distPath = path.join(__dirname, distFolder)
const distSrcPath = path.join(distPath, 'src')

const manifestPath = path.join(distPath,
                              'manifest.json')

const plugins = [

]

module.exports = {
    mode: 'development',
    entry: {
        background: './src/src/background.js',
        content: './src/src/content.js'
    },
    output: {
        path: distSrcPath,
        filename: "[name].js"
    },
    plugins: [
      new CopyWebpackPlugin([
        { from: "./src/manifest.json", to: distPath },
        { context: 'src/src/', from: "*.html", to: distSrcPath },
        { context: 'src/src/', from: "*.css", to: distSrcPath }
    ]),
      new ExtensionReloader({
          port: 1417,
          reloadPage: true,
          manifest: manifestPath
      })
    ]
}
