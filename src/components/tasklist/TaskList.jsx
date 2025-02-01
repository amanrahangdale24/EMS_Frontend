import React from 'react'
import AcceptedTask from './AcceptedTask'
import NewTask from './NewTask'
import CompletedTask from './CompletedTask'
import FailedTask from './FailedTask'

const TaskList = () => {
    const data = [1, 2, 3, 4]
    return (
        // <div id='tasklist' className='overflow-auto w-full h-[55%]  mt-10 flex gap-5 py-10 flex-nowrap justify-start items-center'>
        //     {data.tasks.map((elem, idx) => {
        //         if (elem.active) {
        //             return <AcceptedTask key={idx} data={elem} />
        //         }
        //         if (elem.newTask) {
        //             return <NewTask key={idx} data={elem} />
        //         }
        //         if (elem.completed) {
        //             return <CompletedTask key={idx} data={elem} />
        //         }
        //         if (elem.failed) {
        //             return <FailedTask key={idx} data={elem} />
        //         }
        //     })}
        // </div>
        <div className="max-w-screen-xl flex items-center justify-between mx-auto px-5 ">
            <div id='tasklist' className='overflow-auto w-full h-[55%]  mt-10 flex gap-5 py-10 flex-nowrap justify-start items-center'>
                {data.map((elem, idx) => {
                    return <AcceptedTask key={idx} />
                })}
            </div>
        </div>
    )
}

export default TaskList
