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
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';

import {signupService} from "./services/service"


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
  const validationSchema = Yup.object().shape({
    displayName: Yup.string()
      .required('Display Name is required')
      .min(6), 
    email: Yup.string()
      .required('Email is required')
      .matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "Email is invalid")
      .max(20),  
    password: Yup.string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters'),
    confirmPassword: Yup.string()
        .required('Confirm Password is required')
        .oneOf([Yup.ref('password')], 'Passwords must match')
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  const { register, formState: { errors }, handleSubmit  } = useForm(formOptions);
  const onSubmit = data => {
    console.log(data);
    dispatch(signupService(data))
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

  const onSignin= ()=> {
    history.push("/login");
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
          <img src={require('../../shared/images/matik2.png')} height={200} width={200} onClick={handleLanding} />
          <Typography component="h1" variant="h6">
            Sign Up
          </Typography>
          <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="displayName"
                  size="small"
                  label="Display Name"
                  name="displayName"
                  {...register("displayName")}
                  error={errors.displayName?.message}
                  helperText={errors.displayName?.message && errors.displayName?.message}
                />

              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="email"
                  size="small"
                  label="Email Address"
                  name="email"
                  {...register("email")}
                  error={errors.email?.message}
                  helperText={errors.email?.message && errors.email?.message}
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
                  error={errors.password?.message}
                  helperText={errors.password?.message && errors.password?.message}
                  
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  size="small"
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  id="confirmPassword"
                  {...register("confirmPassword")
                  }
                  error={errors.confirmPassword?.message}
                  helperText={errors.confirmPassword?.message && errors.confirmPassword?.message}
                  
                />
              </Grid>
            </Grid>
           
            <Button
              type="submit"
              fullWidth
              size="small"
              variant="contained"
              sx={{ mt: 2, mb: 2 }}
            >
              Sign Up
            </Button>
            
            <Grid container justifyContent="flex-end">
              <Grid item>
                
                <Link onClick={onSignin} variant="body2">
                  Already Have an Account? Sign in
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