function emailjob (req, res, next) {
    console.log("Email sending Middleware : Executing ..");
    next();
}

module.exports = emailjob