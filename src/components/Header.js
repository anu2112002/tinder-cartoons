import React from 'react'
import PersonPinIcon from '@mui/icons-material/PersonPin';
import ChatIcon from '@mui/icons-material/Chat';
import './Header.css';
import { IconButton } from '@mui/material';

function Header() {
  return (
    <div className="tinder-header">
    <IconButton className="header-icons" fontSize='large'>
      <PersonPinIcon fontSize='large'/>
    </IconButton>


      <img src="https://www.logo.wine/a/logo/Tinder_(app)/Tinder_(app)-Flame-Logo.wine.svg" alt="keep" />

      <IconButton className="header-icons" fontSize='large'>
      <ChatIcon className="header-icons" fontSize='large'/>
      </IconButton>
    
    </div>
  )
}

export default Header
