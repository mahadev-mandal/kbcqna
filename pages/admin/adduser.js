import React from 'react'
import AddUser from '../../components/AddUser'
import MiniDrawer from '../../components/Drawer'
import withAuth from '../../HOC/withAuth'

function Adduser() {
    return (
        <div>
            <MiniDrawer comp={<AddUser/>} drawerTitle="Add User" />
        </div>
    )
}
export default withAuth(Adduser)