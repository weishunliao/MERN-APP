const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../Models/User');

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    done(null, user);
});

passport.use(new LocalStrategy(
    function(username, password, callback) {
        User.findOne({ username: username }, function(err, user) {
            if (err) { return callback(err); }
            if (!user) {
                return callback(null, false, { message: 'Incorrect username.' });
            }
            if (!user.validPassword(password, user.password)) {
                return callback(null, false, { message: 'Incorrect password.' });
            }
            return callback(null, user);
        });
    }
));