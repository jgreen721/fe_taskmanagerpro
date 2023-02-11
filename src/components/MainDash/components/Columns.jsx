import React from 'react'
import "./Components.css"
import Column from "./Column.jsx"

const Columns = ({columns}) => {
  console.log(columns)
  return (
    <div className="columns-container">
{columns.map((c,idx)=>(
  <Column column={c} key={c.name} color={idx == 0 ? "blue" : idx == 1 ? "light-purple" : "green"}/>
))}
    </div>
  )
}

export default Columns