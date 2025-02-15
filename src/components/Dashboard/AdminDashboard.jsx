import React, { useContext } from 'react'
import Header from '../others/Header'
import CreateTask from '../others/CreateTask'
import Tasks from '../others/Tasks'
import { AuthContext } from '../../context/AuthProvider'

const AdminDashboard = (props) => {
    const { tasks } = useContext(AuthContext); // Access tasks from context
  return (
    <div  className='p-10 bg-[#1c1c1c] h-screen'>
      <Header changeUser={props.changeUser} />
      <CreateTask />
      <Tasks tasks={tasks} />
    </div>
  )
}

export default AdminDashboard
