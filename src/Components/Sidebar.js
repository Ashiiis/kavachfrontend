import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { LinearProgress, Box, List } from '@mui/material';
import UserItem from './UserItem';

export default function Sidebar() {
  const BASE_URL ="http://localhost:8000";
  const [userList, setuserlist] = useState([])
  const [userLoader, setuserloader] = useState(true)
  const getAuthTokenFromCookie =() =>{
    const cookies = document.cookie.split(';')
    for (const cookie in cookies){
      const [name, value ]= cookie.trim().split("=");
      if(name === "token"){
        return value
      }
    }
    return null
  }
  useEffect(()=>{
    const authToken = getAuthTokenFromCookie()
    if(authToken){
      axios.get(`${BASE_URL}/api/users`, {
        headers:{
          Authorization: `Bearer ${authToken}`
        }
      }).then(response =>{
        setuserlist(response.data)
        setuserloader(false)
        console.log(userList);
      }).catch(error => {
        console.log("error making Api", error)
      })
    }
  },)
  return (
    <div>
      <div className='sidebar'></div>
  
      {userLoader ? (
        <Box sx={{ width: '100%' }}>
          <LinearProgress />
        </Box>
      ) : (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          {userList.map((user, index) => (
            <UserItem
              key={index}
              email={user.email}
              name={`${user.first_name} ${user.last_name}`}
              id={user.id}
            ></UserItem>
          ))}
        </List>
      )}
      </div>
      );
      };