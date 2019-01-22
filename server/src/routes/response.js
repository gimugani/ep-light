var express = require('express');
var router = express.Router({mergeParams:true});
var ResponseController = require('../controller/ResponseController');

router.get('/', ResponseController.index);
router.post('/', ResponseController.post);

module.exports = router;