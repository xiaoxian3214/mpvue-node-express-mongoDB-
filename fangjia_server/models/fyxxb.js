var mongoose = require('../common/db')
var fy = new mongoose.Schema({
    url: String,
    location:String,
    room_shape:String,
    area:String,
    price:String,
    build_time: String,
    average_price: String,
    floor: String,
})
fy.statics.findById = function(id,callBack){
this.findOne({_id:id},callBack);
}
fy.statics.findAll = function(callBack){
  this.find({},callBack);
};
var fyModel = mongoose.model('fyxxb',fy);
module.exports = fyModel;