import React from "react";
import Header from "../../shared/component/header"
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import DeviceHubIcon from '@mui/icons-material/DeviceHub';
import PeopleIcon from '@mui/icons-material/People';

function DashboardCard(props) {
    const {Title} = props;
    return (
        <Card style={{padding: 15}}>
            <div>
                <Typography variant="h6" component="div" gutterBottom display="inline">{Title}</Typography>
                {
                    Title == "Accessories" && (
                        <DeviceHubIcon style={{float: "right", fontSize: 30}}/>
                    )
                }    
                {
                    Title == "Users" && (
                        <PeopleIcon style={{float: "right", fontSize: 30}}/>
                    )
                }            
            </div>
            <Typography variant="h2" component="div" gutterBottom style={{margin: "auto"}}>{"300"}</Typography>
                
        </Card>
    )
}


export default function AdminDashboard() {

    return (
        <div>
            <Header Title={"Admin Dashboard"} isAdmin={true}/>
            <Grid container spacing={2}>
                <Grid item xs={6} md={6}>
                    <DashboardCard Title="Users"/>
                </Grid>
                <Grid item xs={6} md={6}>
                    <DashboardCard Title="Accessories"/>
                </Grid>
            </Grid>
        </div>
    );
};