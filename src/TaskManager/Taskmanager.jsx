import React, { useEffect, useState } from 'react';
import '../App.css'
import Swal from 'sweetalert2';
import { MdDelete } from "react-icons/md";
import { ReactUtilityTable } from 'react-utility-table';

function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [assignee, setAssignee] = useState('');
  const [todoList,setTodoList]=useState({})
  const [selectedUser,setSelectedUser]=useState('')
  const handleAddTask = () => {
    if (assignee && newTask.trim() !== '') {
      setTodoList(prevTodoList => {
        const updatedTodoList = { ...prevTodoList };
        if (updatedTodoList.hasOwnProperty(assignee)) {
          updatedTodoList[assignee] = updatedTodoList[assignee].concat(newTask);
        } else {
          updatedTodoList[assignee] = [newTask];
        }
        return updatedTodoList;
      });
      setNewTask('');
      setAssignee('');
    } else {
      Swal.fire({
        text: "Please enter both assignee name and task",
        icon: "error"
      });
    }
  };
  
  // const handleAddTask = () => {
  //   if(assignee){
      
  //     setTodoList(prevTodoList => {
  //       const updatedTodoList = { ...prevTodoList };
  //       if (updatedTodoList.hasOwnProperty(assignee)) {
  //         updatedTodoList[assignee] = updatedTodoList[assignee].concat(newTask);
  //       } else {
  //         updatedTodoList[assignee] = newTask;
  //       }
  //       return updatedTodoList;
  //     });
  //               setNewTask('');
  //           setAssignee('');
      
  //       // if (newTask.trim() !== '') {
  //       //     setTasks([
  //       //       ...tasks,
  //       //       {
  //       //         id: tasks.length + 1,
  //       //         title: newTask,
  //       //         assignee: assignee || 'Unassigned'
  //       //       }
  //       //     ]);
  //       //     setNewTask('');
  //       //     setAssignee('');
  //       //   }
  //   }else{
  //       Swal.fire({
  //           // title: "Enter Name Of Assignee",
  //           text: "Enter Assignee Name",
  //           icon: "error"
  //         });
  //   }

  // };
  console.log(todoList,'todoList')
  useEffect(() => {
    if (selectedUser) {
      const filteredTasks = todoList[selectedUser] || [];
      setTasks(filteredTasks);
    } else {
      setTasks([]);
    }
  }, [selectedUser, todoList]);
function setDataToTable(){
  let filterArr=todoList.filter()
}
  const handleDeleteTask = id => {
    setTasks(tasks.filter(task => task.id !== id));
  };
console.log(tasks,"my task filtered")
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
      <br /><br />
      <select value={selectedUser} onChange={e => setSelectedUser(e.target.value)}>
          <option value="">Select Assignee</option>
          {Object.keys(todoList).map((user, index) => (
            <option key={index} value={user}>{user}</option>
          ))}
          {/* Add more options as needed */}
        </select>

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
        // data={tasks}
        // data={tasks.map((task, index) => ({ task, assignee: selectedUser }))}
        data={tasks.map((task, index) => ({ task, assignee: selectedUser }))}
        // data={filteredTasks.map((task, index) => ({ task, assignee }))}
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
