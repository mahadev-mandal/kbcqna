import { Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core'
import Heading from '../components/Heading';
import Footer from '../components/Footer';

const useStyles = makeStyles((theme) => ({
    root: {
        marginLeft: 5,
        marginRight: 5,
        marginTop: 20,
        [theme.breakpoints.up('md')]: {
            marginLeft: 60,
            marginRight: 60,
        },
    }
}))

function PrivacyPolicy() {
    const classes = useStyles();
    return (
        <>
            <Heading />
            <div className={classes.root}>
                <Typography variant='h6'>
                    Privacy Policy
                </Typography>
                <Typography variant='body2'>
                    If you choose to use our Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that we collect is used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy. The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible at GKToday Academy unless otherwise defined in this Privacy Policy.
                </Typography>
                <Footer />
            </div>
        </>
    )
}

export default PrivacyPolicy
