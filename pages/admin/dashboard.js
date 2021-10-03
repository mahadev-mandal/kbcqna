import React from 'react'
import MiniDrawer from '../../components/Drawer'
import withAuth from '../../HOC/withAuth'

function Dashboard() {

    return (
        <>
            <MiniDrawer  drawerTitle="Dashboard"/>
        </>
    )
}

export default withAuth(Dashboard)
