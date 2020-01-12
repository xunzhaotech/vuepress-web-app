(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{313:function(e,t,r){"use strict";r.r(t);var a=r(1),s=Object(a.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[r("p",[e._v("荀子在《劝学》曰："),r("strong",[e._v("君子生非异也，善假于物也")]),e._v("。对于重复而精确性的事物，理想的目标是：有贴心工具加以协助，使得可以用更便捷的方式处理；Github 创建仓库："),r("a",{attrs:{href:"https://github.com/nicejade/arya-jarvis",target:"_blank",rel:"noopener noreferrer"}},[e._v("ARYA JARVIS"),r("OutboundLink")],1),e._v("，即是为此而做的尝试 ── 她"),r("strong",[e._v("旨在为开发人员节省更多时间、精力以及体力")]),e._v("。而此篇文章的存在，介绍 "),r("a",{attrs:{href:"https://github.com/nicejade/arya-jarvis",target:"_blank",rel:"noopener noreferrer"}},[e._v("ARYA JARVIS"),r("OutboundLink")],1),e._v(" 的同时，也分享下关于对"),r("strong",[e._v("善假于物")]),e._v("的理解。")]),e._v(" "),e._m(0),e._v(" "),r("p",[e._v("原文首发于个人主博客："),r("a",{attrs:{href:"https://www.jeffjade.com/2019/08/25/156-arya-jarvis-born-for-efficiency/",target:"_blank",rel:"noopener noreferrer"}},[e._v("为高效而生：Arya Jarvis"),r("OutboundLink")],1),e._v("。")]),e._v(" "),r("p",[r("strong",[e._v("温馨说明")]),e._v("：鉴于会在后续业余时光中，为 "),r("a",{attrs:{href:"https://github.com/nicejade/arya-jarvis",target:"_blank",rel:"noopener noreferrer"}},[e._v("Arya Jarvis"),r("OutboundLink")],1),e._v(" 集成更多功能，以提升使用体验，而现在利用博文这种形式的介绍，未免有些欠佳；因此有采用 "),r("a",{attrs:{href:"https://nicelinks.site/post/5d4fec8c4c0a2404cc79f97a",target:"_blank",rel:"noopener noreferrer"}},[e._v("docsify"),r("OutboundLink")],1),e._v(" 塑造一文档 ── "),r("a",{attrs:{href:"https://arya.lovejade.cn/#/zh-cn?utm_source=jeffjade.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("ARYA JARVIS DOC"),r("OutboundLink")],1),e._v("，用以承载 "),r("code",[e._v("arya jarvis")]),e._v(" 的使用说明，从而能更好服务用户；如您有任何建议或意见，欢迎留言反馈（与此同时，还维护有"),r("a",{attrs:{href:"https://www.lovejade.cn/zh/works/",target:"_blank",rel:"noopener noreferrer"}},[e._v("更多工具作品"),r("OutboundLink")],1),e._v("，如感兴趣，请移步试用）。")]),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),r("p",[e._v("截止目前，Arya Jarvis 可以帮着做的事儿，已逐渐多了起来， 是时候可以将其先分享出来，希望有更多人可以一起使用 & 完善她。就如在 "),r("a",{attrs:{href:"https://github.com/nicejade/arya-jarvis",target:"_blank",rel:"noopener noreferrer"}},[e._v("Arya Jarvis README"),r("OutboundLink")],1),e._v(" 中写到的，我个人是此工具的最忠实的用户；现在编写 Arya Jarvis 之时，也是用她本身来格式美化项目代码，感谢我自己在业余时间自己创造了她，我是如此的喜欢。")]),e._v(" "),e._m(3),e._v(" "),r("p",[r("a",{attrs:{href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Node.js"),r("OutboundLink")],1),e._v("（> = 8. *），Npm 版本 5+（更推荐使用 "),r("a",{attrs:{href:"https://www.jeffjade.com/2017/12/30/135-npm-vs-yarn-detial-memo/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Yarn"),r("OutboundLink")],1),e._v("。")]),e._v(" "),e._m(4),e._v(" "),e._m(5),e._m(6),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),e._m(9),e._m(10),e._v(" "),e._m(11),e._m(12),e._v(" "),r("p",[r("strong",[e._v("温馨说明")]),e._v("："),r("a",{attrs:{href:"https://nicelinks.site/post/5c16083e819ae45de1453caa",target:"_blank",rel:"noopener noreferrer"}},[e._v("Prettier"),r("OutboundLink")],1),e._v(" 是一个有见识的代码格式化工具；使用它来美化，实在是再好不过，具体可以参见 "),r("a",{attrs:{href:"https://www.lovejade.cn/zh/article/beautify-vue-by-eslint-and-prettier.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("使用 ESLint ＆ Prettier 美化 Vue 代码"),r("OutboundLink")],1),e._v("；曾多次为很多前端开发者安利 "),r("code",[e._v("Prettier")]),e._v("，却因各种原因，不被接纳 😇； 考虑到其配置可能略对某些人显复杂，也就诞生了一个想法：做一个工具，是开发者开箱即用，领略其中舒爽，可还有拒绝的理由？而如上两个命令即可对此想法的实践。针对微型或临时项目，此工具还是非常实用（对于中大型项目，建议自行在项目中配置）。")]),e._v(" "),e._m(13),e._v(" "),e._m(14),e._m(15),e._v(" "),r("p",[e._v("实际上，这个功能有借助 "),r("a",{attrs:{href:"https://github.com/lwsjs/lws",target:"_blank",rel:"noopener noreferrer"}},[e._v("lws"),r("OutboundLink")],1),e._v(" 来实现；它的功能当然是不止于上面表达的那一点，这对于开发人员来讲，尤为实用，这将会在后面不断迭代中，继续完善；也有打算出一个文档，以给出充分说明，敬请期待。")]),e._v(" "),e._m(16),e._v(" "),e._m(17),e._m(18),e._v(" "),e._m(19),e._v(" "),e._m(20),e._m(21),e._v(" "),e._m(22),e._m(23),e._v(" "),e._m(24),r("p",[r("strong",[e._v("温馨说明")]),e._v("：此项目集成了"),r("a",{attrs:{href:"https://github.com/soldair/node-qrcod",target:"_blank",rel:"noopener noreferrer"}},[e._v("二维码生成器"),r("OutboundLink")],1),e._v("，可以很便捷在控制台，就根据命令，为指定文本生成二维码，并提供保存于本地的功能；这相比于要在网上搜索在线服务，要方便许多，从节省更多时间角度考量，用 "),r("code",[e._v("arya qrcode")]),e._v(" 是更好的抉择。")]),e._v(" "),e._m(25),e._v(" "),e._m(26),e._m(27),e._v(" "),e._m(28),e._v(" "),r("p",[e._v("即便已入中年，仍然坚信，只要"),r("strong",[e._v("主动折腾")]),e._v("，"),r("strong",[e._v("勤于折腾")]),e._v("，"),r("strong",[e._v("善于折腾")]),e._v("，相信总能将生活与人生，折腾成自己越发欢喜的模样，对于这近乎无休止的工作，亦是如此。"),r("a",{attrs:{href:"https://github.com/nicejade/arya-jarvis",target:"_blank",rel:"noopener noreferrer"}},[e._v("arya jarvis"),r("OutboundLink")],1),e._v(" 仍在考虑植入更多有用的功能，如果您有任何需求，您可以告诉我，或在此基础上进行扩展。如果您在使用过程中遇到任何问题，您可以随时向我的反馈。祝：生活幸福，工作快乐。")]),e._v(" "),e._m(29),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://nicelinks.site?utm_source=lovejade.cn",target:"_blank",rel:"noopener noreferrer"}},[r("strong",[e._v("倾城之链")]),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://about.me/nicejade?utm_source=lovejade.cn",target:"_blank",rel:"noopener noreferrer"}},[e._v("About Me"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://jeffjade.com/nicelinks?utm_source=lovejade.cn",target:"_blank",rel:"noopener noreferrer"}},[e._v("个人博客"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"http://www.lovejade.cn?utm_source=lovejade.cn",target:"_blank",rel:"noopener noreferrer"}},[e._v("幽居空谷轩"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://quickapp.lovejade.cn/?utm_source=lovejade.cn",target:"_blank",rel:"noopener noreferrer"}},[e._v("静轩之别苑"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://nice.lovejade.cn/?utm_source=lovejade.cn",target:"_blank",rel:"noopener noreferrer"}},[e._v("静晴轩别苑"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://docz.lovejade.cn/?utm_source=lovejade.cn",target:"_blank",rel:"noopener noreferrer"}},[e._v("吾意静晴轩"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://blog.lovejade.cn/?utm_source=lovejade.cn",target:"_blank",rel:"noopener noreferrer"}},[e._v("天意人间舫"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://weibo.com/jeffjade?utm_source=lovejade.cn",target:"_blank",rel:"noopener noreferrer"}},[e._v("新浪微博"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.zhihu.com/people/yang-qiong-pu/",target:"_blank",rel:"noopener noreferrer"}},[e._v("知乎主页"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.jianshu.com/u/9aae3d8f4c3d",target:"_blank",rel:"noopener noreferrer"}},[e._v("简书主页"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://segmentfault.com/u/jeffjade",target:"_blank",rel:"noopener noreferrer"}},[e._v("SegmentFault"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://twitter.com/nicejadeyang",target:"_blank",rel:"noopener noreferrer"}},[e._v("Twitter"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.facebook.com/nice.jade.yang",target:"_blank",rel:"noopener noreferrer"}},[e._v("Facebook"),r("OutboundLink")],1)])]),e._v(" "),r("p",[e._v("@2019-08-25 于东莞.长安 Last Modify：2019-09-07")]),e._v(" "),r("hr"),e._v(" "),e._m(30),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.jeffjade.com/2019/05/31/155-arya-markdown-online-editor/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Arya - 在线 Markdown 编辑器"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.jeffjade.com/2019/02/02/150-prettier-quickapp-plugin/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Prettier 插件为更漂亮快应用代码"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.jeffjade.com/2019/06/14/156-puppeteer-robot/",target:"_blank",rel:"noopener noreferrer"}},[e._v("基于 Puppeteer 构建简易机器人"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.jeffjade.com/2019/01/13/146-awesome-vue-cli3-example/",target:"_blank",rel:"noopener noreferrer"}},[e._v("基于 Vue-Cli3 构建的脚手架模版"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.jeffjade.com/2018/05/20/140-vue-webpack-boilerplate-template/",target:"_blank",rel:"noopener noreferrer"}},[e._v("开箱即用的 Vue Webpack 脚手架模版"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.jeffjade.com/2018/12/21/146-awesome-quickapp-resource-tutorial/",target:"_blank",rel:"noopener noreferrer"}},[e._v("快应用开发资源、教程汇聚"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.jeffjade.com/2018/11/11/145-quickapp-boilerplate-template/",target:"_blank",rel:"noopener noreferrer"}},[e._v("快应用脚手架，为优雅而生"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.jeffjade.com/2017/12/31/136-talk-about-nicelinks-site/",target:"_blank",rel:"noopener noreferrer"}},[e._v("云集优站，尽在「倾城之链」"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.jeffjade.com/2017/09/28/127-nice-front-end-tutorial/",target:"_blank",rel:"noopener noreferrer"}},[e._v("与时俱进版前端资源教程"),r("OutboundLink")],1)])])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:"https://image.nicelinks.site/arya-jarvis.jpg",alt:"为高效而生：Arya Jarvis"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"故事起源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#故事起源","aria-hidden":"true"}},[this._v("#")]),this._v(" 故事起源")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("就目前工作而言，比较多涉及的是 Web 前端这块。为更快能启动一个前端项目，抑或是做其他处理如：测试、构建、发布等，通常做法是在 "),r("code",[e._v("package.json")]),e._v(" 中配置 "),r("code",[e._v("scripts")]),e._v(" 脚本命令；然而，在接触一个复杂或者新项目时，如过对 scripts 脚本命令不够了然，则会限制在终端操作的速度。通常的做法是用熟悉的编辑器，打开该文件看下，或者借助 "),r("code",[e._v("cat")]),e._v(" 命令输出至终端加以查看。所以，很早之前就希望能有一种操作，可以一键以浏览之。久未遇到，也自然就产生了自己写一个的想法，这边是编写 "),r("code",[e._v("Arya Jarvis")]),e._v(" 的初衷。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"使用条件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用条件","aria-hidden":"true"}},[this._v("#")]),this._v(" 使用条件")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"下载安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载安装","aria-hidden":"true"}},[this._v("#")]),this._v(" 下载安装")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" i arya-jarvis -g\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Or")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" global arya-jarvis\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"如何使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何使用","aria-hidden":"true"}},[this._v("#")]),this._v(" 如何使用")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("如下两个代码美化相关功能，可以支持多种文件，譬如: "),r("code",[e._v(".js")]),e._v(", "),r("code",[e._v(".vue")]),e._v(", "),r("code",[e._v(".ux")]),e._v(", "),r("code",[e._v(".less")]),e._v(", "),r("code",[e._v(".scss")]),e._v(", "),r("code",[e._v(".css")]),e._v(", "),r("code",[e._v(".json")]),e._v(", "),r("code",[e._v(".md")]),e._v(", "),r("code",[e._v(".html")]),e._v(", "),r("code",[e._v(".qxml")]),e._v(", "),r("code",[e._v(".wxml")]),e._v("。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h5",{attrs:{id:"💄-美化指定路径下的代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#💄-美化指定路径下的代码","aria-hidden":"true"}},[this._v("#")]),this._v(" 💄 美化指定路径下的代码")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("arya prettier index.js\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[this._v("# 👏 Or Use Alias")]),this._v("\narya p ./src/**/**/*.js\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[this._v("# 👍🙌 Or Use Alias & Wildcard")]),this._v("\narya p "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[this._v(".")]),this._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h5",{attrs:{id:"🔬-监听并美化指定路径下的代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#🔬-监听并美化指定路径下的代码","aria-hidden":"true"}},[this._v("#")]),this._v(" 🔬 监听并美化指定路径下的代码")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("arya watcher index.js\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[this._v("# 👏 Or Use Alias")]),this._v("\narya w ./src/**/**/*.js\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[this._v("# 👍🙌 Or Use Alias & Wildcard")]),this._v("\narya w "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[this._v(".")]),this._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("值得一提的是，本项目代码在开发时，格式美化就使用 "),t("code",[this._v("arya w .")]),this._v(" 命令。感谢我自己业余时间自己开发此了 "),t("code",[this._v("arya jarvis")]),this._v(" ，我超级喜欢。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h5",{attrs:{id:"🌍-用于快速构建本地-web-服务器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#🌍-用于快速构建本地-web-服务器","aria-hidden":"true"}},[this._v("#")]),this._v(" 🌍 用于快速构建本地 Web 服务器")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("arya server\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[this._v("# 👏 Or Use Alias")]),this._v("\narya s\n")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[r("strong",[e._v("温馨说明")]),e._v("："),r("code",[e._v("arya s")]),e._v("，用于快速构建本地 Web 服务器，这是非常有用的功能；比如说，你想快速下载您电脑上资源至手机，那么即可在该资源目录下，运行 "),r("code",[e._v("arya s")]),e._v(" 命令，就会以当前目录作为静态网站托管，建立一个 Server，并依据本地 IP（/电脑名）生成地址，只要手机端跟电脑在同一个网段下，即可访问下载；这里更贴心的是，会将对应地址生成"),r("strong",[e._v("二维码")]),e._v("，并在控制台打印，用手机扫码即可访问。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h5",{attrs:{id:"⚡️-找到您本地-ip-地址并打印出来"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#⚡️-找到您本地-ip-地址并打印出来","aria-hidden":"true"}},[this._v("#")]),this._v(" ⚡️ 找到您本地 IP 地址并打印出来")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("arya "),t("span",{pre:!0,attrs:{class:"token function"}},[this._v("ip")]),this._v("\n")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[r("strong",[e._v("温馨说明")]),e._v("：对于获取本地 IP 这一诉求，无论是使用 Mac、Linux 还是 Windows 用户，如果没有特殊配置，也是颇为麻烦的；即便在控制台使用 "),r("code",[e._v("ipconfig")]),e._v(" or "),r("code",[e._v("ifconfig")]),e._v("，得到的结果也是需要一番筛选；而使用 "),r("code",[e._v("arya ip")]),e._v(" 则可以轻松获取。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h5",{attrs:{id:"👀-查看占用指定端口的程序"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#👀-查看占用指定端口的程序","aria-hidden":"true"}},[this._v("#")]),this._v(" 👀 查看占用指定端口的程序")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("arya port "),t("span",{pre:!0,attrs:{class:"token number"}},[this._v("8080")]),this._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[this._v("# Or")]),this._v("\narya port "),t("span",{pre:!0,attrs:{class:"token number"}},[this._v("8081")]),this._v("\n")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[r("strong",[e._v("温馨说明")]),e._v("：同样，在几个不同的平台上，想知晓某个端口（如：8080）被哪个程序所占用，也是需要一番周章的；在 Windows 系统，可以使用 "),r("code",[e._v("netstat")]),e._v(" 命令，而在其他两个平台，大多数可能会选择 "),r("code",[e._v("lsof")]),e._v("；但记忆与操作起来毕竟麻烦，而使用 "),r("code",[e._v("arya")]),e._v(" 相对就方面很多，可以通过以下命令做下对比：")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 适用于 Windows 系统")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("netstat")]),e._v(" -ano "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" findstr "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("8080")]),e._v("\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 适用于 Mac Linux 系统")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("lsof")]),e._v(" -i tcp:8080\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 适用于 Mac Linux Windows 系统")]),e._v("\narya port "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("8080")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h5",{attrs:{id:"📷-为指定文本生成二维码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#📷-为指定文本生成二维码","aria-hidden":"true"}},[this._v("#")]),this._v(" 📷 为指定文本生成二维码")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("arya qrcode "),t("span",{pre:!0,attrs:{class:"token string"}},[this._v('"https://www.jeffjade.com/"')]),this._v("\narya qrcode "),t("span",{pre:!0,attrs:{class:"token string"}},[this._v('"晚晴幽草轩轩主"')]),this._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h5",{attrs:{id:"🚝-列出-package-json-中的脚本命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#🚝-列出-package-json-中的脚本命令","aria-hidden":"true"}},[this._v("#")]),this._v(" 🚝 列出 package.json 中的脚本命令")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("arya "),t("span",{pre:!0,attrs:{class:"token function"}},[this._v("ls")]),this._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[this._v("# 👏 Or Use Alias")]),this._v("\narya l\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("温馨说明")]),this._v("：正如前文在"),t("strong",[this._v("故事起源")]),this._v("中所提及的那般，"),t("code",[this._v("arya ls")]),this._v(" 这个命令是这个项目的初衷：只为方便知晓前端项目 package.json 中都存在哪些脚本，以方便更快运行。只是在迭代中，越发多的集成了更多普遍可以用到的功能，此功能的存在显得就不是那么闪耀；但，作为引发燎原之势的那一缕星光 🌟，将持久铭记，且常用之。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"写于文章结尾"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#写于文章结尾","aria-hidden":"true"}},[this._v("#")]),this._v(" 写于文章结尾")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"相关链接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#相关链接","aria-hidden":"true"}},[this._v("#")]),this._v(" 相关链接")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"您可能会感兴趣的文章"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#您可能会感兴趣的文章","aria-hidden":"true"}},[this._v("#")]),this._v(" 您可能会感兴趣的文章")])}],!1,null,null,null);t.default=s.exports}}]);