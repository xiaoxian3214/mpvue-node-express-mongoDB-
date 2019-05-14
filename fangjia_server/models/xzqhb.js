var mongoose = require('../common/db')
var xzqhb = new mongoose.Schema({
  dqmc:String,
  dqhm:String,
  qxmc:String,
  qxbm:String,
  jdmc:String,
  jdbm:String
})
xzqhb.statics.findById = function(id,callBack){
this.findOne({_id:id},callBack);
}
fyfz.statics.findAll = function(callBack){
  this.find({},callBack);
};
var xzqhb = mongoose.model('xzqhb',xzqhb);
module.exports = xzqhbModel;