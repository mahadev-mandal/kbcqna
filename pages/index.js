import React from 'react'
import { makeStyles } from '@material-ui/styles';
import Main from '../components/Main';
import Head from 'next/head'

const useStyles = makeStyles({
  a: {
    '&:hover': {
      color: 'blue',
      textDecoration: 'underline'
    }
  }
})

function Home({ populars }) {
  const classes = useStyles()
  
  return (
    <div>
      <Head>
        <title>kbc questions and answers</title>
      </Head>
      <Main mainContent="mahadev mandal "/>
    </div>
  )
}

export default Home
