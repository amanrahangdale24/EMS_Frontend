import React, { createContext, useEffect, useState } from 'react'
import httpAction from '../utils/httpAction'
import apis from '../api/apis'

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserdata] = useState(null);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await httpAction({
          url: apis().getUserDetails,
          method: "GET",
          credentials: 'include' // To include cookies
        });

        if (response?.status) {
          setUserdata(response.user);
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, []);

  
  return (
    <div>
      <AuthContext.Provider value={{ userData, setUserdata }}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
