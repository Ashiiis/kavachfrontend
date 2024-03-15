import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@mui/material'
import React from 'react'

export default function UserItem(props) {
  return (
    <ListItem>
        <ListItemAvatar>
            <Avatar>

            </Avatar>
        </ListItemAvatar>
        <ListItemText primary={props.name} secondary={props.email}></ListItemText>
    </ListItem>
  )
}
