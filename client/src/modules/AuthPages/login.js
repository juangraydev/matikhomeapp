import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

import {siginService} from "./services/service"
import { useSelector, useDispatch } from 'react-redux';


function Copyright(props) {
  let history = useHistory();

  const onSignin= ()=> {
    history.push("/login");
  }
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" onClick={onSignin} >
        MATIK Home Automation
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {
  const dispatch = useDispatch();
  
  const { register, formState: { errors }, handleSubmit } = useForm();
  const onSubmit = data => {
    dispatch(siginService(data))
    .then(function (res) {
      // handle success
      history.push('/home')
    })
    .catch(function (error) {
        // handle error
        alert('Wrong Bogo')
        console.log(error);
    })
    .then(function () {
        // always executed
    });
  };
  

  let history = useHistory();

  const onSignup= ()=> {
    history.push("/register");
  }
  const onForgot= ()=> {
    history.push("/forgot");
  }
  const handleLanding= ()=> {
    history.push("/");
  }

  return (
    
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <img  src={require('../../shared/images/matik2.png')} height={200} width={200} onClick={handleLanding} />
          <Typography component="h1" variant="h6">
            Sign In
          </Typography>
          <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="email"
                  size="small"
                  label="Email Address"
                  name="email"
                  {...register("email", { 
                    required: true, 
                    pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 
                    maxLength: 20 
                  })}
                  error={errors.email?.type === 'required' || errors.email?.type === 'pattern'}
                  helperText={errors.email?.type === 'required' ? "Email is required" : errors.email?.type === 'pattern' && "Email is invalid"}
                />

              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  size="small"
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  {...register("password", { required: true, maxLength: 20 })}
                  error={errors.password?.type === 'required'}
                  helperText={errors.password?.type === 'required' && "Password is required" }
                />
              </Grid>
            </Grid>
            <Grid container justifyContent="flex-end">
              <Grid item>
                
                <Link onClick={onForgot} variant="body2">
                  Forgot your password?
                </Link>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              size="small"
              variant="contained"
              sx={{ mt: 2, mb: 2 }}
            >
              Sign In
            </Button>
            
            <Grid container justifyContent="flex-end">
              <Grid item>
                
                <Link onClick={onSignup} variant="body2">
                  Don't have any account? Sign up
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}