(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{475:function(s,t,e){"use strict";e.r(t);var a=e(2),r=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("Boxx"),s._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#序言"}},[s._v("序言")])]),e("li",[e("a",{attrs:{href:"#本地环境搭建"}},[s._v("本地环境搭建")]),e("ul",[e("li",[e("a",{attrs:{href:"#_1-去-theme-example-https-vuepress-theme-reco-recoluan-com-views-other-theme-example-html-，找个合心意的博客-clone"}},[s._v("1. 去 theme-example ，找个合心意的博客 clone")])]),e("li",[e("a",{attrs:{href:"#_2-把项目下载之后，修改-package-json"}},[s._v("2. 把项目下载之后，修改 package.json")])]),e("li",[e("a",{attrs:{href:"#_3-更换主题为本地"}},[s._v("3. 更换主题为本地")])])])]),e("li",[e("a",{attrs:{href:"#可能遇到的问题"}},[s._v("可能遇到的问题")]),e("ul",[e("li",[e("a",{attrs:{href:"#_1-插件解析失败问题"}},[s._v("1. 插件解析失败问题")])])])])])]),e("p"),s._v(" "),e("h2",{attrs:{id:"序言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#序言"}},[s._v("#")]),s._v(" 序言")]),s._v(" "),e("p",[s._v("如果你开始或已经使用  "),e("a",{attrs:{href:"https://github.com/vuepress-reco/vuepress-theme-reco",target:"_blank",rel:"noopener noreferrer"}},[s._v("vuepress-theme-reco"),e("OutboundLink")],1),s._v(" 搭建了属于自己的个人博客的时候，那么恭喜你，你已经成为我们的一员了。\n那么我想以下一定是需要了解的：")]),s._v(" "),e("ul",[e("li",[s._v("vuepress官网："),e("a",{attrs:{href:"https://vuepress.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://vuepress.vuejs.org/zh/"),e("OutboundLink")],1)]),s._v(" "),e("li",[s._v("vuepress自定义开发主题："),e("a",{attrs:{href:"https://vuepress.vuejs.org/zh/theme/writing-a-theme.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://vuepress.vuejs.org/zh/theme/writing-a-theme.html"),e("OutboundLink")],1)]),s._v(" "),e("li",[s._v("vuepress-theme-reco官网："),e("a",{attrs:{href:"https://vuepress-theme-reco.recoluan.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://vuepress-theme-reco.recoluan.com/"),e("OutboundLink")],1)])]),s._v(" "),e("h2",{attrs:{id:"本地环境搭建"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#本地环境搭建"}},[s._v("#")]),s._v(" 本地环境搭建")]),s._v(" "),e("h3",{attrs:{id:"_1-去-theme-example-，找个合心意的博客-clone"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-去-theme-example-，找个合心意的博客-clone"}},[s._v("#")]),s._v(" 1. 去"),e("a",{attrs:{href:"https://vuepress-theme-reco.recoluan.com/views/other/theme-example.html",target:"_blank",rel:"noopener noreferrer"}},[s._v(" theme-example "),e("OutboundLink")],1),s._v("，找个合心意的博客 clone")]),s._v(" "),e("ul",[e("li",[s._v("我就以我的下载我的为例："),e("code",[s._v("git clone https://github.com/zpj80231/znote.git")])])]),s._v(" "),e("h3",{attrs:{id:"_2-把项目下载之后，修改-package-json"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-把项目下载之后，修改-package-json"}},[s._v("#")]),s._v(" 2. 把项目下载之后，修改 package.json")]),s._v(" "),e("div",{staticClass:"language-json line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"docs:dev"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress dev docs"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"docs:build"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress build docs"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"deploy"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bash deploy.sh"')]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"devDependencies"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"vuepress"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^1.2.0"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"vuepress-theme-reco"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^1.1.2-alpha.2"')]),s._v("        \n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("ul",[e("li",[s._v("然后在此目录下打开命令窗口执行："),e("code",[s._v("npm install")]),s._v("（提前安装好node.js环境）")])]),s._v(" "),e("h3",{attrs:{id:"_3-更换主题为本地"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-更换主题为本地"}},[s._v("#")]),s._v(" 3. 更换主题为本地")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("打开git，克隆："),e("code",[s._v("git clone https://github.com/vuepress-reco/vuepress-theme-reco.git")])]),s._v(" "),e("p",[s._v("把下载下来的文件夹更名为 theme，粘贴至 .vuepress下即可。")])]),s._v(" "),e("li",[e("p",[s._v("将主题文件放到本地开发环境")])])]),s._v(" "),e("div",{staticClass:"language-lua line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-lua"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("#")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("#")]),s._v("复制node_modules"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("vuepress"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("theme"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("reco 文件夹\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("#")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("#")]),s._v("粘贴至"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("vuepress"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" 下并更名为theme\nDev\n├─── docs\n│   └── "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("vuepress   "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("//")]),s._v(" 配置目录\n│   │    ├── public "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("//")]),s._v(" 静态资源\n│   │    ├── theme "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("//")]),s._v(" 主题\n│   │    │   ├── components "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("//")]),s._v(" 组件\n│   │    │   ├── global"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("components "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("//")]),s._v(" 全局组件\n│   │    │   ├── layouts "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("//")]),s._v(" 布局"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("包括首页在内"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n│   │    │   ├── styles "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("//")]),s._v(" 样式\n│   │    │   ├── util "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("//")]),s._v(" 工具\n│   │    │   ├── index"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("//")]),s._v(" 入口配置\n│   │    │   ├── noopModule"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("//")]),s._v(" 依赖注入\n│   │    │   ├── package"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("json "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("//")]),s._v(" 主题依赖\n│   │    │   ├── README"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("md "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("//")]),s._v(" 主题说明\n│   │    └── config"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n│   ├── FAQ     "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("//")]),s._v(" 求索模块\n│   ├── Store   "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("//")]),s._v(" 仓库模块\n│   ├── Thought "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("//")]),s._v(" 随笔模块\n│   └── README"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("md   "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("//")]),s._v(" 博客首页\n└── package"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("json\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br")])]),e("ul",[e("li",[e("p",[s._v("运行预览")]),s._v(" "),e("p",[s._v("执行命令："),e("code",[s._v("vuepress dev docs")])]),s._v(" "),e("p",[s._v("当看到控制台输出："),e("code",[s._v("tip Apply theme located at ...")]),s._v(" 并正常启动，则表示本地环境搭建成功。")]),s._v(" "),e("p",[s._v("在浏览器地址输入："),e("code",[s._v("http://localhost:8080")]),s._v("即可看到界面：")]),s._v(" "),e("p",[e("img",{attrs:{src:"/znote/vuepress/znote.png",alt:""}})])]),s._v(" "),e("li",[e("p",[s._v("如果想直接使用 .html文件的话将 .html文件放在 .vuepress/public 目录下即可（需自己配置引用路径）。")])])]),s._v(" "),e("h2",{attrs:{id:"可能遇到的问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#可能遇到的问题"}},[s._v("#")]),s._v(" 可能遇到的问题")]),s._v(" "),e("h3",{attrs:{id:"_1-插件解析失败问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-插件解析失败问题"}},[s._v("#")]),s._v(" 1. 插件解析失败问题")]),s._v(" "),e("blockquote",[e("p",[e("strong",[e("code",[s._v("有这几个解决办法，就是无法解析node_modules依赖关系")])])])]),s._v(" "),e("ul",[e("li",[s._v("根目录下安装一下vuepress-theme-reco这个依赖")]),s._v(" "),e("li",[s._v("最直接的就是在主题目录执行一下npm install")]),s._v(" "),e("li",[s._v("或许你删除node_modules，重新安装一下依赖也有可能解决")]),s._v(" "),e("li",[s._v("如以上三步都不行的话，以这个命令"),e("code",[s._v("npm run docs:dev")]),s._v("启动项目，或者联系我")])])],1)}),[],!1,null,null,null);t.default=r.exports}}]);