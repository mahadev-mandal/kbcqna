import React, { useState } from 'react'
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import { loginSchema } from '../../utils/validationSchema';
import { Avatar, Typography } from '@material-ui/core'
import { Button } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import { blue } from '@material-ui/core/colors';
import { useFormik } from 'formik';
import axios from 'axios';
import { apiBaseUrl } from '../../helpers/constants';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '30px',
        margin: 'auto',
        marginTop: '40px',
        display: 'flex',
        justifyContent: 'center',
        background: 'rgba(255,228,255,.5)'
    },
    avatar: {
        width: theme.spacing(7),
        height: theme.spacing(7),
        margin: 'auto',
        background: blue[900]
    },
    userIcon: {
        width: theme.spacing(6),
        height: theme.spacing(6),
    }
}))


function LoginPage({ isAuth }) {

    const router = useRouter();
    const classes = useStyles();
    const [message, setMessage] = useState(null)

    const { handleSubmit, handleChange, handleBlur, values, errors, touched } = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: loginSchema,
        async onSubmit(values) {
            await axios.post(`${apiBaseUrl}/api/login`, values)
                .then((res) => {
                    Cookies.set('jwt',res.data.token)
                    router.push('/admin/dashboard')
                }).catch((err) => {
                    setMessage(err.response.data.errorMessage)
                })
        }
    })

    return (
        <div>
            <Grid container  >
                <Grid item
                    component={Paper}
                    elevation={5}
                    className={classes.root}
                    sm={5} md={3} xs={10}
                >
                    <form noValidate autoComplete="off">
                        <Avatar className={classes.avatar}>
                            <PersonIcon className={classes.userIcon} />
                        </Avatar> <br />

                        <TextField
                            label='Username'
                            id='email'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            error={errors.email && touched.email ? true : false}
                            helperText={errors.email && touched.email ? errors.email : null}
                        /> <br /><br />
                        <TextField
                            type='password'
                            label='Password'
                            id='password'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                            error={errors.password && touched.password ? true : false}
                            helperText={errors.password && touched.password ? errors.password : null}
                        /> <br /><br />
                        <Typography variant='subtitle2'
                            style={{ color: 'red', marginBottom: 15 }}
                        >

                        </Typography>
                        <Button fullWidth
                            onClick={handleSubmit}
                            color='secondary'
                            variant='contained'
                        >
                            Login
                        </Button>
                        <Typography variant="subtitle2" style={{ color:' red' }}>{message}</Typography>
                    </form>
                </Grid>
            </Grid>
        </div>
    )
}

export default LoginPage
