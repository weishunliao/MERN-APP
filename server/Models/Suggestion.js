const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SuggestionSchema = new Schema({
    success: Boolean,
    list: Array,
});

module.exports = mongoose.model('suggestion', SuggestionSchema);