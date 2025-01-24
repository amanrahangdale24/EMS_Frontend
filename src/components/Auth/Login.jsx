import React, { useState } from 'react'

const Login = ({handleSubmit}) => {
    
    const [formData, setFormData] = useState({
        email : "",
        password: ""
    }); 
    
    const handleChange = (e)=>{
        const name = e.target.name 
        const value = e.target.value
        setFormData({...formData, [name]:value}); 
    }

    const submitHandler = (e)=>{
        e.preventDefault(); 
        handleSubmit(formData.email, formData.password);
        setFormData({
            email:"",
            password:""
        }); 
    }
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
                        <div className="flex items-center justify-between">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-600 rounded bg-gray-700 focus:ring-primary-600" required="" />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="remember" className="text-gray-300">Remember me</label>
                                </div>
                            </div>

                        </div>
                        <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                            Sign in
                        </button>
                        <p className="text-sm font-light text-gray-400">
                            Don’t have an account yet? <a href="#" className="font-medium text-primary-500 hover:underline">Sign up</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default Login
