var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var places = [
    { name: 'Home', rating: 10},
    { name: 'Grandmas House', rating: 9},
    { name: 'Japan', rating: 10},
    { name: 'Italy', rating: 9},
    { name: 'England', rating: 8},
  ];

  //Create a name
  var myname = "Brianna Schneider";

  res.render('index', {
    title: 'Favorite Places',
    places: places,
    myname: myname
  });
});

module.exports = router;
