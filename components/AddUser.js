import { Button, TextField, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
//import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useFormik } from 'formik';
import { usrSchema } from '../utils/validationSchema'
import axios from 'axios';
import { baseURL } from '../helpers/constants';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const initialValues = { name: "", password: "", confirmPassword: "", email: "" }

export default function AddUser() {
    const classes = useStyles();
    const [role, setRole] = useState('user')
    const [message, setMessage] = useState(null);
    const [color, setColor] = useState("white")

    const { handleSubmit, handleChange, handleBlur, resetForm, values, errors, touched } = useFormik({
        initialValues: initialValues,
        validationSchema: usrSchema,
        async onSubmit() {
            console.log('ekek')
            await axios.post(`${baseURL}}/api/user`, { ...values, role: role })
                .then((res) => {
                    setMessage("User added sucessfully")
                    setColor("green")
                    resetForm()
                }).catch((err) => {
                    setMessage(err.response.data.errorMessage)
                    setColor("red")
                })
        }
    })
    return (
        <>
            <TextField fullWidth
                label='full name'
                id='name'
                type='text'
                variant='outlined'
                autoComplete='off'
                style={{ margin: 8, textTransform: 'capitalize' }}
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={errors.name && touched.name ? errors.name : null}
                error={errors.name && touched.name ? true : false}
            />
            <TextField fullWidth
                label='email'
                id='email'
                type='email'
                variant='outlined'
                autoComplete='off'
                style={{ margin: 8, textTransform: 'capitalize' }}
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={errors.email && touched.email ? errors.email : null}
                error={errors.email && touched.email ? true : false}
            />
            <FormControl fullWidth
                variant="outlined"
                className={classes.formControl}
            //error={errors.role && touched.role ? true : false}
            >
                <InputLabel id="demo-simple-select-outlined-label">user role</InputLabel>
                <Select
                    labelId="role select "
                    id="role"
                    value={role}
                    onChange={(e) => { setRole(e.target.value) }}
                    label="User role"
                >
                    {/* <MenuItem value="">
                        <em>None</em>
                    </MenuItem> */}
                    <MenuItem value='user'>User</MenuItem>
                    <MenuItem value='admin'>Admin</MenuItem>
                </Select>
                {/* <FormHelperText>
                    {errors.role && touched.role ? errors.role : null}
                </FormHelperText> */}
            </FormControl>
            <TextField fullWidth
                label='password'
                id='password'
                type='password'
                variant='outlined'
                autoComplete='off'
                style={{ margin: 8, textTransform: 'capitalize' }}
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={errors.password && touched.password ? errors.password : null}
                error={errors.password && touched.password ? true : false}
            />
            <TextField fullWidth
                label='confirm password'
                id='confirmPassword'
                type='password'
                variant='outlined'
                autoComplete='off'
                style={{ margin: 8, textTransform: 'capitalize' }}
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={errors.confirmPassword && touched.confirmPassword ? errors.confirmPassword : null}
                error={errors.confirmPassword && touched.confirmPassword ? true : false}
            />
            <Button fullWidth variant='contained' onClick={handleSubmit} >Add User</Button>
            <Typography variant='subtitle2' style={{ color: color }}>
                { message }
            </Typography>
        </>
    )
}
