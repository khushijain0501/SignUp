import React from 'react'
import { useLocation } from 'react-router-dom'

function Home() {
    const location=useLocation();
    const email=location.state.email;
    const pos=email.indexOf("@");
    const username=email.substring(0,pos);
    const name=location.state.fname+" "+location.state.lname;
    const phone=location.state.phone;
    const gender=location.state.gender;
    //console.log(gender)
    const source="src\\"+ ((gender=="Male")?"man.png":(gender=="Female")?"human.png":"user.png");
    
  return (
    <div className='h-full w-full bg-gradient-to-tr from-[#FE612C] to-[#F2E03F] p-4'>
      <div className="h-screen flex flex-col justify-center items-center p-4 mt-0">
        <div className="bg-white p-10 flex flex-col justify-center items-center border rounded-md" 
           style={{ boxShadow: '5px 5px 15px -1px rgba(0, 0, 0, 0.75)'}}>
            <img src={`${source}`} className='w-32 m-4 flex justify-center items-center' />
            <p className='text-lg font-bold m-2 text-[#fc5c64]'>Username: <span className='font-normal text-[#FEBA02]'>{username}</span></p>
            <p className='text-lg font-bold m-2 text-[#fc5c64]'>Name: <span className='font-normal text-[#FEBA02]'>{name}</span></p>
            <p className='text-lg font-bold m-2 text-[#fc5c64]'>Phone number: <span className='font-normal text-[#FEBA02]'>{phone}</span></p>
            <h1 className='text-2xl font-bold m-2 text-[#fc5c64]'>Welcome {location.state.fname}!</h1>
          </div>
      </div>
    </div>
  )
}

export default Home
