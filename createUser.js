/**
 * Created by segey on 01.07.14.
 */

var User = require('./models/user').User;

var user = new User({
    username: "tester",
    password: '123'
})

user.save(function(err, user, affected) {
    if (err) {throw err;}
})