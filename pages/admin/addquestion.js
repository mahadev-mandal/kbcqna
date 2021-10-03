import React from 'react'
import AddQues from '../../components/AddQues'
import MiniDrawer from '../../components/Drawer'
import withAuth from '../../HOC/withAuth'

function Addquestion() {
    return (
        <div>
            <MiniDrawer comp={<AddQues />} drawerTitle='Add questions'/>
            
        </div>
    )
}
export default withAuth(Addquestion);