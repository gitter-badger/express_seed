/**
 * Created by segey on 25.06.14.
 */

var mongoose = require('mongoose');
//var config = require('config');

mongoose.connect("mongodb://localhost/pamm");

module.exports = mongoose;
