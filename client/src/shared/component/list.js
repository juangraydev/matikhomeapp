import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import DeviceHubIcon from '@mui/icons-material/DeviceHub';
import { useHistory } from "react-router-dom";

export default function MainListItems(props){
    let history = useHistory();

    const handleClick = (url)=> {
      history.push("/admin/"+url);
    }

    return(
        <div>
          <ListItem button onClick={()=>handleClick('dashboard')}>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button onClick={()=>handleClick('users')}>
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Users" />
          </ListItem>
          <ListItem button onClick={()=>handleClick('Accessory')}>
            <ListItemIcon>
              <DeviceHubIcon />
            </ListItemIcon>
            <ListItemText primary="Accessories" />
          </ListItem>
        </div>
    )
};
