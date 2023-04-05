import MenuIcon from "@mui/icons-material/Menu";
import CancelIcon from '@mui/icons-material/Cancel';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Box, IconButton } from '@mui/material';

const Header = () => {
   const [menuIsVisible, setMenuIsVisible] = useState(false);

   const toggleDrawer = event => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
      setMenuIsVisible(prev => !prev);
    };

   return (
      <header>
         <IconButton 
            edge="start" 
            color="inherit" 
            aria-label="open drawer" 
            onClick={toggleDrawer}
            className="menu-btn"
         >
            {
               menuIsVisible ? <CancelIcon /> : <MenuIcon />
            }
         </IconButton>
         {
            menuIsVisible && (
               <Box className="menu-wrapper">
                  <ul className="menu">
                     <li className="menu__item">
                        <NavLink to="/" className="menu__link" onClick={toggleDrawer}>Home</NavLink>
                     </li>
                     <li className="menu__item">
                        <NavLink to="/secondary" className="menu__link" onClick={toggleDrawer}>Secondary</NavLink>
                     </li>
                  </ul>
               </Box>
            )
         }
      </header>
   );
};

export default Header;