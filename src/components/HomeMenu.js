import React from 'react';
import { Menu, MenuItem, Button } from '@mui/material';
import {FaBars} from 'react-icons/fa'
import App from '../App';

import {Button as Button2} from 'react-native-web'



function HomeMenu({navigation}) {
 
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  function handleNavAbout  ()  {
   
    
    navigation.navigate('About')
    handleClose()
  
  };
  function handleNavHome  ()  {
   
    
    navigation.navigate('Home')
    handleClose()
  
  };
  function handleNavGallery ()  {
   
    
    navigation.navigate('Gallery')
    handleClose()
  
  };


  
  
 

  return (
    <div>
    
      <Button onClick={handleClick}><FaBars style={{color:'white',fontSize:23,marginTop:25,marginRight:40}}/></Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      > 
        
       
        <MenuItem onClick={handleNavHome}>Home</MenuItem>
        <MenuItem onClick={handleNavAbout} >About</MenuItem>
        <MenuItem onClick={handleNavGallery}>Gallery</MenuItem>
        
     
      </Menu>
    </div>
  );
}

export default HomeMenu;
