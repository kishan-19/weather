const mongoose = require('mongoose');

const weatherSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: [true, "name already exists"],
        require: true,
        trim: true,
        lowercase: [true,"plz enter cityname in lowercase"]
    },
    country:{
        type: String,
        require: true,
        trim: true,
        uppercase: [true, "plz enter country name in uppercase"]
    },
    temp:{
        type:Number,
        require:true,
        trim:true,
        min:5
    },
    weather_main:{
        type: String,
        require: true,
        trim:true,
        min:7
    },
    Date:{
        type:Date,
        default:Date.now()
    }
});

const weatherModel = new mongoose.model("status",weatherSchema);

module.exports = weatherModel;