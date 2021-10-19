import React from 'react'
import { makeStyles } from '@material-ui/styles';
import Main from '../components/Main';
import Head from 'next/head'
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
  a: {
    '&:hover': {
      color: 'blue',
      textDecoration: 'underline'
    }
  }
})

function Content() {
  return (
    <div style={{padding:5}}>
      <Typography variant='h6' style={{textAlign:'center'}}>
        Welcome to KBCQNA
      </Typography>
      <Typography variant='body2' component='p'>
        Kaun Banega Crorepati (also simply known as KBC) is an Indian Hindi-language television game show. It is the official Hindi adaptation of the Who Wants to Be a Millionaire? franchise. It has been presented by actor Amitabh Bachchan since its inception, except for during the third season, which was presented by actor Shah Rukh Khan. The programme aired on Star Plus for its first three seasons from 2000 to 2007, and was commissioned by the programming team of Sameer Nair. Since 2010, it has been airing on Sony Entertainment Television and was produced by BIG Synergy (under various names over periods of time) from season 1 till season 10. Afterwards, the credited production companies co-producing are Studio NEXT since season 10 and Tree of Knowledge (Digi TOK) since season 11, respectively.
       
      </Typography>
      <Typography variant='body2' component='p'>
        This website contains almost all of the Questions that are asked in this television show except questions which include videos, photos, and audio clip.
      </Typography>
    </div>
  )
}

function Home() {
  const classes = useStyles()

  return (
    <div>
      <Head>
        <title>kbc questions and answers</title>
      </Head>
      <Main mainContent={Content()} />
    </div>
  )
}

export default Home
