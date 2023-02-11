import React from 'react'
import Board from "./Board"
import { boardIcon } from '../../../const'
import { useAppContext } from '../../../context/AppContext'
import "./Components.css"

const Boards = () => {
  const {boards,toggleModalView} = useAppContext()
  return (
    <div className="boards">
      <h4 className="boards-header">All Boards ({boards.length})</h4>
      <ul className="boards-list">
      {boards.map(b=>(
      <Board key={b.id} boardname={b.name}/>
      ))}
         <li className="board-item modal-btn">
    <img className="board-icon" src={boardIcon} alt="" />
    <button onClick={(e)=>toggleModalView({type:"add",is_board:true})} className="board-name purple add-new">+ Create New Board</button>
  </li>
      </ul>

    </div>
  )
}

export default Boards