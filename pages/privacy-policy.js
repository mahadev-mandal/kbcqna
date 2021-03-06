import { Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core'
import DrawerLeft from '../components/DrawerLeft';

const useStyles = makeStyles((theme) => ({
    root: {
        
    }
}))

function PrivacyPolicy() {
    const classes = useStyles();
    return (
        <DrawerLeft drawerContent={(
            <div className={classes.root}>
                <Typography variant='h6'>
                    Privacy Policy
                </Typography>
                <Typography variant='body2'>
                    If you choose to use our Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that we collect is used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.
                </Typography>
            </div>
        )} />
    )
}

export default PrivacyPolicy
