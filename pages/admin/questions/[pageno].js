import React from 'react'
import MiniDrawer from '../../../components/Drawer'
import MyTable from '../../../components/Table'
import { apiBaseUrl } from '../../../helpers/constants'
import withAuth from '../../../HOC/withAuth'

export function getServerSideProps(context) {
    return {
        props: { params: context.params }
    }
}

const tableHead = [
    'question', 'correctOption', 'episode', 'season', 'author'
]

function Questions({ params }) {
    const { pageno } = params;
    return (
        <div>
            <MiniDrawer comp={<MyTable
                pageno={pageno}
                apiUrl={`${apiBaseUrl}/api/questions`}
                totalApiUrl={`${apiBaseUrl}/api/totalquestions`}
                addDataUrl={`${apiBaseUrl}/admin/addquestion`}
                deleteApiUrl={`${apiBaseUrl}/api/question`}
                tableHead={tableHead} />}
                drawerTitle='Questions'
            />

        </div>
    )
}
export default withAuth(Questions);