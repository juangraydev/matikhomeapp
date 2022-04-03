import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useHistory } from "react-router-dom";

import Typography from '@mui/material/Typography';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function Header(props) {
    const { Title, isAdmin } = props;
    let history = useHistory();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    
    const handleLogout = ()=> {
      history.push("/");
    }

    return (
        <React.Fragment>
            <CssBaseline />

            <div>
                {
                    isAdmin == true ? (
                        <Typography variant="h6" component="div" gutterBottom display="inline">{Title}</Typography>                
                    ) :
                    (
                        <Typography variant="h6" component="div" gutterBottom display="inline">Logo</Typography>                
                    )
                }

                <div style={{display: "inline", float: "right"}}>
                    <Typography 
                        variant="button" 
                        display="inline" 
                        component="div" 
                        gutterBottom
                        style={{
                            marginInline: 5,
                            position: "relative",
                            bottom: 5
                        }}    
                    >
                        {"Juan Dela Cruz"}
                    </Typography>
                    <NotificationsActiveIcon
                        style={{marginInline: 5}}
                    />
                    <ArrowDropDownIcon         
                        onClick={handleClick}
                    />
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                        'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleClose}>Account Setting</MenuItem>
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                    </Menu>
                </div>
            </div>

        </React.Fragment>
    );
};