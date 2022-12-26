import React from 'react'
import './Footer.css';
import ReplayIcon from '@mui/icons-material/Replay';
import FavoriteIcon from '@mui/icons-material/Favorite';  
import StarRateIcon from '@mui/icons-material/StarRate';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';


function Footer() {
  return (
    <div className="bottom-buttons"> 
    <IconButton className="replay">
      <ReplayIcon fontSize='large' />
    </IconButton>

    <IconButton className="close">
      <CloseIcon fontSize='large'/>
    </IconButton>

    <IconButton className="favorite">
      <FavoriteIcon fontSize='large'/>
    </IconButton>

    <IconButton className="starrate">
      <StarRateIcon fontSize='large'/>
    </IconButton>

    <IconButton className="flashon">
      <FlashOnIcon fontSize='large'/>
    </IconButton>
      
    </div>
  )
}

export default Footer
