import React from 'react'

const Header = (props) => {
  
  const logOut = ()=>{
    localStorage.setItem("loggedInUser",""); 
    props.changeUser(''); 
    // window.location.reload(); 
  }
  return (
    <div>
        <div className='flex items-end justify-between'>
            <h1 className='text-2xl font-semibold'>Hello, <br /> <span className='text-3xl'>dear 👋</span></h1>
            <button onClick={logOut} className='bg-red-400 px-3 py-2 text-lg font-medium rounded-lg '>Logout</button>
        </div>
    </div>
  )
}

export default Header
