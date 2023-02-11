import React from 'react'
import { darkTheme,lightTheme } from '../../../const'
import "./Components.css"
import { useAppContext } from '../../../context/AppContext'


const ThemeToggle = () => {
    const {theme,setTheme} = useAppContext();


    const handleToggleTheme=()=>{
        let temp = theme;
        temp = temp === "light" ? "dark" : "light"
        setTheme(temp)
    }
  return (
    <div className="theme-toggle-wrapper">
        <div className="theme-toggler">
            <img className="theme-icon" src={lightTheme} alt="light-theme" />
            <input onClick={handleToggleTheme} type="checkbox" name="theme-toggle" className="theme-toggle" />
            <img className="theme-icon" src={darkTheme} alt="dark-theme" />
        </div>
    </div>
  )
}

export default ThemeToggle