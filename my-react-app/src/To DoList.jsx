import React, { useState } from 'react'

function ToDoList(){

    const[task, setTask] = useState([]);
    const[newTask, setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){

        if(setNewTask.trim() !== ""){
            setTask(t => [...t, newTask]);
            setTask("");
        }
    }

    function deleteTask(index){
        const updatedTask = task.filter((_, i) => i != index);
        setTask(updatedTask);
    }

    function moveTaskUp(index){
        if (index > 0){
            const updatedTask = [...task];
            [updatedTask[index], updatedTask[index-1]] = 
            [updatedTask[index-1], updatedTask[index]]
            setTask(updatedTask);
        }
    }

    function moveTaskDown(index){
        if (index < task.length - 1){
            const updatedTask = [...task];
            [updatedTask[index], updatedTask[index+1]] = 
            [updatedTask[index+1], updatedTask[index]]
            setTask(updatedTask);
        }

    }


    return(<div className='To-do-list'>

        <h1>To-Do-List</h1>

        <div>
            <input type='text' placeholder='Enter task here...' 
            value={newTask} onChange={handleInputChange}/>
            <button className='add-button'
            onClick={addTask}>ADD
            </button>
        </div>
            <ol>
                {task.map((task, index) => <li key={index} >
                    <span className='text'>{task}</span>
                    <button className='Delete-Btn'
                    onClick={() =>deleteTask(index)}>
                        DELETE
                    </button>
                    <button className='Up-Btn'
                    onClick={() =>moveTaskUp(index)}>
                        UP
                    </button>
                    <button className='Down-Btn'
                    onClick={() =>moveTaskDown(index)}>
                        DOWN
                    </button>
                    </li>)}
            </ol>

    </div>)
}

export default ToDoList