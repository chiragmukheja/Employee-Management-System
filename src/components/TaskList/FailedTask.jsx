import React from 'react'

const FailedTask = ({data}) => {
  return (
<div className='flex flex-col h-full p-5 w-[300px] bg-gray-800 rounded-xl'>
  {/* Category and Date */}
  <div className='flex items-center justify-between'>
    <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
    <h4 className='text-sm'>{data.taskDate}</h4>
  </div>

  {/* Task Title & Description */}
  <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
  <p className='text-sm mt-1 flex-grow'>{data.taskDescription}</p>

  <div className='mt-auto flex justify-between'>
  <button className='w-full text-sm bg-red-600'>Failed</button>
  </div>
</div>
  )
}

export default FailedTask
