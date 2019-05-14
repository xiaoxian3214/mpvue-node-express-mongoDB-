var express = require('express');
var router = express.Router();
var fy = require('../models/fyxxb');
var comment=require('../models/comment');

router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});
//获得所有的房源列表
router.get('/list', function (req, res, next) {
    fy.findAll(function (err, allFy) {
        res.json({status: 0, message: '获取成功', data: allFy})
    })
});

//获取相关房源的详细信息
router.post('/detail', function (req, res, next) {
    if(req.body.id) {
        fy.findById(req.body.id,function (err, getFy) {
            res.json({status: 0, message: '获取成功', data: getFy})
        })
    }else{
        res.json({status:1,message:'获取失败'})
    }
});

//获取主页房源推荐
router.post('/getIndexFy', function (req, res, next) {
    if(req.body.id) {
        fy.find({fyMainPage:true}, function (err, allFy) {
            res.json({status: 0, message: '获取成功', data:allFy})
        })
    }else{
        res.json({status:1,message:'获取失败'})
    }
});



//收藏的房源
router.post('/support', function (req, res, next) {
    if(req.body.id) {
        fy.findById(req.body.id, function (err, getFy) {
            fy.update({_id: req.body.id}, {supposeNumber: getFy.supposeNumber+1}, function (err, fyUpdate) {
                if (err) {
                    res.json({status: 1, message: "收藏错误", data: err})
                }
                res.json({status: 0, message: '收藏成功', data: fyUpdate})
            })
        })
    }else{
        res.json({status:1,message:'获取失败'})
    }
});

module.exports = router;