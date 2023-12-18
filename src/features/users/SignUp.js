// // import React from 'react';
// // import ReactDOM from 'react-dom';
// // import { useFormik } from 'formik';
// // import {TextField,Button} from '@mui/material';
// // 
// // import { addUser } from './userSlice';
// //  const validationSchema=yup.object({
// //         userName:yup
// //         .string('enter name')
// //         .required('name is required'),
// //         email:yup
// //         .string('enter your email')
// //         .email('enter a valid email')
// //         .required('email is required'),
// //         password:yup
// //             .string('Enter your password')
// //             .min(8, 'Password should be of minimum 8 characters length')
// //             .required('Password is required'),
// //     })
// // const SignUp = () => {
// //     let dispatch=useDispatch();
    

// //     const formik=useFormik({
// //         initialValues:{
// //             userName:'',
// //             email:'',
// //             password:''
// //         },
// //         validationSchema:validationSchema,
// //         onSubmit:(values)=>{
// //             console.log(values);
// //              dispatch(addUser(values));
// //         }
// //     })

// //     return(
// //         <>
// //         <form onSubmit={formik.handleSubmit}>
// //         <TextField
// //             fullWidth
// //             id="userName"
// //             name="userName"
// //             label="userName"
// //             value={formik.values.userName}
// //             onChange={formik.handleChange}
// //             error={formik.touched.userName && Boolean(formik.errors.userName)}
// //             helperText={formik.touched.userName && formik.errors.userName}
// //           />
// //           <TextField
// //           fullWidth
// //           id="email"
// //           name="email"
// //           label="Email"
          
// //         />
// //           <TextField
// //             fullWidth
// //             id="password"
// //             name="password"
// //             label="Password"
// //             type="password"
// //             value={formik.values.password}
// //             onChange={formik.handleChange}
// //             error={formik.touched.password && Boolean(formik.errors.password)}
// //             helperText={formik.touched.password && formik.errors.password}
// //           />
// //           <Button color="primary" variant="contained" fullWidth type="submit">
// //             Submit
// //           </Button>
// //         </form>
// //         </>
// //     )
// // }
 
// // export default SignUp;
  
// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { Link  as LinkTo} from 'react-router-dom';
// import * as yup from 'yup';
// import { useDispatch } from 'react-redux';
// import { useFormik } from 'formik'; 
// import { addUser } from './userSlice';

// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// const theme = createTheme();

// const validationSchema=yup.object({
//   firstName:yup
//   .string('enter name')
//   .required('name is required'),
//   lastName:yup
//   .string('enter name')
//   .required('name is required'),
//   email:yup
//   .string('enter your email')
//   .email('enter a valid email')
//   .required('email is required'),
//   password:yup
//       .string('Enter your password')
//       .min(8, 'Password should be of minimum 8 characters length')
//       .required('Password is required'),
// })

// export default function SignUp() {
//   let dispatch=useDispatch();
//   const formik=useFormik({
//       initialValues:{
//           firstName:'',
//           lastName:'',
//           email:'',
//           password:''
//       },
//       validationSchema:validationSchema,
//       onSubmit:(values)=>{
//           console.log(values);
//            dispatch(addUser(values));
//       }
//   })
//   // const handleSubmit = (event) => {
//   //   event.preventDefault();
//   //   const data = new FormData(event.currentTarget);
//   //   console.log({
//   //     email: data.get('email'),
//   //     password: data.get('password'),
//   //   });
//   // };
  
//   return (
    
//     <ThemeProvider theme={theme}>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 8,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//           }}
//         >
//           <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Sign up
//           </Typography>
//           <Box  sx={{ mt: 3 }}>
//             <form onSubmit={formik.handleSubmit}>
//             <Grid container spacing={2}>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   autoComplete="given-name"
//                   name="firstName"
//                   required
//                   fullWidth
//                   id="firstName"
//                   label="First Name"
//                   autoFocus
//                   value={formik.values.firstName}
//                   onChange={formik.handleChange}
//                   error={formik.touched.firstName && Boolean(formik.errors.firstName)}
//                   helperText={formik.touched.firstName && formik.errors.firstName}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   required
//                   fullWidth
//                   id="lastName"
//                   label="Last Name"
//                   name="lastName"
//                   autoComplete="family-name"
//                   value={formik.values.userName}
//                   onChange={formik.handleChange}
//                   error={formik.touched.lastName && Boolean(formik.errors.lastName)}
//                   helperText={formik.touched.lastName && formik.errors.lastName}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   id="email"
//                   label="Email Address"
//                   name="email"
//                   autoComplete="email"
//                   value={formik.values.email}
//                   onChange={formik.handleChange}
//                   error={formik.touched.email && Boolean(formik.errors.email)}
//                   helperText={formik.touched.email && formik.errors.email}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   name="password"
//                   label="Password"
//                   type="password"
//                   id="password"
//                   autoComplete="new-password"
//                   value={formik.values.password}
//                   onChange={formik.handleChange}
//                   error={formik.touched.password && Boolean(formik.errors.password)}
//                   helperText={formik.touched.password && formik.errors.password}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <FormControlLabel
//                   control={<Checkbox value="allowExtraEmails" color="primary" />}
//                   label="I want to receive inspiration, marketing promotions and updates via email."
//                 />
//               </Grid>
//             </Grid>
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2 }}
//             >
//               Sign Up
//             </Button>
//             <Grid container justifyContent="flex-end">
//               <Grid item>
//                 <LinkTo to="/signin">
//                   <Link variant="body2">
//                     Already have an account? Sign in
//                   </Link>
//                 </LinkTo>
//               </Grid>
//             </Grid>
//           </form>
//           </Box>
//         </Box>
//         <Copyright sx={{ mt: 5 }} />
//       </Container>
//     </ThemeProvider>
//   );
// }

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
import {Link as LinkTo, useNavigate} from 'react-router-dom';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik'; 
import { addUser } from './userSlice';

const validationSchema = yup.object({
      firstName:yup
          .string('enter first name')
          .required('first name is required'),
      lastName:yup
          .string('enter last Name')
          .required('last Name is Required'),
      email:yup
          .string('Enter Your Email')
          .email('Enter a Valid Email')
          .required('Email is Required'),
      password:yup
          .string('Enter a Password')
          .min(8,'Password should be of minimum 8 characters length')
          .required('Password is Required')
  })


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {

      let dispatch = useDispatch();
      let navigate=useNavigate();
  const formik = useFormik({
            initialValues:{
                firstName:'',
                lastName:'',
                email:'',
                password:''
            },
            validationSchema:validationSchema,
            onSubmit:(values)=>{
                console.log(values);
                dispatch(addUser(values)).unwrap().then(res=>{
                    navigate("/")
                }).catch(err=>{console.log(err);});

            }
    
        })

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
          //  component="form"
           noValidate 
          // onSubmit={handleSubmit}
            sx={{ mt: 3 }}>
          <form onSubmit={formik.handleSubmit}>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                  helperText={formik.touched.firstName && formik.errors.firstName}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                  helperText={formik.touched.lastName && formik.errors.lastName}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <LinkTo to='/signin'>
                <Link variant="body2">
                  Already have an account? Sign in
                </Link>
                </LinkTo>
              </Grid>
            </Grid>
            </form>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}