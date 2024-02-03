//import express from 'express'
//import collection from './mongo.js'
//import cors from 'cors'
//import express from 'express'

import express, { json, urlencoded } from "express"
import collection from "./mongo.js"
import cors from "cors"
import bodyParser from "body-parser"
const app=express()
app.use(bodyParser.json())
app.use(json())
app.use(urlencoded({extended:true}))
app.use(cors())

app.get("/",cors(),(req,res)=>{

})

app.post("/",async(req,res)=>{
    const email=req.body.email;
    const password=req.body.password;
    //console.log(`Email ${email}`);
    //const {email,password}=req.body;
    try{
        const checkEmail=await collection.findOne({email:email})
        const checkPassword=await collection.findOne({password:password});
        //console.log(checkEmail.email);
        //console.log(checkEmail);
        if(checkEmail.email==email){
            if(checkEmail.password==password)
            return res.json({
              fname:checkEmail.fname,
              lname:checkEmail.lname,
              phone:checkEmail.phone,
              gender:checkEmail.gender,
              email:checkEmail.email,
              msg:"Exist"  
            })
            else
            return res.json({
                fname:checkEmail.fname,
                lname:checkEmail.lname,
                phone:checkEmail.phone,
                gender:checkEmail.gender,
                email:checkEmail.email,
                msg:"Incorrect password"  
              })
            
            //alert("Exist")
            
        }
        else{
            return res.json({
                fname:checkEmail.fname,
                lname:checkEmail.lname,
                phone:checkEmail.phone,
                gender:checkEmail.gender,
                email:checkEmail.email,
                msg:"Does not exist"  
              })
            //alert("No exist")
            
        }
    }
    catch(e){
        return res.json("Does not exist")
    }
    
})

app.post("/Signup",async(req,res)=>{
    const fname=req.body.input.fname;
    const lname=req.body.input.lname;
    const phone=req.body.input.phone;
    const gender=req.body.input.gender;
    const email=req.body.input.email;
    const password=req.body.input.password;
    const confirmPass=req.body.input.confirmPass;
    //const {email,password}=req.body;

    const data={
        fname:fname,
        lname:lname,
        phone:phone,
        gender:gender,
        email:email,
        password:password
    }
    console.log(JSON.stringify(data));
    try{
        const checkEmail=await collection.findOne({email:email})
        const checkPassword=await collection.findOne({password:password});
        if(checkEmail){
            
            return res.json("Exist")
            
            //alert("Exist")
            
        }
        else{
            if(password!==confirmPass){
            return res.json("Password mismatch")
            }
            else{
            await collection.insertMany([data])
            return res.json("Does not exist")
            }
        }
    }
    catch(e){
        return res.json("Does not exist")
    }
    
})

app.listen(8000,()=>
console.log("server connected"))