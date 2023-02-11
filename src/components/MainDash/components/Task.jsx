import React from 'react'
import "./Components.css"


const Task = ({task}) => {
  return (
    <li className="task-item">
        <h3 className="task-title">{task.title}</h3>
        <h4 className="subtask-caption">{task.subtasks.filter(t=>t.isCompleted).length} of {task.subtasks.length} subtasks</h4>
    </li>
  )
}

export default Task