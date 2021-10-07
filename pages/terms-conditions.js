import { Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core'
import Heading from '../components/Heading';
import Footer from '../components/Footer';

const useStyles = makeStyles((theme) => ({
    root: {
        marginLeft: 5,
        marginRight: 5,
        [theme.breakpoints.up('md')]: {
            marginLeft: 60,
            marginRight: 60,
        },
    }
}))

function TermsConditions() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Heading />
            <Typography variant='h6'>
                Terms & Conditions
            </Typography>
            <Typography variant='body2'>
                The terms “We” / “Us” / “Our”/”Company” individually and collectively refer to KBCQNA and the terms “Visitor” ”User” refer to the users. Here are the terms & conditions under which you (user) can use this application (KBCQNA ). If you don’t accept the terms & conditions, we would request you to kindly uninstall this application.
            </Typography>
            <Typography variant='h6'>
                USE OF CONTENT
            </Typography>
            <Typography variant='body2'>
                All logos, brands, marks headings, labels, names, signatures, numerals, shapes or any combinations thereof, appearing in this app, except as otherwise noted, are properties either owned, or used under licence, by KBCQNA. The use of these properties or any other content on this application, except as provided in these terms and conditions is strictly prohibited.
                You may not sell or modify the content of this app  or reproduce, display, publicly perform, distribute, or otherwise use the materials in any way for any public or commercial purpose without KBCQNA or respective organisation’s or entity’s written permission.
            </Typography>
            <Footer />
        </div>
    )
}

export default TermsConditions
