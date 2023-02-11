import React from 'react'
import { useAppContext } from '../../../context/AppContext';
import { showSidebar } from '../../../const'


const SideMenuBtn = () => {
    const {showSideMenu,setShowSideMenu} = useAppContext();

  return (
    !showSideMenu && <button onClick={()=>setShowSideMenu(!showSideMenu)} className="show-menu-btn"><img className="show-menu-icon" src={showSidebar} alt="show-menu"/></button>
  )
}

export default SideMenuBtn