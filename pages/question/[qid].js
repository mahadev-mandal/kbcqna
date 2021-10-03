import axios from 'axios'
import React from 'react'
import Main from '../../components/Main'
import QuesAns from '../../components/QuesAns';
import Head from 'next/head';
import { apiBaseUrl } from '../../helpers/constants';

export async function getStaticPaths() {
    const res = await axios.get(`${apiBaseUrl}/api/questions/populars`);
    const popularQues = await res.data
    const paths = popularQues.map((ques) => ({
        params: { qid: ques._id }
    }))
    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const res = await axios.get(`${apiBaseUrl}/api/question/${params.qid}`)
    const ques = await res.data
    return {
        props: { ques }
    }
}


function Question({ ques }) {

    return (
        <div>
            <Head >
                <title>{ques.question}</title>
            </Head>
            <Main
                mainContent={<QuesAns ques={ques} />}
            />
        </div>
    )
}

export default Question
