import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState,useEffect } from 'react';
import AddTask from './components/AddTask';

function App() {

  const [showEdit,setShowEdit] = useState(false)
  const [showAdd,setShowAdd] = useState(false)
  const [tasks,setTasks] = useState([]) 

  useEffect( () => {
      const getTasks = async () => {
        const tasksFromServer = await fetchTasks()
        setTasks(tasksFromServer)
      }
      getTasks()
  },[])

  const fetchTasks = async() => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    console.log(data)
    return data
  }

  const fetchTask = async(id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id} `)
    const data = await res.json()
    console.log(data)
    return data
  }

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`,{method:"DELETE"})
    setTasks(tasks.filter( (task) => task.id !== id ))
  }

  const toggleRemainder = async (id) => {
    const taskToggle = await fetchTask(id)
    const upTask = {...taskToggle, reminder: !taskToggle.reminder}

    const res = await fetch(`http://localhost:5000/tasks/${id}`,{
      method:'PUT',
      headers:{'Content-type':'application/json'},
      body:JSON.stringify(upTask)
    })
    const data = await res.json()
    setTasks(tasks.map( (task) => task.id === id 
    ? {...task,reminder:data.reminder} : task
    ))
  }

  const addNewTask = async (task) => {
    console.log(task)
    const res = await fetch('http://localhost:5000/tasks',{
      method:'POST',
      headers:{'Content-type':'application/json'},
      body:JSON.stringify(task),
    })
    // console.log(task)
    const data = await res.json()
    setTasks([...tasks,data])
  }


  const editTask = (t) => {
    
  }

  return (
    <div className="App">
      <Header onShowAdd={() => setShowAdd(!showAdd)} showAdd={showAdd}/> 
      {showAdd && <AddTask onAddNewTask={addNewTask}/>}
      { tasks.length >0 ?( <Tasks tasks={tasks} onShowEdit={() => setShowEdit(!showEdit)} showEdit={showEdit} onEditTask={editTask} onDelete={deleteTask} onToggle={toggleRemainder}/> ):'No Tasks Assigned'} 
    </div>
  );
}

export default App;
