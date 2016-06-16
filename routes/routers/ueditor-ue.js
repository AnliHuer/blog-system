var express = require('express');
var router = express.Router();
var ueditor = require('ueditor');
var path = require('path');

router.use("/", ueditor(path.join(__dirname, 'public'), function (req, res, next) {
    if (req.query.action === 'uploadimage') {
        var foo = req.ueditor;

        var imgname = req.ueditor.filename;

        var img_url = '/images/ueditor/';
        res.ue_up(img_url);
    } else if (req.query.action === 'listimage') {
        var dir_url = '/images/ueditor/';
        res.ue_list(dir_url);
    } else {
        res.setHeader('Content-Type', 'application/json');
        res.redirect('/ueditor/nodejs/config.json');
    }
}));

module.exports = router;
