module.exports = app => {
    const user = require('../controller/controllers')
    var router = require("express").Router();
    //Retreive User
    router.get('/login', user.LogIn)
    router.get('/getallusers', user.findAll)
    router.post('/updateuser', user.update)
    app.use('/api', router);
}