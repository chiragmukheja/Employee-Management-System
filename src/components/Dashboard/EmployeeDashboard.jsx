import React, { useContext } from 'react';
import Header from '../others/Header';
import TaskCount from '../others/TaskCount';
import TaskList from '../TaskList/TaskList';
import { AuthContext } from '../../context/AuthProvider';

const EmployeeDashboard = (props) => {
    const { userData } = useContext(AuthContext); // Access userData from context
    const employeeId = props.data.id; // Get the logged-in employee's ID
    const employeeTasks = userData.employees.find(emp => emp.id === employeeId)?.tasks || []; // Get tasks for the logged-in employee


    return (
        <div className='p-10 bg-[#1c1c1c] h-screen'>
            <Header changeUser={props.changeUser} data={props.data} />
            <TaskCount data={props.data} />
            <TaskList data={employeeTasks} /> {/* Pass only the employee's tasks to TaskList */}
        </div>
    );
}

export default EmployeeDashboard;
