import React from 'react'
import { useAppContext } from '../../context/AppContext'
import {hideSidebar} from "../../const"
import "./SideMenu.css"
import {ThemeToggle,Boards} from "./components"


const SideMenu = () => {
  const {theme,showSideMenu, setShowSideMenu} = useAppContext()
  return (
    <div className={showSideMenu ? "side-menu" : "side-menu hide-side-menu"}>
      <Boards/>
      
      <div className="bottom-side-menu-row">
      <ThemeToggle/>
<div className="hide-side-container">
  <img onClick={()=>setShowSideMenu(!showSideMenu)} className="hide-icon" src={hideSidebar} alt="hide" />
  <h5 className="hide-h5">Hide Sidebar</h5>
</div>
      </div>
    </div>
  )
}

export default SideMenu