import axios from 'axios'
import React from 'react'
import Main from '../../components/Main'
import QuesAns from '../../components/QuesAns';
import Head from 'next/head';
import { baseURL } from '../../helpers/constants';
import { useRouter } from 'next/router'

export async function getStaticPaths() {
    const res = await axios.get(`${baseURL}/api/questions/populars`);
    const popularQues = await res.data
    const paths = popularQues.map((ques) => ({
        params: { slug: ques.slug }
    }))
    console.log(paths)
    return { paths, fallback: true }
}

export async function getStaticProps({ params }) {
    const res = await axios.get(`${baseURL}/api/question/${params.slug}`)
    const ques = await res.data
    return {
        props: { ques }
    }
}


function Question({ ques }) {
    const router = useRouter();
    if (router.isFallback) {
        return <div>Loading...</div>
    }
    
    return (
        <div>
            <Head >
                <title>{ques.question}</title>
                <meta name="description" content={ques.options.toString()} />
                <meta name="keywords" content={ques.keywords} />
            </Head>
            <Main
                mainContent={<QuesAns ques={ques} />}
            />
        </div>
    )
}

export default Question
