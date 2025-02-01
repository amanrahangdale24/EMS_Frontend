import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'

const AdminDashboard = (props) => {
  return (
    // <div>
    //   <h1>Admin Dashborad</h1>
    // </div>
    // <div className='p-10 w-full'>
    //     <Header changeUser={props.changeUser}/>
    //     <CreateTask/>
    //     <AllTask/>
    // </div>
    <div className='mt-20 px-10 h-screen'>
        <Header />
        <CreateTask/>
        <AllTask/>
    </div>
  )
}

export default AdminDashboard
