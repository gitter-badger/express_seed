/**
 * Created by segey on 01.07.14.
 */

var path = require('path');
var util = require('util');
var http = require('http');

// ошибки при выдаче посетителю

function HttpError(status, message) {
    Error.apply(this, arguments);
    Error.captureStackTrace(this, HttpError);

    this.status = status;
    this.message = message || http.STATUS_CODES[status] || "unknown error";
}

util.inherits(HttpError, Error);

HttpError.prototype.name = 'HttpError';

exports.HttpError = HttpError;