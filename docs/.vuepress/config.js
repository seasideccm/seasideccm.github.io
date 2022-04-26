const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');


module.exports = {
  theme: 'vdoing', // 使用依赖包主题,
  //可以通过“ npm update vuepress-theme-vdoing  ”在线升级，
  // 升级前备份好docs文件夹，以备不时之需 
  // 如更新后没起作用或报错，尝试把node_modules文件夹删除再npm i重新安装。
  // 在.vuepress/config.js中，设置theme: 'vdoing'才是使用npm主题依赖包。
  // theme: require.resolve('../../theme-vdoing'), // 使用本地主题

  title: "SSCC",
  description: 'SSCC交流平台，供医护学习、讨论、积累CCM知识',
  // base: '/',      // 格式：'/<目录名>/'， 默认'/'就好
  // 部署站点的基础路径，
      // 
      // 如果你想让你的网站部署到一个子路径下，你将需要设置它。 
      // 比如发布在GitHub pages上，如果你想将你的网站部署到 https://foo.github.io/bar/，（foo是开发人员常用的代表将来要替换的内容）那么 base 应该被设置成 "/bar/"，它的值应当总是以斜杠开始，并以斜杠结束。
      // 
      // base 将会作为前缀自动地插入到所有以 / 开始的其他选项的链接中，所以你只需要指定一次。
  markdown: {
    lineNumbers: true, // 代码行号
	extractHeaders: [ 'h2', 'h3', 'h4', 'h5', 'h6' ],
  },

  head,
  plugins,
  themeConfig,
  // 以上指的是调用三个模块，在本文最开头做了定义

/*   chainWebpack: (config, isServer) => {
    config.module
      .rule('pdfs')
      .test(/\.pdf$/)
      .use('file-loader')
        .loader('file-loader')
      .options({
        name: `[path][name].[ext]`
      });
    
    config.module.rule('vue')
      .uses.store
      .get('vue-loader').store
      .get('options').transformAssetUrls = {
        video: ['src', 'poster'],
        source: 'src',
        img: 'src',
        image: ['xlink:href', 'href'],
        a: 'href'
      };
  },
 */


}
