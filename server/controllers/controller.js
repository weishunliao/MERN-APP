const User = require('../Models/User');
const Article = require('../Models/Article');
const Detail = require('../Models/Detail');
const Popular = require('../Models/Popular');
const Suggestion = require('../Models/Suggestion');
const passport = require('passport');
const bcrypt = require("bcrypt");

getPopulars = async (req, res) => {
    await Popular.find({}, (err, resp) => {
        if (err) {
            return res.status(400).json({success: false, error: err})
        }
        if (!resp.length) {
            return res
                .status(404)
                .json({success: false, error: `Not found`})
        }
        return res.status(200).json({success: true, data: resp})
    }).catch(err => console.log(err))
};

getDetails = async (req, res) => {
    await Detail.find({}, (err, resp) => {
        if (err) {
            return res.status(400).json({success: false, error: err})
        }
        if (!resp.length) {
            return res
                .status(404)
                .json({success: false, error: `Not found`})
        }
        return res.status(200).json({success: true, data: resp})
    }).catch(err => console.log(err))
};

getDetailsByID = async (req, res) => {
    await Detail.findOne({id: req.params.id}, (err, resp) => {
        if (err) {
            return res.status(400).json({success: false, error: err})
        }
        if (!resp) {
            return res
                .status(404)
                .json({success: false, error: `Not found`})
        }
        return res.status(200).json({success: true, data: resp})
    }).catch(err => console.log(err))
};

getArticles = async (req, res) => {
    await Article.find({}, (err, resp) => {
        if (err) {
            return res.status(400).json({success: false, error: err})
        }
        if (!resp) {
            return res
                .status(404)
                .json({success: false, error: `Not found`})
        }
        return res.status(200).json({success: true, data: resp})
    }).catch(err => console.log(err))
};


getUsers = async (req, res) => {
    await User.find({}, (err, resp) => {
        if (err) {
            return res.status(400).json({success: false, error: err})
        }
        if (!resp) {
            return res
                .status(404)
                .json({success: false, error: `User not found`})
        }
        return res.status(200).json({success: true, data: resp})
    }).catch(err => console.log(err))
};

getUserByName = async (req, res) => {
    // console.log(req.params.name);
    await User.findOne({name: req.params.name}, (err, resp) => {
        if (err) {
            return res.status(400).json({success: false, error: err})
        }
        if (!resp) {
            return res
                .status(404)
                .json({success: false, error: `User not found`})
        }
        return res.status(200).json({success: true, data: resp})
    }).catch(err => console.log(err))
};


getSuggestions = async (req, res) => {
    await Suggestion.find({}, (err, resp) => {
        if (err) {
            return res.status(400).json({success: false, error: err})
        }
        if (!resp) {
            return res
                .status(404)
                .json({success: false, error: `Not found`})
        }
        return res.status(200).json({success: true, data: resp})
    }).catch(err => console.log(err))
};


createUser = (req, res) => {
    const body = req.body;
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a username and password',
        })
    }

    const newUser = new User(body);

    if (!newUser) {
        return res.status(400).json({success: false, error: "error"})
    }

    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(newUser.password, salt, function (err, hash) {
            newUser.password = hash;
            newUser.save().then(() => {
                return res.status(201).json({
                    success: true,
                    id: newUser._id,
                    message: 'User created!',
                })
            }).catch(error => {
                return res.status(400).json({
                    error:error,
                    message: 'User not created!',
                })
            });
        })
    })
};



auth = (req, res) => {
    passport.authenticate('local', function (err, user, info) {
        if (err) {
            return res.json(info);
        }
        if (!user) {
            return res.json({"status": 401, info});
        }
        req.logIn(user, function (err) {
            if (err) {
                return res.json({"status": 401, info});
            }
            return res.json({"status": 200, user});
        });
    })(req, res);
};

module.exports = {auth, getSuggestions, getUsers, getUserByName, getArticles, getDetails, getDetailsByID, getPopulars, createUser};

