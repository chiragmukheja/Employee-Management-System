import React, { createContext, useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [userData, setUserData] = useState(null);
    const [tasks, setTasks] = useState([]); // New state for tasks


    useEffect(() => {
        setLocalStorage(); // Ensure local storage is populated
        const {employees, admin} = getLocalStorage();
        setUserData({employees, admin});
        setTasks(employees.flatMap(emp => emp.tasks)); // Initialize tasks from employees
    }, []);

    const addTask = (employeeId, newTask) => {
      addTaskToEmployee(employeeId, newTask); // Use the function from localStorage
      setTasks(prevTasks => [...prevTasks, newTask]); // Update local state
  };
    
    return (
        <AuthContext.Provider value={{ userData, tasks, addTask }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
