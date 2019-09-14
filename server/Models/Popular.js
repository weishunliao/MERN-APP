const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PopularSchema = new Schema({
    id: Number,
    title: String,
    subtitle: String,
    day: String
});

module.exports = mongoose.model('popular', PopularSchema);