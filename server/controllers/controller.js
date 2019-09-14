const User = require('../Models/User');
const Article = require('../Models/Article');
const Detail = require('../Models/Detail');
const Popular = require('../Models/Popular');
const Suggestion = require('../Models/Suggestion');

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
    await Detail.findOne({id:req.params.id}, (err, resp) => {
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
module.exports = {getSuggestions, getUsers, getUserByName, getArticles, getDetails, getDetailsByID,getPopulars};

