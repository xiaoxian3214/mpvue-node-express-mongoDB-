var mongoose = require('mongoose');
var url = 'mongodb://localhost/test'
mongoose.connect(url)
module.exports = mongoose;