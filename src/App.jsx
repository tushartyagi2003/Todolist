// import Counter from "./components/Counter"
import React, { useState } from "react";
import InputTask from "./components/InputTask";
import TaskItem from "./components/TaskItem";


function App() {

  const [todoList, setTodoList] = useState([])

  const addTask = (taskname) => {
    const newtask = {taskname, checked:false}
    setTodoList([...todoList, newtask])

  }
  // console.log(todoList)

  const ToggleCheck = (taskname) =>{
    setTodoList((prevtodoList) => 
      prevtodoList.map((task) => 
         task.taskname === taskname ? {...task, checked: !task.checked} : task,
  )
      
      );
  }

  const DeleteTask = (deleteTaskname) => {
    setTodoList(todoList.filter((task) => task.taskname !== deleteTaskname));
  }
  

  return (
    <>
     {/* <Counter/> */}

     <h1>TUSHAR TYAGI</h1>

     <InputTask addTask ={addTask} />
      <div>
        <ul>
          {todoList.map((task,key) => (
            <TaskItem task={task} key={key} ToggleCheck={ToggleCheck} DeleteTask={DeleteTask}  />
          ))}
        </ul>

        {todoList.length === 0 ? <p>You R Done Bro !!</p> : null}
      </div>
   </>
  )
}

export default App
