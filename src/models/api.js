const mongoose =  require("mongoose");
const validator = require("validator");

const CreateDoc = new mongoose.Schema({

    Quotes:{
        type:String,
        required: [true,'image is require'],
        unique: [true, 'image will be unique']
    }
})

const Api = new mongoose.model("Api",CreateDoc);
module.exports = Api;