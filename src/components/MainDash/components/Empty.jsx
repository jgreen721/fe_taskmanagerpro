import React from 'react'
import "./Components.css"
import { useAppContext } from '../../../context/AppContext'

const Empty = () => {
  const {toggleModalView} = useAppContext()
  return (
    <div className="empty-card">
        <h5 className="empty-h5">This board is empty. Create a new column to get started.</h5>
        <button onClick={()=>toggleModalView({type:"edit",is_board:true})} className="btn primary">+ Add New Column</button>
    </div>
  )
}

export default Empty