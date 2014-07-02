var User = require('../models/user').User;
var HttpError = require('../error').HttpError,
    ObjectID = require('mongodb').ObjectID;


module.exports = function(app) {

    app.get('/count', function(req, res) {
        var count = new Count({
            balance: 200,
            group: 'sadlkjfas;df'
        })
        count.save(function(err){
            if (err) {
                console.log(err);
            }
        })

        res.send('OK');
    })

    app.get('/users', function(req, res, next) {
        User.find({}, function(err, users) {
            if (err) next(err);
            res.json(users);
        })
    })

    app.get('/users/:id', function(req, res, next) {

        var userNotFoundError = new HttpError(404, 'user not found');
        try {
            var id = new ObjectID(req.params.id)
        }
        catch (e){
            return next(userNotFoundError);
        }


        User.findById(req.params.id, function(err, user) {
            if (err) return next(err);
            if(!user) return next(userNotFoundError);
            res.json(user);
        })
    })
}

