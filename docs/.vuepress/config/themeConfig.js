const nav = require('./themeConfig/nav.js');
const sidebar = require('./themeConfig/sidebar.js');
// const htmlModules = require('./themeConfig/htmlModules.js');
// 以上是模块化定义，指定要引入的js文件及其路径。
//（即所在目录，./ 的意思是当前目录，../是上级目录，../../ 是往上两级目录）。
// 主题配置
module.exports = {
  nav,   // 导航栏
  sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
  logo: '/img/SSCC.png', // 导航栏logo，位于左上角
  repo: 'seasideccm/seasideccm.github.io', 
  //  导航栏右侧生成项目/代码仓库链接所需要的代码托管网站的项目名称，
  // repo的参数就是把项目网址前面的内容去掉而已。
  // search: false, //禁用内置搜索框，禁用后 fulltext search 也不能用了。
  searchMaxSuggestions: 100, // 搜索结果显示最大数
  
  // algolia: {
  // apiKey: '0fa4e9d656194b77ab52f8e6ed4ed2e7',
  // indexName: 'sscc',
  // appId: '7H9N1GQIPC'
  // },
  lastUpdated: '上次更新', // 开启更新时间，并配置前缀文字   string | boolean (取值为git提交时间)
  docsBranch: 'docs',  // 默认master分支，在github是main（这还要看看程序会用什么） //部署在主分支不需要设置。目录docs存放的是项目源码，也就是我们写的文章以及配置文件等。
  // 若非部署在项目/代码仓库的主分支上，就需要指定源码docs文件夹在哪个分支上。
  // 我在github上是放在seasideccm.github.io（这样的命名是为了避免网址中还需要下级目录）项目的docs分支上。
  docsDir: 'docs', // 项目源码所在目录，
  // docsRepo: 'seasideccm/sscc',     // 假如你的文档仓库和项目本身不在一个仓库，需要指定仓库名称   																	  
  editLinks: true, // 启用编辑
  editLinkText: '编辑',

  //*** 以下配置是Vdoing主题改动和新增的配置 ***//

  // category: false, // 是否打开分类功能，默认true。 如打开，会做的事情有：1. 自动生成的frontmatter包含分类字段 2.页面中显示与分类相关的信息和模块 3.自动生成分类页面（在@pages文件夹）。如关闭，则反之。
  // tag: false, // 是否打开标签功能，默认true。 如打开，会做的事情有：1. 自动生成的frontmatter包含标签字段 2.页面中显示与标签相关的信息和模块 3.自动生成标签页面（在@pages文件夹）。如关闭，则反之。
  // archive: false, // 是否打开归档功能，默认true。 如打开，会做的事情有：1.自动生成归档页面（在@pages文件夹）。如关闭，则反之。
  // categoryText: '随笔', // 碎片化文章（_posts文件夹的文章）预设生成的分类值，默认'随笔'

  bodyBgImg: [
    'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175828.jpeg',
    'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175845.jpeg',
    'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175846.jpeg'
  ], 
   // body背景大图，默认无。 
  // 单张图片类型为String（字符串，''括起来 || 多张图片类型 Array（数组）,['']括起来,  （||代表逻辑或，这里的意思就是或者）。 
  // 多张图片时每隔15秒换一张。
  // 不想要背景图就在每行开头用//注释掉												   
   bodyBgImgOpacity: 0.5, // body背景图透明度，选值 0 ~ 1.0, 默认0.5,  不启用bodyBgImg的话注释掉。

  // titleBadge: false, // 文章标题前的图标是否显示，默认true
  // titleBadgeIcons: [ // 文章标题前图标的地址，默认主题内置图标
  //   '图标地址1',
  //   '图标地址2'
  // ],
  // contentBgStyle: 1, // 文章内容块的背景风格，默认无. 1 => 方格 | 2 => 横线 | 3 => 竖线 | 4 => 左斜线 | 5 => 右斜线 | 6 => 点状

  // updateBar: { // 最近更新栏
  //   showToArticle: true, // 显示到文章页底部，默认true
  //   moreArticle: '/archives' // “更多文章”跳转的页面，默认'/archives'，即转到文章归档
  // },
  // rightMenuBar: false, // 是否显示右侧文章大纲栏，默认true (屏宽小于1300px下无论如何都不显示)
  // sidebarOpen: false, // 初始状态是否打开侧边栏，默认true
  // pageButton: false, // 是否显示快捷翻页按钮，默认true

  // sidebar: 'structuring', // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | 自定义    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页
  sidebar: { mode: 'structuring', collapsable: true},
  
  author: {
    // 文章默认的作者信息，可在md文件中单独配置此信息 String | {name: String, link: String}
    name: 'SSCC', // 必需
    // link: 'https://github.com/seasideccm/', // 可选的
  },
  blogger: {
    // 博主信息，显示在首页侧边栏
    avatar: '/img/SSCC.png',
    name: 'SSCC',
    slogan: '只要学不死就往死里学',
  },
  social: {
    // 社交图标，显示于博主信息栏和页脚栏
    // iconfontCssFile: '//at.alicdn.com/t/font_1678482_u4nrnp8xp6g.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自由添加
    icons: [
      {
        iconClass: 'icon-youjian',
        title: '发邮件',
        link: 'mailto:2094558239@qq.com',
      },
      {
        iconClass: 'icon-github',
        title: 'GitHub',
        link: 'https://github.com/seasideccm/',
      },
      {
        iconClass: 'icon-erji',
        title: '听音乐',
        link: 'https://music.163.com/#/song?id=1324720213',
      },
    ],
  },
  footer: {
    // 页脚信息
    createYear: 2021, // 博客创建年份
    copyrightInfo:
      'SSCC | <a href="https://github.com/seasideccm/seasideccm.github.io/blob/main/LICENSE" target="_blank">MIT License</a>', // 博客版权信息，支持a标签
  },
  // htmlModules // 插入hmtl(广告)模块
}
