import React from 'react'

const NewTask = ({data}) => {
    console.log(data)
    return (
        // <div className='flex-shrink-0  p-5 h-full w-[330px] rounded-xl bg-orange-500 '>
        //     <div className='flex justify-between items-center'>
        //         <h3 className='bg-red-600 text-sm py-1 px-3 rounded font-semibold'>{data.taskCategory}</h3>
        //         <h4 className='text-sm font-semibold'>{data.taskDate}</h4>
        //     </div>
        //     <h1 className='text-xl mt-5 font-semibold '>{data.taskTitle}</h1>
        //     <p className='mt-2 text-base'>{data.taskDesc}</p>
        //     <div className='mt-4 '>
        //         <button className='bg-green-500 w-full rounded py-1 px-2 text-sm'>Accept Task </button>
        //     </div>
        // </div>
        <div className='flex-shrink-0  p-5 h-full w-[330px] rounded-xl bg-orange-500 '>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm py-1 px-3 rounded font-semibold'>Design</h3>
                <h4 className='text-sm font-semibold'>2025-02-10</h4>
            </div>
            <h1 className='text-xl mt-5 font-semibold '>Design mern project</h1>
            <p className='mt-2 text-base'>Complete it within the time</p>
            <div className='mt-4 '>
                <button className='bg-green-500 w-full rounded py-1 px-2 text-sm'>Accept Task </button>
            </div>
        </div>
    )
}

export default NewTask
