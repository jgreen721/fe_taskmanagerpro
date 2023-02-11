import { useAppContext } from './context/AppContext'
import {Navbar,SideMenu,MainDash} from "./components"
// import {BoardMo} from "./components"
import './App.css'

function App() {
    const {theme,removeBoard} = useAppContext()

  return (
    <div onClick={(e)=>removeBoard(e)} data-theme={theme} className="app">
      <div className="nav-wrapper">
      <Navbar/>
      </div>
     <div className="app-content">
      <SideMenu/>
      <MainDash/>
      </div>
    </div>
  )
}

export default App
