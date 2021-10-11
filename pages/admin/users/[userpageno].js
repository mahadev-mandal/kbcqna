import React from 'react'
import MiniDrawer from '../../../components/Drawer'
import { useRouter } from 'next/router'
import MyTable from '../../../components/Table'
import withAuth from '../../../HOC/withAuth'
import { baseURL } from '../../../helpers/constants'

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
                apiUrl={`${baseURL}/api/users`}
                totalApiUrl={`${baseURL}/api/totalusers`}
                addDataUrl={`${baseURL}/admin/adduser`}
                deleteApiUrl={`${baseURL}/api/user`}
                tableHead={tableHead} />}
                drawerTitle='Users'
            />

        </div>
    )
}
export default withAuth(Users);
