import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const Tasks = () => {
    const { userData } = useContext(AuthContext); // Access userData from context
  return (
    <div className="bg-[#242323] p-5 rounded mt-5">
    <div className='bg-blue-400 mb-3 py-2 px-4 flex justify-between rounded-xl'>
        <h2 className='w-1/5 text-lg'>Employee Name</h2>
        <h3 className='w-1/5 text-lg'> New Task</h3>
        <h5 className='w-1/5 text-lg'>Active</h5>
        <h5 className='w-1/5 text-lg'>Completed</h5>
        <h5 className='w-1/5 text-lg'>Failed</h5>
    </div>
    <div>
    {userData && userData.employees.map(function(elem, idx){
            return(
                <div key={idx} className='border-blue-400 border-1 mb-3 py-2 px-4 flex justify-between rounded-xl' >
                <h2 className='w-1/5 text-lg font-semibold'>{elem.firstname}</h2>
                <h3 className='w-1/5 text-lg'>{elem.taskCounts.newTask}</h3>
                <h5 className='w-1/5 text-lg'>{elem.taskCounts.active}</h5>
                <h5 className='w-1/5 text-lg'>{elem.taskCounts.completed}</h5>
                <h5 className='w-1/5 text-lg'>{elem.taskCounts.failed}</h5>
                </div>
            )
        })}
    </div>
    </div>
  )
}

export default Tasks
