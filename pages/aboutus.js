import { makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import DrawerLeft from '../components/DrawerLeft'

const useStyles = makeStyles((theme) => ({
    root: {
        // marginLeft: 10,
        // marginRight: 10,
        marginTop:20,
        [theme.breakpoints.up('md')]: {
            marginLeft: 60,
            marginRight: 60,
        },
    },
}))

function Aboutus() {
    const classes = useStyles();
    return (
        <DrawerLeft drawerContent={(
            <div className={classes.root}>
                <Typography variant='body2' >
                    KBCQNA is a leading website providing valuable, convenient, relevant and enjoyable online education pertaining to GK to students or kbc participants, asp seeirants and general public through a diversity of services. The main orientation of this website is to create a large repository of knowledge for the general reference of students and aspirants. KBCQNA was launched in 2021 and is a pioneer in providing high quality content to students and kbc participants in India.
                </Typography>
                <Typography variant='h6'>
                    How KBCQNA will help you in preparation?
                </Typography>
                <Typography variant='body2'>
                    If you are preparing for <em>KBC</em> and other Exam, all the content of this e-magazine is important as a supplement to your studies. This site intends to cover almost all the questions that are asked in KBC. KBCQNa will also conducts Target Programmes comprising study material and mock tests to tackle the General Studies Papers of Civil Services Examination soon.
                </Typography>
                <Typography variant='h6'>
                    I found a mistake or some outdated info in the past archive, how to edit this?
                </Typography>
                <Typography variant='body2'>
                    Since it is a blog , there is not facility of editing the content by its users like we have in wikipedia and other wiki sites. However, when you find any error just leave your comment. We check that particular info and eliminate the error. Please note that the comments which indicate an error don’t get published. This is to avoid further discussions and confusion.
                </Typography>
            </div>
        )} />
    )
}

export default Aboutus
