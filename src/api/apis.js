const apis =()=>{
    const local = "http://localhost:4044/"
    const list = {
        registerUser : `${local}user/register`,
        loginUser : `${local}user/login`,
        getUserDetails: `${local}user/getUserDetails`,
        logout: `${local}user/logout`,
        getTasks:`${local}task/get`
    }

    return list
}

export default apis; 