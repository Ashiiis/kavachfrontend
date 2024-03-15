import React, { useState } from 'react'
import './Register.css';
import { TextField, Button } from '@mui/material'
export default function Register(){
    const BASE_URL ="http://localhost:8000/";
    // const BASE_URL ="https://authint-api.vercel.app/"
    const [formData,setFormData ]=useState({
        "email": "",
        "first_name": "",
        "last_name": "",
        "password": ""
    });
    const handleFormSubmit = () => {
        fetch(`${BASE_URL}register/`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)

        })
        .then(response => response.json())
        .then(data => {
            console.log(data);

        })
        .catch(error=>{
            console.log(error);

        })
    }
  return (
    <div className='containor text-center'>
        <div className='mt-3'>
            <TextField id="email" type='email' label="email" variant="outlined" onChange={e => setFormData({...formData, email: e.target.value})} />
        </div>  
        <div className='mt-3'>
            <TextField id="first_name" type='text' label="first_name" variant="outlined" onChange={e => setFormData({...formData, first_name: e.target.value})}/>
        </div> 
        <div className='mt-3'>
            <TextField id="last_name" label="last_name" variant="outlined" onChange={e => setFormData({...formData, last_name: e.target.value})}/>
        </div>  
        <div className='mt-3'>
            <TextField id="password" label="password" variant="outlined" onChange={e => setFormData({...formData, password: e.target.value})}/>
        </div>
        <div className='mt-3'>
            <Button variant ="contained"onClick={handleFormSubmit}>Save</Button>
        </div>
        </div>

  )
}
