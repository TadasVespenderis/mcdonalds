const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema= new Schema({
    name: {
        type: String,
        require: true
    },
    price:{
        type: Number,
        require: true
    },
    category:{
        type: String,
        required: true
    },
    img:{
        type: String,
        required: 'you must upload item image'
    }
});

module.exports = mongoose.model('items', itemSchema);