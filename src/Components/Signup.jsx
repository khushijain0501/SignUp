import { useState } from "react"
import React from 'react'
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"


function Signup() {
    const history=useNavigate();
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    const [input,setInput]=useState({
        fname:"",
        lname:"",
        phone:"",
        gender:"",
        email:"",
        password:"",
        confirmPass:""
    })
    
    const onInputChange=(e)=>{
        const {name,value}=e.target;
        setInput({...input,[name]:value});
        console.log(input);
    }

    const onSubmit= async (e)=>{
        e.preventDefault();
        try{
            await axios.post("http://localhost:8000/Signup",{
                input
            })
            .then(res=>{
                console.log(res.data)
                if(res.data=="Exist"){
                    alert("User already exists")
                    //history("/home",{state:{id:email}})
                }
                else if(res.data=="Password mismatch")
                alert("Passwords do not match")

                else if(res.data=="Does not exist"){
                    //history("/home",{state:{id:input.email}})
                    history("/",{state:{}});

                }
            })
            .catch(e=>{
                alert("Wrong details")
                console.log(e);
            })
        }
        catch(e){
            console.log(e);
        }

    }
  return (
    <div className='h-full w-full bg-gradient-to-tr from-blue-900 to-cyan-400 p-8 '>
        <div className="h-screen flex flex-col justify-center items-center p-4 rounded-lg">
           <form className="bg-white p-10 flex flex-col justify-center border rounded-md" 
           style={{ boxShadow: '5px 5px 15px -1px rgba(0, 0, 0, 0.75)'}} action='POST' onSubmit={onSubmit}>
            <p className='flex text-3xl m-2 mb-6 font-bold text-blue-800 justify-center items-center '>Signup</p>
            <div className="flex justify-center items-center w-full">
            <input 
            type="text"
            className="m-2 w-full p-1 h-8 rounded border border-gray"
            placeholder="First Name"
            required
            name="fname"
            value={input.fname}
            onChange={onInputChange}/> 
            <input 
            type="text"
            className="m-2 w-full p-1 h-8 rounded border border-gray"
            placeholder="Last Name"
            required
            name="lname"
            value={input.lname}
            onChange={onInputChange}/>
            </div>
            <div className="flex justify-center items-center w-full">
            <input 
            type="phone"
            className="m-2 w-full p-1 h-8 rounded border border-gray"
            placeholder="Mobile Number"
            required
            name="phone"
            value={input.phone}
            onChange={onInputChange}
            //onChange={(e)=>setEmail(e.target.value)}
            />
            <select  
            name="gender"
            onChange={onInputChange} 
            required
            className="m-2 w-full p-1 h-8 rounded border border-gray">
                <option value="--Gender--">--Gender--</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
            </select>
            
            </div>
            <div className="flex justify-center items-center w-full">
            <input 
            type="email"
            className="m-2 w-full p-1 h-8 rounded border border-gray"
            placeholder="Email"
            required
            name="email"
            value={input.email}
            onChange={onInputChange}
            //onChange={(e)=>setEmail(e.target.value)}
            />
            
            </div>
            <div className="flex justify-center items-center w-full">
            <input 
            type="password"
            className="m-2 w-full p-1 h-8 rounded border border-gray"
            placeholder="Password"
            required
            name="password"
            value={input.password}
            onChange={onInputChange}
            //onChange={(e)=>setPassword(e.target.value)}
            />
            </div>
            <div className="flex justify-center items-center w-full">
            <input 
            type="password"
            className="m-2 w-full p-1 h-8 rounded border border-gray"
            placeholder="Confirm Password"
            required
            name="confirmPass"
            value={input.confirmPass}
            onChange={onInputChange}
            //onChange={(e)=>setPassword(e.target.value)}
            />
            </div>
            <div className="flex justify-center items-center w-full">
                <button className="flex justify-center items-center bg-blue-800 m-8  mb-2 w-40 p-5 h-8 rounded text-white text-sm cursor-pointer" >
                <Link to="/" >Sign in</Link></button>
            </div>
           
        </form>
        </div>
        </div>

  )
}

export default Signup
