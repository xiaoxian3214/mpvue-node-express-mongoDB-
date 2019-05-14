# mpvue-node-express-mongoDB-

首先，我们需要安装mpvue框架库。由于本项目所有的安装方式都是基于npm模块化安装。且npm是基于node.js的包管理工具，因此，在开发项目前，我们首先需要安装node.js。安装好之后须打开命令行进行测试，如下所示：
C:\Users\xx>node --version
v10.14.1
然后测试npm包管理工具是否安装：如下所示：
C:\Users\xx>npm -v
6.4.1
通过以上测试，证明我们已经安装好了npm包管理工具，然后我们需要从npm包上下载mpvue，需要用到vue-cli脚手架工具，因此我们需要在命令行中输入：
npm install –global vue-cli
并以管理员身份运行。
最后就可以通过npm创建本项目需要的mpvue框架，我们需要在命令行中输入以下内容：
vue init mpvue/mpvue-quickstart mp-project
通过以上步骤，通过vue来开发小程序的前提步骤就全部实现了。然而，开发过程中我们还需要用到微信开发者工具来查看我们开发的过程内容。因此我们需要安装微信开发者工具，并且填写自己的appid（appid通过微信小程序项目开发注册后查看）。每当我们新增页面时，都需要通过npm start 进行重新编译，才可以在微信小程序端进行查看。
安装相关的依赖包后。到mpvue-study目录下输入npm start 重新创建dist文件就可以运行了
后端需要安装express框架，安装supervisor工具到fangjia_server 目录下输入supervisor bin/www运行后端，同时我们需要下载mongoDB数据库进行后台的数据存储。
项目小程序相关效果图：
