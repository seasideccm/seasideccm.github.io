// head
module.exports = [
  // 注入到页面<head> 中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
  ['link', { rel: 'icon', href: '/img/favicon.ico' }], //favicons，资源放在public文件夹
  [
    'meta',
    {
      name: 'keywords',
      content: '重症医学,血流,指南,critical care medicine,',
    },
  ],
  ['meta', { name: 'baidu-site-verification', content: '7F55weZDDc' }], // 百度统计的站长验证
  ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色
 //[
 //  'script',
 //  {
 //    'data-ad-client': 'ca-pub-7828333725993554',
 //    async: 'async',
 //    src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
 //  },
 //], // 网站关联Google AdSense 与 html格式广告支持
]
