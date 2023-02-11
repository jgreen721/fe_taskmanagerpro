import React from 'react'
import Task from "./Task"
import "./Components.css"

const Column = ({column,color}) => {
  return (
    <div className="column">
        <h3 className="column-header"><div className={`dot ${color}`}></div>{column.name}</h3>
        <ul className="tasks-list">
            {column.tasks.map(t=>(
                <Task key={t.title} task={t}/>
            ))}
        </ul>
    </div>
  )
}

export default Column