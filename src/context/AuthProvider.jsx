import React, { createContext, useEffect, useState } from 'react'
import httpAction from '../utils/httpAction'
import apis from '../api/apis'

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserdata] = useState(null);
  const [tasks, setTasks] = useState([]);
  
  
  useEffect(() => {
    const fetchUser = async () => {
      try {
        // console.log("Fetching user data..."); // 🔍 Debugging log
        const response = await httpAction({
          url: apis().getUserDetails,
          method: "GET",
          credentials: 'include',
        });

        if (response?.status) {
          // console.log("User data fetched:", response.user); // 🔍 Debugging log
          setUserdata(response.user);
          fetchTasks(response.user._id); // Fetch tasks for the logged-in user
        } else {
          console.log("No user found");
        }
      } catch (error) {
        console.error("Error fetching user:", error);
        
      }
    };

    if (!userData) {
      fetchUser(); // Fetch user data if not already available in the context
    }
  }, [userData]);

  const fetchTasks = async (employeeId) => {
    try {
      const response = await httpAction({
        url: `${apis().getTasks}/${employeeId}`,
        method: 'GET',
        credentials: 'include',
      });

      if (response?.status) {
        setTasks(response.tasks); // Store fetched tasks in state
      } else {
        setTasks([]); // Empty array if no tasks found
      }
    } catch (error) {
      console.error("Error fetching tasks:", error);
      setTasks([]); // Empty array in case of error
    }
  };

  return (
    <div>
      <AuthContext.Provider value={{ userData, setUserdata, tasks, setTasks }}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
