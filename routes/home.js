const express = require('express');
const router = express.Router();
const productos = require('../models/inicial')

router.get('/', async (req, res) => 
{
    res.render('index')
    //const produc = await productos.find()
    //console.log(produc)
})

router.post('/add', async (req, res) =>{
    const producto = new productos(req.body);
    await producto.save();
    res.send('recived')
})

module.exports = router; 
