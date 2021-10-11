import React from 'react'
import MiniDrawer from '../../../components/Drawer'
import MyTable from '../../../components/Table'
import { baseURL } from '../../../helpers/constants'
import withAuth from '../../../HOC/withAuth'

export function getServerSideProps(context) {
    return {
        props: { params: context.params }
    }
}

const tableHead = [
    'question', 'correctOption', 'season', 'episode','questionNo', 'author'
]

function Questions({ params }) {
    const { pageno } = params;
    return (
        <div>
            <MiniDrawer comp={<MyTable
                pageno={pageno}
                apiUrl={`${baseURL}/api/questions`}
                totalApiUrl={`${baseURL}/api/totalquestions`}
                addDataUrl={`${baseURL}/admin/addquestion`}
                deleteApiUrl={`${baseURL}/api/question`}
                tableHead={tableHead} />}
                drawerTitle='Questions'
            />

        </div>
    )
}
export default withAuth(Questions);