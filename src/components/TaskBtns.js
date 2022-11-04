import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { FaPenSquare } from 'react-icons/fa';

const TaskBtns = ({onDelete,onShowEdit}) => {
  return (
    <p>
        <FaPenSquare id='edit-btn' onClick={onShowEdit} /> <FaTrashAlt id='delete-btn' onClick={onDelete}/>
    </p>
  )
}

export default TaskBtns