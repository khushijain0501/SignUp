import mongoose from 'mongoose';
//const mongoose=require("mongoose");
mongoose.connect('mongodb://localhost:27017/form-login1')
.then(()=>{
    console.log("database connected")
})
.catch(()=>{
    console.log("failed");
})

const newSchema=new mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    lname:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection=mongoose.model("collection",newSchema)

export default collection;