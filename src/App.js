import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react';
import task from './components/Task';

function App() {
  const [tasks,setTasks] = useState([
    {
      id:1,
      text:"Learn React",
      reminder:true,
    },
    {
      id:2,
      text:"Java OOP",
      reminder:true,
    },
    {
      id:3,
      text:"Spring Framework",
      reminder:false,
    }
  ]) 

  const deleteTask = (id) => {
    setTasks(tasks.filter( (task) => task.id !== id ))
  }

  const toggleRemainder = (id) => {
    setTasks(tasks.map( (task) => task.id === id ?
    {...task, reminder : !task.reminder} : task )
    )
  }

  return (
    <div className="App">
      <Header/>
      { tasks.length >0 ?( <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleRemainder}/> ):'No Tasks Assigned'} 
    </div>
  );
}

export default App;
