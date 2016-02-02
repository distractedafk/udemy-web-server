var middleware = {
    requireAuthentication: function (req, res, next) {
        console.log('Private route hit');
        next();
    },
    logger: function (req, res, next)
    {
        var today = new Date();
        console.log('Request: ' + today.toString() + ' ' + req.method + ' ' + req.originalUrl);
        next();
    }
};


module.exports = middleware;