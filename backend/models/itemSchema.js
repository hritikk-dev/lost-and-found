import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        trim : true
    },

    title : {
        type : String,
        trim : true
    },

    description : {
        type : String,
        enum : ['Lost', 'Found'],
        default : "Lost"
    },

    category : {
        type : String,
        enum : ['Book', 'Electronic', 'Wallet', 'Other']
    },

    image : {
        type : String,
    },

    location : {
        type : String,
        required : true
    },

    date:{
        type : Date,
        required : true
    },

    additionalDetails :{
        type : String,
    },

    status :{
        type : String,
        enum : ["Pending","Complete"],
        default : "Pending"
    },

    
})