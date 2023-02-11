import React from 'react'
import {boardIcon} from "../../../const"
import { useAppContext } from '../../../context/AppContext'


const Board = ({boardname}) => {
  const {currBoard,changeCurrBoard} = useAppContext()
  // alert(currBoard)
  return (
    <li onClick={()=>changeCurrBoard(boardname)} className={boardname == currBoard ? "board-item hover-item highlight" : "board-item hover-item"}>
    <img className="board-icon" src={boardIcon} alt="" />
    <h5 className={boardname == currBoard ? "board-name white" : "board-name"}>{boardname}</h5>
  </li>
  )
}

export default Board