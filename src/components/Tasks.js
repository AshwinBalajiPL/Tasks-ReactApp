import React from 'react'
import Task from './Task'
  
const Tasks = ({tasks,onDelete,onToggle,showEdit,onShowEdit,onEditTask}) => {
  return (
    <>
        {tasks.map((task) => (<Task key={task.id} showEdit={showEdit} onShowEdit={onShowEdit} onEditTask={onEditTask} task={task} onDelete={onDelete} onToggle={onToggle}/>))}
    </>
  )
}

export default Tasks