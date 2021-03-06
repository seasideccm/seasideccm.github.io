// 插件引用和参数配置
const fs = require('fs')
const { path } = require('@vuepress/shared-utils')
module.exports = [
  // 本地插件（不在node_modules文件夹内，需要用require指定好引用路径）。
  // [require('./plugins/love-me'), { // 鼠标点击爱心特效
  //   color: '#11a8cd', // 爱心颜色，默认随机色
  //   excludeClassName: 'theme-vdoing-content' // 要排除元素的class, 默认空''
  // }],

  'vuepress-plugin-baidu-autopush', // 百度自动推送

  [
    'one-click-copy',
    {
      // 代码块复制按钮
      copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
      copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
      duration: 1000, // prompt message display time.
      showInMobile: false, // whether to display on the mobile side, default: false.
    },
  ],
  [
    'demo-block',
    {
      // demo演示模块 https://github.com/xiguaxigua/vuepress-plugin-demo-block
      settings: {
        // jsLib: ['http://xxx'], // 在线示例(jsfiddle, codepen)中的js依赖
        // cssLib: ['http://xxx'], // 在线示例中的css依赖
        // vue: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js', // 在线示例中的vue依赖
        jsfiddle: false, // 是否显示 jsfiddle 链接
        codepen: true, // 是否显示 codepen 链接
        horizontal: false, // 是否展示为横向样式
      },
    },
  ],
  [
    'vuepress-plugin-zooming', // 放大图片
    {
      selector: '.theme-vdoing-content img:not(.no-zoom)', // 排除class是no-zoom的图片
      options: {
        bgColor: 'rgba(0,0,0,0.6)',
      },
    },
  ],
  [
    'vuepress-plugin-baidu-tongji', // 百度统计
    {
      hm: '74fabdf03bf360b01f9693bcf58ad802',
    },
  ],
  [
    'vuepress-plugin-comment', // 评论
    {
      choosen: 'gitalk',
      options: {
        clientID: '6ca64d720e9025287124',
        clientSecret: '4695eface4f3cf2e92ba2ed31f56691dc54b2e0f',
        repo: 'blog-gitalk-comment', // GitHub 仓库
        owner: 'seasideccm', // GitHub仓库所有者
        admin: ['seasideccm'], // 对仓库有写权限的人
        distractionFreeMode: true,
        pagerDirection: 'last', // 'first'正序 | 'last'倒序
        id: '<%- (frontmatter.permalink || frontmatter.to.path).slice(-16) %>', //  页面的唯一标识,长度不能超过50
        title: '「评论」<%- frontmatter.title %>', // GitHub issue 的标题
        labels: ['Gitalk', 'Comment'], // GitHub issue 的标签
        body:
          '页面：<%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>', // GitHub issue 的内容
      },
    },
  ],
  [
    '@vuepress/last-updated', // "上次更新"时间格式
    {
      transformer: (timestamp, lang) => {
        const dayjs = require('dayjs') // https://day.js.org/
        return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss')
      },
    },
  ],
  [ 'tabs' ],
  [ 'pangu' ],
  [ 'vuepress-plugin-mathjax'],
  
  // ['algolia'],
  
  // [ 'element-ui' ],
  
  [
    'fulltext-search',
    {
      // provide the contents of a JavaScript file
      hooks: fs.readFileSync(path.resolve(__dirname, './searchHooks.js')),
    },
  ],
  
  ['sitemap', {
      hostname: "https://seasideccm.github.io/"
    },
    
  ],
  
  [
      'meting',
      {
         meting: {
			auto: 
			// 'https://music.163.com/#/album?id=74364367'
			// 'https://music.163.com/#/playlist?id=6988583'
			'https://music.163.com/playlist?id=6717117896'
		 },
         aplayer: {
			lrcType: 3,
		 },
      },
  ]
]
