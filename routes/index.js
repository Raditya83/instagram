var express = require('express');
var router = express.Router();
var userModel=require("./users")

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', );
});

router.post('/login', function(req, res, next) {
  userModel.create({
    username:req.body.username,
    password:req.body.password

})
.then(function(val){
      res.redirect("/");
})
});

module.exports = router;
