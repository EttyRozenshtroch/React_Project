import React from 'react';
import ReactDOM from 'react-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import {TextField,Button} from '@mui/material';
import { useDispatch } from 'react-redux';
import { addUser } from './userSlice';

 const validationSchema=yup.object({
        userName:yup
        .string('enter name')
        .required('name is required'),
        email:yup
        .string('enter your email')
        .email('enter a valid email')
        .required('email is required'),
        password:yup
            .string('Enter your password')
            .min(8, 'Password should be of minimum 8 characters length')
            .required('Password is required'),

    })
const SignUp = () => {
    let dispatch=useDispatch();
    

    const formik=useFormik({
        initialValues:{
            userName:'',
            email:'',
            password:''
        },
        validationSchema:validationSchema,
        onSubmit:(values)=>{
            console.log(values);
             dispatch(addUser(values));
        }
    })

    return(
        <>
        <form onSubmit={formik.handleSubmit}>
        <TextField
            fullWidth
            id="userName"
            name="userName"
            label="userName"
            value={formik.values.userName}
            onChange={formik.handleChange}
            error={formik.touched.userName && Boolean(formik.errors.userName)}
            helperText={formik.touched.userName && formik.errors.userName}
          />
          <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
          <TextField
            fullWidth
            id="password"
            name="password"
            label="Password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <Button color="primary" variant="contained" fullWidth type="submit">
            Submit
          </Button>
        </form>
        </>
    )
}
 
export default SignUp;
  
