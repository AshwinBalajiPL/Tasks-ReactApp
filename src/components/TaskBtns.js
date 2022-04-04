import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { FaPenSquare } from 'react-icons/fa';

const TaskBtns = ({onDelete}) => {
  return (
    <p>
        <FaPenSquare id='edit-btn' /> <FaTrashAlt id='delete-btn' onClick={onDelete}/>
    </p>
  )
}

export default TaskBtns