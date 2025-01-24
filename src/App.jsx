import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/dashboard/EmployeeDashboard'
import AdminDashboard from './components/dashboard/AdminDashboard'

import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null); 
  const [userData,setUserdata]  = useContext(AuthContext); 

  useEffect(()=>{
    const loggedInUser = localStorage.getItem('loggedInUser'); 
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUser(userData.data)
    }
  },[])
 

  const handleSubmit = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
        setUser("admin");
        localStorage.setItem("loggedInUser",JSON.stringify({role:"admin"}))
    }
    else if (userData) {
      const employee = userData.find((e)=> email == e.email && e.password == password); 
      if(employee){
        setUser("employee");
        localStorage.setItem("loggedInUser",JSON.stringify({role:"employee" ,data:employee}))
        setLoggedInUser(employee)
      }

    } else {
      alert("Invalid Credentials")
    }
  }
  
  return (
    <div>
       
      {!user ? <Login handleSubmit={handleSubmit} />: ''}
      {user == 'admin'? <AdminDashboard changeUser={setUser} /> : (user == 'employee' ? <EmployeeDashboard changeUser={setUser}  data={loggedInUser}/>: null)}
    </div>
  )
}

export default App
