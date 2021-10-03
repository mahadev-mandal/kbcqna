import { Container, Divider, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core';
import QuesList from './QuesList';
import Image from 'next/image'
import useSWR from 'swr';
import getPopularQues from '../controllers/getPopularQues'
import logo from '../public/logo.png'
import { apiBaseUrl } from '../helpers/constants';

const useStyles = makeStyles((theme) => ({
    root: {
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
    logo: {
        width:'100vw',
        background: 'pink',
        marginBottom:15
    }
}))

function Main({ mainContent }) {
    const classes = useStyles()
    const { data: populars, error } = useSWR(`${apiBaseUrl}/api/questions/populars`, getPopularQues)

    if (populars) {
        return (
            <Container maxWidth="lg" className={classes.root}>
                <div className={classes.logo}>
                    <Image src={logo} alt='logo' height={60} className={classes.logo} />
                </div>
                <Grid container spacing={5}  >
                    <Grid item xs={12} md={8}>
                        <Grid item >
                            {mainContent}
                        </Grid>
                        <Grid item style={{ marginTop: 15 }} >
                            <Typography variant='h5'>
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
            </Container>
        )
    } else if (error) {
        return "An error occured while fetching popular questions"
    } else {
        return ' loading...'
    }
}

export default Main
