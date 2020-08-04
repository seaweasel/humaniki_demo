const express = require('express');
const router = new express.Router();

router.get('', (req, resp) =>{
    resp.render('index.hbs');
});

router.get('/jumbotron', (req, resp) =>{
    resp.render('jumbotron.hbs');
});

module.exports = router;
