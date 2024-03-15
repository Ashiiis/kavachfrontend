import React, { useState } from 'react'
import './Login.css';
import {TextField, Button} from '@mui/material'
function Login() {
    const BASE_URL ="http://localhost:8000";
    const [formData,setFormData ]=useState({
        "email": "",
        "password": ""
    });
    const handleFormSubmit = () => {
        fetch(`${BASE_URL}/login/`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)

        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const token = data.token;
            document.cookie = `token=${token}; path=/`

        })
        .catch(error=>{
            console.log(error);

        })
    }
  return (
    <>
    <div className='containor text-center'>

        <div className='mt-3'>
            <TextField id="email" type='email' label="email" variant="outlined" onChange={e => setFormData({...formData, email: e.target.value})} />
            {/* {console.log(formData)} */}
        </div> 
        <div className='mt-3'>
            <TextField id="password" label="password" variant="outlined" onChange={e => setFormData({...formData, password: e.target.value})}/>
        </div>
        <div className='mt-3'>
            <Button variant ="contained"onClick={handleFormSubmit}>Login</Button>
        </div> 
    </div>   
    </> 
  )
}
export default Login