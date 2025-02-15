import React, { useState } from 'react'
import NewTask from '../TaskList/NewTask'
import { addTaskToEmployee, getLocalStorage } from '../../utils/localStorage'; // Import the function

const CreateTask = () => {
    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [assignTo, setAssignTo] = useState('')
    const [category, setCategory] = useState('')

    const [newTask, setNewTask] = useState({})

    const submitHandler = (e) => {
        e.preventDefault();
        
        const newTask = {
            taskTitle,
            taskDescription,
            taskDate,
            category,
            active: false,
            newTask: true,
            failed: false,
            completed: false
        };
    
        // Reset form fields
        setTaskTitle('');
        setTaskDescription('');
        setTaskDate('');
        setAssignTo('');
        setCategory('');
    
        // Retrieve employee data from local storage
        const { employees } = getLocalStorage(); // Get employees from local storage
    
        const employee = employees.find(emp => emp.firstname === assignTo);
        if (employee) {
            console.log("Adding task to employee:", employee.firstname); // Debug log
            addTaskToEmployee(employee.id, newTask); // Add task to employee
        } else {
            console.error("Employee not found:", assignTo); // Debug log
        }
    };

  return (
    <div className='p-5 bg-[#242323] mt-7 rounded'>
    <form onSubmit={(e)=>{
        submitHandler(e);
    }} 
        className='flex flex-wrap w-full items-start justify-between '>
            <div className='w-1/2'>
                <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                <input 
                value = {taskTitle}
                onChange={(e)=>setTaskTitle(e.target.value)}
                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder="Enter task title"/>
                <div>
                <h3 className='text-sm text-gray-300 mb-0.5'>Due Date</h3>
                <input 
                value = {taskDate}
                onChange={(e)=>setTaskDate(e.target.value)}
                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="date"/>
            </div>
            <div>
                <h3 className='text-sm text-gray-300 mb-0.5'>Assign to:</h3>
                <input
                value = {assignTo}
                onChange={(e)=>setAssignTo(e.target.value)}
                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Employee Name'/>
            </div>
            <div>
                <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                <input
                value = {category}
                onChange={(e)=>setCategory(e.target.value)}
                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='dev, design, etc.' />
            </div>
            
            </div>
            <div className='w-2/5 flex flex-col items-start'>
                <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                <textarea 
                value = {taskDescription}
                onChange={(e)=>setTaskDescription(e.target.value)}
                className='text-sm py-2 px-4 h-44 w-full rounded outline-none bg-transparent border-[1px] border-gray-400 ' cols='30' rows='10' placeholder="Enter task description"/>
                <button className='bg-green-500 py-3 hover:bg-green-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
        </div>
        
    </form>
  </div>
  )
}

export default CreateTask
