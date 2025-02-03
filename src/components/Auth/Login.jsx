import React, { useState, useContext } from 'react'
import toast from "react-hot-toast"
import apis from "../../api/apis"
import httpAction from '../../utils/httpAction'
import { Link } from 'react-router-dom'
import useProvideHooks from '../../hooks/useProvider'
import { AuthContext } from '../../context/AuthProvider'


const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const {navigate}  = useProvideHooks(); // ✅ Corrected navigation hook
    const { setUserdata, setTasks} = useContext(AuthContext); // ✅ Get context function

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

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
    
    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const data = {
                url: apis().loginUser, 
                method: "POST",
                body: JSON.stringify(formData),
            };

            const result = await httpAction(data);
            console.log("API Response:", result);

            if (result?.status) {
                setUserdata(result.user); 
                fetchTasks(result.user.userId);
                navigate('/')
                toast.success("User Logged In Successfully")
                
            } else {
                toast.error(result.message || "Invalid credentials");
            }
        } catch (error) {
            console.error("Login Error:", error);
            toast.error("Something went wrong");
        }

        setFormData({
            email: "",
            password: "",
        });
    };

    
    return (
        <>
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-black rounded-lg shadow border border-gray-600 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl">
                            Sign in to your account
                        </h1>
                        <form onSubmit={submitHandler} className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Your email</label>
                                <input type="email" name="email" id="email" className="bg-black border border-gray-600 text-white rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@company.com" required value={formData.email} onChange={handleChange} />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-black border border-gray-600 text-white rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required value={formData.password} onChange={handleChange} />
                            </div>
                            <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                Sign in
                            </button>
                            <p className="text-sm font-light text-gray-400">
                                Don’t have an account yet? <Link to="/signup" className="font-medium text-primary-500 hover:underline">Sign up
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
