import {  Divider, Grid,  Typography } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core/styles';
import React from 'react'
import { makeStyles } from '@material-ui/core';
import QuesList from './QuesList';
import useSWR from 'swr';
import getPopularQues from '../controllers/getPopularQues'
import { apiBaseUrl } from '../helpers/constants';
import Footer from './Footer';
import Heading from './Heading';
import theme from './Theme';

const useStyles = makeStyles((theme) => ({
    root: {
        marginLeft:5,
        marginRight:5,
        [theme.breakpoints.up('md')]: {
            padding: '20px 60px'
        }
    },
    a: {
        '&:hover': {
            color: 'blue',
            textDecoration: 'underline'
        }
    },
    headingDivider: {
        marginBottom: 15,
        backgroundColor: 'green'
    },

}))

function Main({ mainContent }) {
    const classes = useStyles()
    const { data: populars, error } = useSWR(`${apiBaseUrl}/api/questions/populars`, getPopularQues)

    if (populars) {
        return (
            <>
                {/* <ThemeProvider theme={theme}>
                    <Typography >
                        hello
                    </Typography>
                </ThemeProvider> */}
                <div maxWidth="lg" className={classes.root}>
                    <Heading />
                    <Grid container spacing={5} >
                        <Grid item xs={12} md={8}>
                            <Grid item >
                                {mainContent}
                            </Grid>
                            <Grid item style={{ marginTop: 15 }} >
                                <Typography variant='h5' >
                                    Recent Questions
                                </Typography>
                                <Divider className={classes.headingDivider} />
                                {populars.map((ques) => (
                                    <QuesList key={ques.question} question={ques} />
                                ))}
                            </Grid>
                        </Grid>
                        <Divider orientation="vertical" flexItem style={{ marginRight: '-1px' }} />
                        <Grid item xs={12} md={4} >
                            <Typography variant='h5'>
                                Popular Questions
                            </Typography>
                            <Divider className={classes.headingDivider} />
                            {populars.map((ques) => (
                                <QuesList key={ques.question} question={ques} />
                            ))}
                        </Grid>
                    </Grid>
                    <Footer />
                </div>
            </>
        )
    } else if (error) {
        return "An error occured while fetching popular questions"
    } else {
        return ' loading...'
    }
}

export default Main
