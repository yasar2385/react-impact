"use client";
import React, { useState, useEffect } from "react";
import Image from 'next/legacy/image'
import { useRouter } from 'next/navigation'

// ? PROEJCT
import FetchDataBase from "../auth/Ajaxcall";
import Footer from './Footer'
import Imagerender from './Imagerender'
import nglogo from '../assets/newgen.svg'
import implogo from '../assets/impact.svg'
// ? FROM THIRD PARTY
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
// import CircularProgress from '@mui/material-next/CircularProgress';
import { CircularProgress } from '@mui/material';



function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    email_helpText: "",
    email_error: false,
    password_helpText: "",
    password_error: false,

  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);  
  const router = useRouter();
  // useEffect(() => { })
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let isValid = true;
    const newErrors = {};
    // Validate email
    if (!formData.email) {
      newErrors.email = "Email is required";
      isValid = false;
    }
    // Validate password
    if (!formData.password) {
      newErrors.password = "Password is required";
      isValid = false;
    }
    if (!isValid) {
      setErrors(newErrors);
      return
    }
    const result = await FetchDataBase(formData, "userlogin");
    console.log(result);
    if (result) {
      if (result.cred == 1) {
        localStorage.clear();
        'username,client,_client_list,displayName,userid,_workflow_role,apikey'.split(",").forEach((key) => {
          if (result[key]) localStorage.setItem("xmleditor:login_" + key.replace(/^_/gi, ''), result[key]);
        });
        setSubmitted(!0);
        router.push('/dashboard', { scroll: false })
      } else {
        setFormData({
          ...formData,
          ['email_error']: result.cred == 2 ? true : false,
          ['email_helpText']: result.cred == 2 ? "Invalid email" : "",
          ['password_helpText']: (result.cred == 0 || result.cred == 2) ? 'Invalid Password' : "",
          ['password_error']: (result.cred == 0 || result.cred == 2) ? true : false,
        });
        setSubmitted(!1);
      }
    }
  };
  
  const isFormValid = Object.keys(errors).length === 0;

  return (
    <> 
    
    {/* <Link href="/dashboard"><a>Dashboard</a></Link> */}
    <Container component="main" maxWidth="xs" sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              minHeight: '100vh',
            }}>{" "}
            <Box sx={{display: 'flex',
              flexDirection: 'row',
              alignItems: 'center', }}>
              {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}><LockOutlinedIcon /></Avatar>{" "} */}
              <Avatar sx={{ m: 1, bgcolor: 'white', width: 100, height: 100  }}><Image src={nglogo} alt="Newgen Icon"/></Avatar>{" "}
              <Avatar sx={{ m: 1, bgcolor: 'white', width: 100, height: 100  }}><Image src={implogo} alt="IMPACT Icon"/></Avatar>{" "}
            </Box>
            <Typography component="h1" variant="h5">Sign in</Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{
                mt: 1,
              }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                sx={{
                  bgcolor: "white",
                }}
                value={formData.email} onChange={handleInputChange}
                helperText={formData.email_helpText}
                error={formData.email_error ? !0 : !1}
              />{" "}
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={formData.password} onChange={handleInputChange}
                helperText={formData.password_helpText}
                error={formData.password_error ? !0 : !1}
                sx={{
                  bgcolor: "white",
                }}
              />{" "}
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                disabled={!isFormValid}
                sx={{
                  mt: 3,
                  mb: 2,
                }}
              >
                Sign In{" "}
              </Button>{" "}
              {/* <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password ?
                  </Link>{" "}
                </Grid>{" "}
                <Grid item>
                  <Link href="#" variant="body2">
                    {" "}
                    {"Don't have an account? Sign Up"}{" "}
                  </Link>{" "}
                </Grid>{" "}
              </Grid>{" "} */}
            </Box>
            {" "}
      </Container>
    </>
  );
}

export default LoginForm;
