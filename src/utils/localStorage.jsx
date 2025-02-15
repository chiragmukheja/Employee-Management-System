export const addTaskToEmployee = (employeeId, newTask) => {
    const { employees } = getLocalStorage();
    const employeeIndex = employees.findIndex(emp => emp.id === employeeId);
    
    if (employeeIndex !== -1) {
        employees[employeeIndex].tasks.push(newTask);
        employees[employeeIndex].taskCounts.newTask += 1; // Increment new task count
        setLocalStorage({ employees }); // Update local storage with the new employees array
    }
};

export const getTasksByEmployee = (employeeId) => {
    const { employees } = getLocalStorage();
    const employee = employees.find(emp => emp.id === employeeId);
    return employee ? employee.tasks : [];
};

const employees= [
    {
      "id": 1,
      "firstname": "Aarav",
      "email": "employee1@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Prepare Report",
          "taskDescription": "Create a monthly sales report",
          "taskDate": "2025-02-01",
          "category": "Reporting"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Client Meeting",
          "taskDescription": "Attend the client status meeting",
          "taskDate": "2025-01-25",
          "category": "Meeting"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Code Review",
          "taskDescription": "Review code submissions from team",
          "taskDate": "2025-02-03",
          "category": "Development"
        }
      ],
      "taskCounts": {
        "active": 2,
        "newTask": 1,
        "completed": 1,
        "failed": 0
      }
    },
    {
      "id": 2,
      "firstname": "Vivaan",
      "email": "employee2@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Design Mockups",
          "taskDescription": "Create design mockups for new project",
          "taskDate": "2025-02-05",
          "category": "Design"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Team Presentation",
          "taskDescription": "Prepare slides for team presentation",
          "taskDate": "2025-01-28",
          "category": "Presentation"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Database Update",
          "taskDescription": "Update the client database with new entries",
          "taskDate": "2025-02-04",
          "category": "Database"
        }
      ],
      "taskCounts": {
        "active": 2,
        "newTask": 1,
        "completed": 1,
        "failed": 0
      }
    },
    {
      "id": 3,
      "firstname": "Ishaan",
      "email": "employee3@example.com",
      "password": "123",
      "tasks": [
        {
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Server Maintenance",
          "taskDescription": "Perform routine server maintenance",
          "taskDate": "2025-02-02",
          "category": "IT"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Bug Fixing",
          "taskDescription": "Fix bugs reported in the last sprint",
          "taskDate": "2025-02-06",
          "category": "Development"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Security Audit",
          "taskDescription": "Conduct security audit for the application",
          "taskDate": "2025-01-29",
          "category": "Security"
        }
      ],
      "taskCounts": {
        "active": 1,
        "newTask": 1,
        "completed": 1,
        "failed": 0
      }
    },
    {
      "id": 4,
      "firstname": "Arjun",
      "email": "employee4@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Data Analysis",
          "taskDescription": "Analyze customer feedback data",
          "taskDate": "2025-02-07",
          "category": "Analytics"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Project Documentation",
          "taskDescription": "Document project milestones",
          "taskDate": "2025-01-30",
          "category": "Documentation"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Code Optimization",
          "taskDescription": "Optimize code for performance improvements",
          "taskDate": "2025-02-08",
          "category": "Development"
        }
      ],
      "taskCounts": {
        "active": 2,
        "newTask": 1,
        "completed": 1,
        "failed": 0
      }
    },
    {
      "id": 5,
      "firstname": "Krishna",
      "email": "employee5@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Marketing Strategy",
          "taskDescription": "Develop a new marketing strategy",
          "taskDate": "2025-02-09",
          "category": "Marketing"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Product Launch",
          "taskDescription": "Coordinate the product launch event",
          "taskDate": "2025-01-31",
          "category": "Event"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskTitle": "SEO Optimization",
          "taskDescription": "Improve website SEO rankings",
          "taskDate": "2025-02-10",
          "category": "SEO"
        }
      ],
      "taskCounts": {
        "active": 2,
        "newTask": 1,
        "completed": 1,
        "failed": 0
      }
    }
  ] 

    
const admin = {
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
}
  

export const setLocalStorage =()=>{
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage =()=>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    return {employees,admin};
}