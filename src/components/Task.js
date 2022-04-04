import React from 'react'
import TaskBtns from './TaskBtns'

const task = ({task,onDelete,onToggle}) => {
  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
        <h3>{task.text} <TaskBtns onDelete={() => onDelete(task.id)}/> </h3>
    </div>
  )
}

export default task