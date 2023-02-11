import React, {useState} from 'react'
import { crossIcon } from '../../../../const'
import "./Modal.css"

const ColumnInput = ({col,removeCol}) => {
    const [columnName,setColumnName] = useState(col?.name ? col.name : col.placeholder)
  
  return (
    <li className="input-row">
        {/* <input type="text" name="column_name" placeholder={columnName} value={columnName} onChange={(e)=>setColumnName(e.target.value)} autoComplete="off" className="form-control" /> */}
        <input type="text" name="column_name" placeholder={columnName} value={columnName} onChange={(e)=>setColumnName(e.target.value)} autoComplete="off" className="form-control" />
        <button onClick={()=>removeCol(col.id)} className="remove-btn">
            <img src={crossIcon} alt="" />
        </button>
    </li>
  )
}

export default ColumnInput