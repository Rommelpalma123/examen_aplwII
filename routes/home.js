const express = require('express');
const router = express.Router();
const productos = require('../models/inicial')

router.get('/',async (req, res) => 
{
    const product = await productos.find()
    res.render('index', { product, producto:('encontrado')});
});


router.post('/add',async  (req, res) =>{
    const producto = await new productos(req.body);
    producto.save();
    console.log(new productos(req.body));
    console.log(req.body)
    res.redirect('/')
})

module.exports = router; 
