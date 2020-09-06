# 01
### 开发环境的搭建
- 可以用webpack或Babel把es6编译成es5（原因是很多浏览器暂时都不支持es6语法）
- 在笔记中，转换后的es5代码在dist文件夹中,因此在index.html中要引入的js文件不是index.js，而是./dist/index.js(转换成es5后的js文件)
### 初始化
- 终端输入,会生成一些配置文件
   `npm init -y` 
- 全局安装bable命令行工具
   `npm install -g babel-cli`
- 安装一个es5的什么鬼工具,同时再本地安装下babel-cli（？）
   `npm install --save-dev babel-preset-es2015 babel-cli`
- 再根目录下新建一个.babelrc 文件,在里面写配置
- 命令行中执行打包（或者说是转换）
   `babel index.js -o dist/index.js`
   意思是说 将 index.js 输出通过babel输出到 dist/index.js
   此是会在dist文件夹中生成es5语法的js文件index.js
   ```
   "use strict";

   var a = 1;
   console.log(a);
   ```
- 但是每次都输入这么长一串打包好麻烦，所以可以在package.json中修改script中的配置
   ```
      "scripts": {
            "build": "babel index.js -o dist/index.js"
      },
   ```
   在此之后每次打包只要`npm run build` 即可

### let
- 用法和var类似，但let只在自己的的代码内有效
- 存在缓存死区，因此只能在声明之后用。
- 不可重复声明
### const
- 声明一个只读的常量，一旦声明，常量的值就不能改变。试图去改变的话就会报错。只声明，不赋值也会报错。
- 存在缓存死区，因此只能在声明之后用。
- 不可重复声明
- const实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址所保存的数据不得改动。对于简单类型的数据（数值、字符串、布尔值），值就保存在变量指向的那个内存地址，因此等同于常量。但对于复合类型的数据（主要是对象和数组），变量指向的内存地址，保存的只是一个指向实际数据的指针，const只能保证这个指针是固定的（即总是指向另一个固定的地址），至于它指向的数据结构是不是可变的，就完全不能控制了。因此，将一个对象声明为常量必须非常小心。