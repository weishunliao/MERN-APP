var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DetailSchema = new Schema({
    id: Number,
    post:String,
    name:String,
    title:String,
    image:String
})

module.exports = mongoose.model('detail', DetailSchema);