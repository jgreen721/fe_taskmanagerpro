import React, {useState, useRef} from 'react'
import { useAppContext } from '../../../../context/AppContext'
import ColumnInput from "./ColumnInput"
import "./Modal.css"

const BoardModal = ({utility,boardname,tasks}) => {
    const {columnData,updateColumns,addcolumn} = useAppContext();
    const inputsRef = useRef();
    const [boardName,setBoardName] = useState(boardname)
    const [columns,setColumns] = useState(columnData.length ? columnData : [
        {id:1,column_name:"empty",placeholder:"Todo"},
    ])
    console.log("Boardname:",boardname)


    const handleAddColumn=()=>{
        // if(columns.length == 3){
        //     console.log("MAX COLUMNS!! Please edit or remove one");
        //     return;
        // }
        // let temp = columns;
        // let inputs = 
        // temp =[...temp,{id:temp.length+1,column_name:"empty",placeholder:temp.length == 0 ? "Todo" : temp.length == 1 ?  "Doing" : "Done"}];
        // setColumns(temp)
        console.log(inputsRef.current)
    
    }

    const removeCol=(id)=>{
        console.log("Remove column",id);
        let temp = columns;
        temp = temp.filter(t=>t.id !== id);
        setColumns(temp)
    }

  return (
    <div className="modal board-modal">
        <h3 className="modal-header">{utility}</h3>
        <div className="modal-form">
        <div className="form-div name-form">
            <h5 className="label-h5"><label htmlFor="name">Name:</label></h5>
            <input type="text" name="boardname" className="form-control" placeholder="e.g Web Design" value={boardName} onChange={(e)=>setBoardName} />
        </div>
        <div className="columns-list">
            <h5 className="columns-header label-h5">Board Columns</h5>
            <ul ref={inputsRef} className="column-inputs">
           {columns.map(c=>(
               <ColumnInput removeCol={removeCol} key={c.id} col={c}/>
           ))}
            </ul>
        </div>
        <button onClick={handleAddColumn} className="btn secondary form-btn">+ Add New Column</button>
        </div>

            <button onClick={()=> updateColumns(columns)} className="btn primary form-btn mt-2"> {utility == "Add New Board" ? `Create New Board` : `Save Changes`} </button>
    </div>
  )
}

export default BoardModal