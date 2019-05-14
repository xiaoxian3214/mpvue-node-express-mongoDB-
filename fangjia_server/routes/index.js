var express = require('express');
var router = express.Router();
var fyxxb = require('../models/fyxxb');
var user = require('./users');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
//显示主页的推荐大图等
router.get('/showIndex', function (req, res, next) {
  recommend.findAll(function (err, getRecommend) {
      res.json({status: 0, message: "获取推荐", data: getRecommend})
  })
});
//显示所有的排行榜，也就是对于电影字段index的样式
router.get('/showRanking', function (req, res, next) {
  fyxxb.find({fyMainPage: true}, function (err, getFys) {
      res.json({status: 0, message: "获取主页", data: getFys})
  })
});
//显示文章列表
// router.get('/showArticle', function (req, res, next) {
//   article.findAll(function (err, getArticles) {
//       res.json({status: 0, message: "获取主页", data: getArticles})
//   })
// });

//显示用户自己个人信息的内容
router.post('/showUser', function (req, res, next) {
  if (!req.body.user_id) {
      res.json({status: 1, message: "用户状态出错"})
  }
  user.findById(req.body.user_id,function (err, getUser) {
      res.json({status: 0, message: "获取成功", data: {
          user_id:getUser._id,
          username:getUser.username,
          userPhone:getUser.userPhone,
          userStop:getUser.userStop
      }})
  })
});

module.exports = router;