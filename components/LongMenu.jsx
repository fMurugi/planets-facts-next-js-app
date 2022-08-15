import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import styles from '../styles/LongMenu.module.css'

const options = [
  'Neptune',
  'Earth',
  'Mercury',
  'Mars',
  'Venus',
  'Pluto',
  'Jupiter',
  'Saturn',
  'Uranus',
  
];

const ITEM_HEIGHT = 48;

function LongMenu({option,clickHandler}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const OptionClickHandler = (e)=>{
    const choice = e.target.value
    clickHandler(choice)
    console.log(clickHandler);
  }

  return (
    <div className={styles.dropMenu}>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
    
        onClick={handleClick}
        className={styles.menuIcon}
      >
        <MoreVertIcon  />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight:"90%",
            width: '250px',
            
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
            <span onClick={OptionClickHandler}>{option}</span>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export default LongMenu;