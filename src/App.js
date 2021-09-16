import { useState } from "react"
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"

function App() {
  const name = "Izzuddin"
  const [showAddTask,setShowAddTask] = useState(false)
  const [tasks,setTasks] = useState([
    {
        id:1,
        text:"Doctor Appointment",
        day:"FEB",
        reminder: true,
    },
    {
        id:2,
        text:"Vaccine Appointment",
        day:"MARCH",
        reminder:true,
    },
    {
        id:3,
        text:"Steam Sales Shopping",
        day:"APRIL",
        reminder:false,
    },  
  ])

  const deleteTask = (id)=>{
    setTasks(
      tasks.filter(
        (task) => task.id !== id
      )
    )
  }

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) => 
        task.id  === id ? {...task,reminder:!task.reminder} : task)
    )
  }

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    console.log(task)
    const newTask = {id, ...task}

    setTasks([...tasks,newTask])
  }
  
  const onAddTask = () => {
    setShowAddTask(!showAddTask)
  }

  /* dalam curly braces tu boleh just standard js */
  return (
    <div className="container">
      <Header title={name} onAdd={onAddTask} changeButton={showAddTask}/>
      {showAddTask && <AddTask  onAdd={addTask}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No Tasks to show'}
    </div>
  );
}

export default App;
