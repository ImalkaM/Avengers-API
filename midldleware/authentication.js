function authenticate(req, res, next){

    console.log("custom midllware 01 executing");
    next();
   
}

module.exports = authenticate