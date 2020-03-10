const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('Estamos....');
    res.render('desktop/desktop');

});


module.exports = router;