import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import React from 'react'
import Footer from '../components/Footer'
import Heading from '../components/Heading'
const useStyles = makeStyles((theme) => ({
    root:{
        marginRight:10,
        marginLeft:10,
        [theme.breakpoints.up('md')]:{
            marginLeft:60,
            marginRight:60,
        }
    },
    div1: {
        background: 'rgba(255,255,255,0.8)',
        textAlign: 'center',
        padding: 10,
        borderRadius: 10,
        '& h6': {
            fontFamily: 'serif'
        }
    },
    div2: {
        background: 'linear-gradient(45deg,rgba(0,0,255,0.5),rgba(204,153,255,0.5))',
        marginTop: 10,
        textAlign: 'center',
        padding: 10,
        borderRadius: 10,
        '& h6': {
            fontFamily: 'serif'
        }
    }
}))

function ContactUs() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Heading />
            <div className={classes.div1} >
                <Typography variant='h6' >
                    Connect With Us
                </Typography>
                <Typography variant='body2'>
                    We will love to respond to your queries and help you succeed. Feel free to get in touch with us.
                </Typography>
            </div>
            <div className={classes.div2}>
                <Typography variant='h6'>
                    Reach Us
                </Typography>
                <Typography variant='body2'>
                    <span>Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Reachus@example.com</span> <br />
                    <span>phone:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;xxxxxxxxxx</span><br />
                    <span>Address:</span>
                </Typography>
            </div>
            <Footer />
        </div>
    )
}

export default ContactUs
