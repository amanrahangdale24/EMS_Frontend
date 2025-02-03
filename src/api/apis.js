const apis =()=>{
    const local = "http://localhost:4044/"
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