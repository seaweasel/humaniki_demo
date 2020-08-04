const express = require('express');
const router = new express.Router();

router.get('', (req, resp) =>{
    resp.render('index.hbs');
});

router.get('/jumbotron', (req, resp) =>{
    resp.render('jumbotron.hbs');
});

router.get('/card', (req, resp) =>{
    resp.render('card.hbs')
});

router.get('/newby', (req, resp) =>{
    resp.send("HEY OK");
});


module.exports = router;
