import TaskBtns from './TaskBtns'

const Task = ({task,onDelete,onToggle,onShowEdit,showEdit,onEditTask}) => {
  return (
    showEdit ?
    (<div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
    <h3>{task.text} <TaskBtns onEditTask={() => onEditTask(task)} onShowEdit={onShowEdit} onDelete={() => onDelete(task.id)}/> </h3>
    <h5>{task.day}</h5>
    </div>)
    :
    (<div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
        <h3>{task.text} <TaskBtns onEditTask={() => onEditTask(task)} onShowEdit={onShowEdit} onDelete={() => onDelete(task.id)}/> </h3>
        <h5>{task.day}</h5>
    </div>)
  )
}

export default Task