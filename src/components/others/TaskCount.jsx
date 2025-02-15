import React from 'react'

const TaskCount = ({data}) => {
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
        <div className='py-6 px-9 rounded-2xl w-[45%] bg-blue-500'>
            <h2 className='text-3xl font-bold'>{data.taskCounts.newTask}</h2>
            <h3 className='text-xl font font-medium'>New Task</h3>
        </div>
        <div className='py-6 px-9 rounded-2xl w-[45%] bg-green-500'>
            <h2 className='text-3xl font-bold'>{data.taskCounts.completed}</h2>
            <h3 className='text-xl font font-medium'>Completed Task</h3>
        </div><div className='py-6 px-9 rounded-2xl w-[45%] bg-yellow-500'>
            <h2 className='text-3xl font-bold'>{data.taskCounts.active}</h2>
            <h3 className='text-xl font font-medium'>Accepted Task</h3>
        </div><div className='py-6 px-9 rounded-2xl w-[45%] bg-red-500'>
            <h2 className='text-3xl font-bold'>{data.taskCounts.failed}</h2>
            <h3 className='text-xl font font-medium'>Failed Task</h3>
        </div>
    </div>
  )
}

export default TaskCount
