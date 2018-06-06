const express = require ('express');
const router = express.Router();
const categories = require('../data/categories');
const menu = require ('../data/menu');
const Item = require('../models/itemModel');
const fs = require('fs');

router.get('/',(req, res)=>{
    res.send('project is under construction')
});
router.get('/api/welcome', (req, res)=>{
    res.json({
        message: 'Welcome!',
        url:'/img/categories/mc.png'
    })
});
router.get('/api/categories', (req, res)=>{
    res.json({categories})
});

router.get('/api/menu', async (req, res)=>{
    try{
        const menu = await Item.find({});
        res.send({menu:menu})
        //uzklausa i DB
        // res.json({menu})
    }catch (err){
        console.log(err)
    }
});

router.post('/api/orders', (req, res)=>{
    console.log(req.body);
    const {name, address, phone, orders} = req.body;
    const ordersString = orders.reduce((total, item)=>{
        return total+ `${item.name} ${item.price}\n`
    },'');
    const order = `
   ====================\n
   User: ${name}\n 
   address: ${address}\n 
   phone: ${phone}\n 
   orders: ${ordersString}`;
    fs.appendFile('order.txt', order, (err)=>{
        if(err) console.log(err);
    });
    res.send('ok')
});

module.exports = router;