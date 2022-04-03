import React, { useEffect } from "react";
import Header from "../../shared/component/header";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import DeviceChannel from "./component/Channel";
import Paper from '@mui/material/Paper';
import {getHouseList} from './service'
import { useSelector, useDispatch } from 'react-redux';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }


const HouseList = (props) => {
    const homeList = props.homeList || [];
    const { selectedHome, setSelectedHome } = props

    console.log("selectedHome:", selectedHome);
    

    const handleChange = (event) => {
      if(event.target.value == 0){
        createHouse();
      }else {
        setSelectedHome(event.target.value);
      }
    };

    const createHouse = () => {
        alert("wqeqwe");
    }
  
    return (
      <div>
        <FormControl sx={{ mt: 2, minWidth: 200 }}>
          <InputLabel id="demo-simple-select-autowidth-label">House List</InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={selectedHome}
            onChange={handleChange}
            autoWidth
            label="House List"
          >
            {
              homeList.map(home => {
                return (<MenuItem value={home.id}>{home.name}</MenuItem>)
              })
            }
            <MenuItem value={0}>Build a House</MenuItem>
          </Select>
        </FormControl>
      </div>
    );
}

export default function UserDashboard() {
    const [homeList, setHomeList] = React.useState([]);
    const [roomList, setRoomList] = React.useState([]);
    const [selectedRoom, setSelectedRoom] = React.useState(0);
    const [selectedHome, setSelectedHome] = React.useState(0);
    const dispatch = useDispatch();
    const houseData = useSelector(state => state.dashboard.data);


    useEffect(() => {        
      dispatch(getHouseList());
    }, []);

  useEffect(() => {
    console.log("this houseData: ", houseData);
    setHomeList(houseData.data ? houseData.data.homeList : [])
    setSelectedHome(houseData.data ? houseData.data.homeList[0].id : 0)
    setRoomList(houseData.data ? houseData.data.homeList[0].rooms : [])
  }, [houseData] )

  useEffect(() => {
    console.log(houseData);
    setRoomList(houseData.data ? houseData.data.homeList[selectedHome-1].rooms : []);
    setSelectedRoom(0);
  }, [selectedHome])

    const handleChange = (event, newValue) => {
      setSelectedRoom(newValue);
    };

    return (
        <React.Fragment>
            <Container style={{paddingTop: 10, paddingBottom: 10 }} maxWidth="false" >
                <Header/>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <HouseList homeList={homeList} selectedHome={selectedHome} setSelectedHome={setSelectedHome}/>
                    </Grid>
                    <Grid item xs={6} style={{justifyContent: "right", display: 'flex'}}>
                        <SettingsApplicationsIcon sx={{ fontSize: 40, mt: 2}}/>
                    </Grid>
                    <Grid item xs={12}>
                        <Box sx={{ width: '100%' }}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <Tabs value={selectedRoom} onChange={handleChange} aria-label="basic tabs example">
                                {
                                  roomList && roomList.map(room => {
                                    return <Tab label={room.name} {...a11yProps(room.id)} />
                                  })
                                }
                                </Tabs>
                            </Box>

                            {
                              roomList && roomList.map((room, index) => {

                                console.log(selectedRoom, room.id);
                                return <TabPanel value={selectedRoom} index={index}> <DeviceChannel/> </TabPanel>
                              })
                            }

                        </Box>
                    </Grid>
                </Grid>
                

            </Container>
        </React.Fragment>
    );
};