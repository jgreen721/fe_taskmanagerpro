import React from 'react'
import "./Navbar.css"
import { useAppContext } from '../../context/AppContext'
import { logoLight,logoDark,vertEllipsis, logoMobile, chevronDown,chevronUp } from '../../const'

const Navbar = () => {
    const {theme,showSideMenu,setShowSideMenu,currBoard,toggleModalView} = useAppContext();
  return (
    <nav className="nav">
        <div className="nav-col nav-left-col">
        <img className="nav-logo" src={theme == "light" ? logoDark : logoLight} alt="nav-logo" />
        <img className="mobile-logo" src={logoMobile} alt="nav-logo" />
        <h3 className="nav-header">{currBoard}<span onClick={()=>setShowSideMenu(!showSideMenu)} className="arrow"><img src={showSideMenu ? chevronUp : chevronDown} alt="arrow"/></span></h3>
        </div>
        <div className="nav-col nav-right-col modal-btn">
            <button onClick={()=>toggleModalView({type:"add",is_board:false})} className="nav-btn btn primary">+ Add New Task</button>
            <button onClick={()=>toggleModalView({type:"add",is_board:false})} className="small-btn primary">+</button>
            <img className="ellipse-icon" src={vertEllipsis} alt="" />
        </div>
    </nav>
  )
}

export default Navbar