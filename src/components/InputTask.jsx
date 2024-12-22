import React, { useState } from "react";

const InputTask = ({addTask}) => {

    const [task, setTask] = useState('')
    // console.log(task)

    // handle input value
    const handleInputValue = (e) => {
        setTask(e.target.value)
    } 

    // Handle submit
     const handleAddTask = (e) => {
        e.preventDefault()
        if(task.trim() === '') return;
        addTask(task)
        setTask('')
     }


  return (
    <>
       <form onSubmit={handleAddTask}>
        <input type="text" value={task} placeholder="Enter a task"  onChange={handleInputValue}/>
        <button >ADD</button>
       </form>
    </>
  )
}

export default InputTask