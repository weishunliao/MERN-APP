const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {type:String, required: true},
    password: String,
});

UserSchema.methods.validPassword = (password,hash) => {
    return bcrypt.compareSync(password, hash);
};


module.exports = mongoose.model('user', UserSchema);