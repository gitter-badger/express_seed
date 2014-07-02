/**
 * Created by segey on 25.06.14.
 */
var express = require('express'),
    http = require('http'),
    path = require('path'),
    HttpError = require('./error').HttpError,
    Count = require('./models/count.js').Count,
//    errorhandler = require('errorhandler')


    app = express();

//var app = express();
//app.use(express.bodyParser());
//app.use(app.router);
//if (process.env.NODE_ENV === 'development') {
//    app.use(errorhandler())
//}

app.use(require('./middleware/sendHttpError'));

routes = require('./routes')(app);

app.use(function(err, req, res, next) {
    if (typeof err == 'number') {
        err = new HttpError(err);
    }

    if (err instanceof HttpError) {
        res.sendHttpError(err);
    }else{
        res.send('some err');
    }

})


//
//
////    if (typeof err == 'number') { // next(404);
////        err = new HttpError(err);
////    }
//
//
////    if (err instanceof HttpError) {console.dir('------');
////        res.sendHttpError(err);
////        res.send('error');
////        res.sendHttpError(err);
////    } else {
////        if (app.get('env') == 'development') {
////            errorhandler()(err, req, res, next);
////        } else {
////            log.error(err);
////            err = new HttpError(500);
////            res.send('error');
////            res.sendHttpError(err);
////        }
////    }
//
//});

app.listen(3000);
console.log('Express app started on port 3000');