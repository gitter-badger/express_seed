/**
 * Created by segey on 25.06.14.
 */

var mongoose = require('../libs/mongoose'),
    Schema = mongoose.Schema;

var schema = new Schema({
    balance: {type: Number},
    group: {type: String},
    userId: {type: String}
});

exports.Count = mongoose.model('Count', schema);