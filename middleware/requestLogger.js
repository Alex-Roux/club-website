const utils = require("../utils/utils");
const colors = require("colors");

// RequestLogger
// Logs informations about the request
const requestLogger = function(req, res, next) {

    let reqTime = new Date().getTime();
    let reqUrl = req.url, logString;
    let isResource = false;
    if(!reqUrl.includes(".")) {
        logString = "New request : " + "IP: ".info + req.ip + " ║ " + "URL: ".info + req.method + req.url;

        //const ip = ;
        //console.log(ip);
    } else {
        isResource = true;
        logString = "New request : ".grey + "IP: ".grey + req.ip + " ║ ".grey + "URL: ".grey + req.method.grey + req.url.grey;
    }
    if(utils.config.logResources || !isResource) {
        utils.log(logString, 1); // Call log function with info
    }
    next();

    res.on("finish", function() {
        reqTime = new Date().getTime() - reqTime;
        if(reqTime >= 500) {
            utils.log("Processed in ".grey + colors.green(reqTime) + " ms".grey, 1);
        }
    });
};

module.exports = requestLogger;
