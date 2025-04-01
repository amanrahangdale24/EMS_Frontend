const apis =()=>{
    const local = "https://ems-backend-final.onrender.com/"
    const list = {
        registerUser : `${local}user/register`,
        loginUser : `${local}user/login`,
        getUserDetails: `${local}user/getUserDetails`,
        logout: `${local}user/logout`,
        getTasks:`${local}task/get`,
        acceptTask:`${local}task/acceptTask`,
        markAsCompleted:`${local}task/markCompleted`,
        markAsFailed:`${local}task/markFailed`,
        crateTask:`${local}task/create`,
        all_employees:`${local}emp/employees`
    }

    return list
}

export default apis; 