import React, { useState, useEffect, useContext } from 'react';
import Login from './components/Auth/Login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { AuthContext } from './context/AuthProvider';

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const authData = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');

    if(loggedInUser){
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role)
      setLoggedInUserData(userData.data);
    }
  }, []);

  const handleLogin = (email, password) => {
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    console.log("Attempting to log in with:", trimmedEmail, trimmedPassword);
    console.log("Current authData:", authData);

    if (trimmedEmail === 'admin@me.com' && trimmedPassword === '123') {
        setUser('admin');
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }));
    } else if (authData && authData.userData && authData.userData.employees) {
        const employee = authData.userData.employees.find((e) => 
            trimmedEmail === e.email && trimmedPassword === e.password
        );
        console.log("Found employee:", employee);
        if (employee) {
            setUser('employee');
            setLoggedInUserData(employee);
            localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }));
        } else {
            alert('Invalid Credentials');
        }
    } else {
        alert('Invalid Credentials');
    }
};

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == 'admin' ? <AdminDashboard changeUser={setUser}/> : (user == 'employee' ? <EmployeeDashboard changeUser={setUser} data= {loggedInUserData}  /> : null)}
    </>
  );
};

export default App;
