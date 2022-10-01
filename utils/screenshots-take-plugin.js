class ScreenshotsTakePlugin {
  apply(compiler) {
    const pluginName = this.constructor.name;
    compiler.hooks.compilation.tap(pluginName, compilation => {
      const HtmlWebpackPlugin = require('html-webpack-plugin');

      const hooks = HtmlWebpackPlugin.getHooks(compilation);
      hooks.afterEmit.tapPromise(pluginName, async () => await this.takeScreenshots(compiler, compilation));
    });
  }

  async takeScreenshots(compiler, compilation) {
    
  }
}

exports.default = ScreenshotsTakePlugin;
module.exports = exports.default;
module.exports.default = exports.default;
