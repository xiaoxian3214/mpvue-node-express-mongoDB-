var mongoose = require('../common/db')
//经纪人带看反馈
var comment = new mongoose.Schema({
 fy_id:String,
 username:String,
 context:String,
 check:Boolean 
})
comment.static.findByFyId= function(f_id,callBack){
  this.find({fy_id:f_id,check:true},callBack);
};
comment.static.findAll = function(callBack){
  this.find({},callBack);
}
var commentModel = mongoose.model('comment',comment);
module.exports = commentModel

