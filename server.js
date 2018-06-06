const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const publicRoutes = require ('./routes/publicRoutes');
const adminRoutes = require ('./routes/adminRoutes');

const mongoose = require('mongoose');

//promise integravimas i mongoose
mongoose.Promise = global.Promise;

//prisijungimas
mongoose.connect('mongodb://admin:admin123@ds033956.mlab.com:33956/mcdonalds');
mongoose.connection
    .once('open', ()=>console.log('connected to DB'))
    .on ('error', (e)=>console.log(e));

const port = process.env.PORT || 9000;

app.use(express.static(__dirname+'/public'));
app.use(express.static(__dirname+'/client/build'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
//public routes naudojimas
app.use("/", publicRoutes);
app.use("/", adminRoutes);

if(process.env.NODE_ENV==='production'){
    app.get('/*', (req, res)=>{
        res.sendFile(__dirname+'/client/build/index.html')
    })
}

//is cia iskirpome publicRoutes ir perkelem i atskira faila. Tada ta faila importuojame

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
});













