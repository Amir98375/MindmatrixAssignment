import React, { useState } from 'react';
import '../App.css'
import Swal from 'sweetalert2';

function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [assignee, setAssignee] = useState('');

  const handleAddTask = () => {
    if(assignee){
        if (newTask.trim() !== '') {
            setTasks([
              ...tasks,
              {
                id: tasks.length + 1,
                title: newTask,
                assignee: assignee || 'Unassigned'
              }
            ]);
            setNewTask('');
            setAssignee('');
          }
    }else{
        Swal.fire({
            // title: "Enter Name Of Assignee",
            text: "Enter Assignee Name",
            icon: "error"
          });
    }

  };

  const handleDeleteTask = id => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <div>
 
      <input
        className='city-search'
          type="text"
          placeholder="Assigned To"
          value={assignee}
          onChange={e => setAssignee(e.target.value)}
        /> 

 
     
      </div>
      <br></br>
      <div>
      <input
        className='city-search'
          type="text"
          placeholder="Task"
          value={newTask}
          onChange={e => setNewTask(e.target.value)}
        />
  
      </div>
      <br></br>
      <button onClick={handleAddTask} className='button'>Add Task</button>
      <div>
        <h2>Tasks:</h2>
        <ul>
          {tasks.map(task => (
            <li key={task.id}>
              {task.title} - Assigned to: {task.assignee}
              <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TaskManager;
