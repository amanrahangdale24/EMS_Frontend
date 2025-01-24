
import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage'

export const AuthContext = createContext(); 


const AuthProvider = ({children}) => {
  
    const [userData,setUserdata] = useState(null);
    useEffect(()=>{
        setLocalStorage(); 
        const {employees} = getLocalStorage(); 
        setUserdata(employees); 
    },[])
  return (
    <div>
        <AuthContext.Provider value={[userData,setUserdata]}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
