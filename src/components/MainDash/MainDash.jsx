import React from 'react'
import { SideMenuBtn,Empty,Columns, ModalWrapper } from './components'
import { useAppContext } from '../../context/AppContext'
import "./MainDash.css"

const MainDash = () => {
    const {columnData} = useAppContext();
    // console.log(columnData)
  return (
    <div className="main-dash">
<SideMenuBtn/>
{/* <ModalWrapper/> */}
{columnData.length ? <Columns columns={columnData}/> : <Empty/>}
    </div>
  )
}

export default MainDash