import axios from 'axios';
import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'

function Login() {
    const history=useNavigate();
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    

    async function onSubmit (e){
        e.preventDefault();
        try{
            await axios.post("http://localhost:8000/",{
                email,password
            })
            .then(res=>{
                if(res.data.msg=="Exist"){
                    history("/home",{state:{fname:res.data.fname,lname:res.data.lname,phone:res.data.phone,gender:res.data.gender,email:res.data.email}})
                    //history("/home",{state:{fname:"Khushi",lname:"Jain",phone:8986606193,gender:"Female",email:"khushijain2112@gmail.com"}})

                }
                else if(res.data.msg=="Does not exist"){
                    alert("User has not Signed up")
                }
                else if(res.data.msg=="Incorrect password"){
                    alert("Incorrect Password")

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
    <div className='h-full w-full bg-gradient-to-tr from-blue-900 to-cyan-400 p-4'>
        <div className="h-screen flex flex-col justify-center items-center p-4 mt-0">
           <form className="bg-white p-10 flex flex-col justify-center border rounded-md" 
           style={{ boxShadow: '5px 5px 15px -1px rgba(0, 0, 0, 0.75)'}} action='POST' onSubmit={onSubmit}>
            <p className='flex text-3xl m-2 font-bold text-blue-800 justify-center items-center '>Login</p>
           <div className="flex justify-center items-center">
            <input 
            type="email"
            className="m-2 w-full p-1 h-8 rounded border border-gray"
            placeholder="Email"
            name="email"
            onChange={(e)=>setEmail(e.target.value)}
            />
            
            </div>
            <div className="flex justify-center items-center">
            <input 
            type="password"
            className="m-2 w-full p-1 h-8 rounded border border-gray"
            placeholder="Password"
            name="password"
            onChange={(e)=>setPassword(e.target.value)}
            />
            
            </div>
            <div className="ml-3 underline text-xs">
                Don't have an account? 
                <Link to="/Signup" >Sign Up</Link>
            </div>
            <div >
                <button className="flex justify-center items-center bg-blue-800 m-8 mb-2 w-40 p-5 h-8 rounded text-white text-sm cursor-pointer" onClick={onSubmit}>Log in</button>
            </div>
           
        </form>
        </div>
        </div>

  )
  }

export default Login
