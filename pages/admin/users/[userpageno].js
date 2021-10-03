import React from 'react'
import MiniDrawer from '../../../components/Drawer'
import { useRouter } from 'next/router'
import MyTable from '../../../components/Table'
import withAuth from '../../../HOC/withAuth'
import { apiBaseUrl } from '../../../helpers/constants'

export function getServerSideProps(context) {
    return {
        props: { params: context.params }
    }
}

const tableHead = [
    'name', 'email', 'role',
]

function Users({ params }) {
    const router = useRouter()
    const { userpageno } = params;

    return (
        <div>
            <MiniDrawer comp={<MyTable
                pageno={userpageno}
                apiUrl={`${apiBaseUrl}/api/users`}
                totalApiUrl={`${apiBaseUrl}/api/totalusers`}
                addDataUrl={`${apiBaseUrl}/admin/adduser`}
                deleteApiUrl={`${apiBaseUrl}/api/user`}
                tableHead={tableHead} />}
                drawerTitle='Users'
            />

        </div>
    )
}
export default withAuth(Users);
