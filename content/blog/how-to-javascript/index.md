---
title: 在2023年学习JavaScript
date: 2023-01-18 12:00:00
last_edited: 2023-01-18 12:00:00
---
是的，现在已经是2023年了，从The Software House给出的[前端生态报告](https://tsh.io/state-of-frontend/)中，可以看出，最近框架和工具链的变化正在放缓。最近十年整个生态发生了巨大的变化，以至于从2017年最开始我在freeCodeCamp上开始学习前端开发到现在，几乎每一年用到Web开发的时候，我都像是在学习一门全新的技术。Web生态如此复杂，使得很多人都只会在某几个框架下工作。今年对我来说又是重新学习JavaScript的一年，特地写下这篇文章来记录我的心路历程。

*那么该如何使用JavaScript呢？*

对于新手来说，如果能够直接参与一个项目，那就直接在那个项目对应的框架下工作，并仿照项目中的写法都是最好的选择。无论是create-react-app，vue-cli还是nextjs，这一类大型的框架会提供一种统一的解决方案，避免人们在无穷无尽的新问题中迷失。缺点是，整个项目的解决方案都会留在项目建立的那个年代，目前还有很多基于 JSP 或者 Rails 模板的大型项目，运行十余年之后的代码已经相当古老，除了重写之外也没有别的方法。

*但是，该怎么学习一些基础知识呢？*

无论什么时候，学习JavaScript最简单的方式都是新建一个html文件，然后编辑它，通过浏览器打开就能够得到一个网站了，可以在`style`标签中写CSS，在`script`标签中写JavaScript。用这种方式可以通过不同的标签利用Web的功能，为网页添加布局，增加一些交互，甚至可以制作一些简单的动画。具体我们可以参考。这时候只要引入著名的 BootStrap 库（通过HTML标签），就可以做出相当漂亮的网站了！

由于跨域的限制，我们有时需要一个本地服务器来打开HTML文件，这时候用一个Web 服务器就可以。

```shell
$ python -m http.server
```

这是一切的起步！历史上 JavaScript 的库往往都以单个链接提供，导出一个符号作为全局入口点，比如 [jQuery](https://jquery.com/) 的`$`，这算是最初步的模块化。但是编写脚本时在编辑器中很难进行补全，查看函数名等操作。实际上，如果采用这种开发方式，我们大部分的调试只能使用浏览器中的控制台。

*那么该怎么使用现代化的 JavaScript 库和开发方式呢？*

现代的Web开发生态基于[Node.js](https://nodejs.org/)，它是一个本地的JavaScript运行时。它附带的包管理器 [npm](https://www.npmjs.com/) 能够让我们快速安装第三方库，并管理包的版本和依赖关系，也可以在它的网站上查询库的不同版本。

我们有了一种新的方式构建网站：在Node.js项目中编辑JavaScript代码，然后把它和HTML文件打包在一起。[Webpack](https://webpack.js.org/) 是目前主流的打包工具，它可以方便而灵活地的进行扩展，但是也因为配置过于复杂而饱受诟病。Webpack的新版本有了约定大于配置的思想，不写配置文件依然能够进行基本的打包操作。

为了不至于每次编辑代码都要手动执行打包命令，我们可以通过`webpack-dev-server`在本地运行一个服务器，它会在浏览器打开一个窗口，每次本地有新的修改时，它就会自动把打包后的结果同步上去。这极大地提升了开发的效率。

通过`webpack-cli`来初始化项目也是一个不错的选择，它能够自动集成上面的工具，省去了自己写配置文件的麻烦。不过，我更喜欢 Webpack 的现代化替代品 [Vite](https://vitejs.dev/)，它专门为现代浏览器设计，使用 [esbuild](https://esbuild.github.io/) 和 [rollup.js](https://rollupjs.org/) 作为打包和构建的工具，通过提供原生 [JavaScript 模块](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) 给浏览器的方式，构建速度比 Webpack快很多。它还能为不同的项目直接生成框架代码。这应该是目前体验最好的新建项目的方式！只需使用下面的命令就能轻松新建一个项目：

```shell
$ npm create vite
```

这就是现代化前端工具链的力量！

*那么接下来需要学什么？*

- ECMAScript 6（ES6）是更现代化的 JavaScript 版本。阮一峰的 [ES6 入门教程](https://es6.ruanyifeng.com/) 无疑是这方面最好的教程。相比于之前的版本，最关键的改变还是 `Promise`、`async` 函数和 `await` 表达式的部分，它彻底改变了网页请求后端接口的方式。
- Web UI 开发框架。比如，React 是一个基于 JSX 和单向数据流的界面库，而 [Vue.js](https://vuejs.org/) 是一个基于双向绑定的 JavaScript 框架。这两个框架非常方便，以至于其生态系统中出现了大量的组件库如 [Ant Design](https://ant.design/) 和 [Element-Plus](https://element-plus.org/)，提供诸如布局工具、导航菜单、树、表单、表格、日期选择器等组件，通过组合组件就能够开发非常复杂的Web App。除此之外，还有很多对应生态下的工具，比如复杂的状态管理库和针对单页面程序的路由库等等。
- [TypeScript](https://www.typescriptlang.org/) 是基于 JavaScript 的一门静态语言，通过类型检查可以减少代码中出错的几率。现在，即使是很多 JavaScript 库也提供了类型声明，这样能够让 TypeScript 编译器在构建期间就检查到可能的错误。
- [pnpm](https://pnpm.io/) 是 npm 的替代品。由于 npm 会自动把所有的依赖都下载到项目的当前目录下，导致每个Node.js的项目都非常巨大。pnpm 采用软硬链接来帮助减少磁盘空间的浪费。

还有一些能够让开发更加规范和工程化的工具，这些往往都被集成在项目中：

- [ESLint](https://eslint.org/) 是一个用于检查 JavaScript 和 TypeScript 的代码风格检查器，它能够发现不合适的代码语法逻辑并给出改进办法。

- [Prettier](https://prettier.io/) 是一个格式化工具，它可以格式化（比如通过 VSCode 的内置格式化快捷键）大部分格式的文件。

就是这样，前端学起来并不困难。在浏览器上，我们可以通过复杂的 Web API 实现很多复杂也有趣的功能。在浏览器外也有很多功能，JavaScript 的生态非常庞大，我们可以开发 VSCode 或者 Chrome 的插件，通过 React Native 和 Electron 开发移动和桌面软件，甚至是使用 Node.js 运行后台服务。学习 JavaScript 总是有意义的。
