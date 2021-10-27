import { Divider, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core';
import QuesList from './QuesList';
import useSWR from 'swr';
import getPopularQues from '../controllers/getPopularQues'
import { baseURL } from '../helpers/constants';
import DrawerLeft from './DrawerLeft';

const useStyles = makeStyles((theme) => ({
    root: {
        
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
    const { data: populars, error } = useSWR(`${baseURL}/api/questions/populars`, getPopularQues)


    return (
        <DrawerLeft drawerContent={(
            <div>
                {/* <ThemeProvider theme={theme}>
                    <Typography >
                        hello
                    </Typography>
                </ThemeProvider> */}

                <div className={classes.root}>
                    <Grid container spacing={5} >
                        <Grid item xs={12} md={8}>
                            <Grid item >
                                {mainContent}
                                <Typography variant="caption" style={{ marginTop: 20, marginBottom: 20 }}>
                                    For any suggestion mail us to: <i>kbcqna@gmail.com</i>
                                </Typography>
                            </Grid>
                            <Grid item style={{ marginTop: 15 }} >
                                <Typography variant='h5' >
                                    Recent Questions
                                </Typography>
                                <Divider className={classes.headingDivider} />
                                {populars ?
                                    populars.map((ques) => (
                                        <QuesList key={ques.question} question={ques} />
                                    ))
                                    : error ? <div style={{ color: 'red' }}>Something went wrong</div> : 'loading...'}
                            </Grid>
                        </Grid>
                        {/* <Divider orientation="vertical" flexItem style={{ marginRight: '-1px' }} /> */}
                        <Grid item xs={12} md={4} >
                            <Typography variant='h5'>
                                Popular Questions
                            </Typography>
                            <Divider className={classes.headingDivider} />
                            {error ? <div style={{ color: 'red' }}>Something went wrong</div> : populars ?
                                populars.map((ques) => (
                                    <QuesList key={ques.question} question={ques} />
                                ))
                                : 'loading...'}
                        </Grid>
                    </Grid>
                </div>
            </div>
        )} />
    )

}

export default Main
