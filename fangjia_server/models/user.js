var mongoose = require('../common/db');
//用户数据集
var user = new mongoose.Schema({
  username:String,
  password:String,
  userPhone:String,
  userAdmin:Boolean,
  userPower:Number,
  userStop:Boolean
})
//用户查找的方法
user.statics.findAll = function(callBack){
  this.find({},callBack);
};
//使用用户名查找的方式
user.statics.findByUsername = function(name,callBack){
  this.find({username:name},callBack);
};
//登录匹配是不是拥有相同的用户名和密码并且没有处于封停状态
user.statics.findUserLogin=function(name,password,callBack){
  this.find({username:name,password:password,userStop:false},callBack);
};
//验证电话和用户名找到用户
user.statics.findUserPassword = function(name,phone,callBack){
  this.find({username:name,userPhone:phone},callBack);
};
var uesrModel = mongoose.model('user',user);
module.exports = uesrModel;
