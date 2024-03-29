import React, { useState } from 'react';
import '../App.css'
import Swal from 'sweetalert2';
import { MdDelete } from "react-icons/md";
import { ReactUtilityTable } from 'react-utility-table';

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
          required={true}
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
          required={true}
        />
  
      </div>
      <br></br>
      <button onClick={handleAddTask} className='button'>Add Task</button>
      <div>
        {/* <h2>Tasks:</h2>
        <ul>
          {tasks.map(task => (
            <li key={task.id}>
              {task.title} - Assigned to: {task.assignee}
              <button style={{
          
                background:'white',
                borderColor:'black',
                borderRadius:'10px',
              
              }} onClick={() => handleDeleteTask(task.id)}><MdDelete color='blue' /></button>
            </li>
          ))}
        </ul> */}
      </div>
      <ReactUtilityTable
        style={{ width: "100%" }}
        title={"All Data"}
        columns={[
          {
            title: "Task",
            field: "title",
          },
          {
            title: "Assigned To",
            field: "assignee",
          },
       
        ]}
        options={{
          headerStyle: {
            backgroundColor: "#14a4de",
            color: "#FFF",
            whiteSpace: "nowrap",
            padding: 0,
          },
        }}
        data={tasks}
        actions={
          [
            // {
            //     icon: 'delete',
            //     onClick: (evt, rowData) =>
            //         dialogOpen(rowData)
            // }
            // {
            //     icon: () => <Exportexcel columns={tableColumn} excelName={props.t("list_of_rejected_customer")} excelData={tableData} />,
            //     tooltip: props.t("download_excel"),
            //     isFreeAction: true,
            // }
          ]
        }
      />
    </div>
  );
}

export default TaskManager;
