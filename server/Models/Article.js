const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
    id: Number,
    subtitle: String,
    title: String,
    paragraph: String
});

module.exports = mongoose.model('article', ArticleSchema);