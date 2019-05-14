var mongoose = require('../common/db');

var recommend = new mongoose.Schema({
    recommendImg:String,
    recommendSrc:String,
    recommendTitle:String
})
recommend.statics.findByIndexId = function(f_id,callBack){
    this.find({findByIndexId:f_id},callBack);
};
recommend.statics.findAll = function(callBack){
    this.find({},callBack);
};
var recommendModel = mongoose.model('recommend',recommend);

module.exports =recommendModel