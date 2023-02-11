import { useState, createContext, useContext, useEffect } from "react";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  //ui state
  const [theme, setTheme] = useState("light");
  const [showSideMenu,setShowSideMenu] = useState(true)
  const [showModal,setShowModal] = useState(false)
  const [modalSpec, setModalSpec] = useState({})


  
  //app data
  const [data,setData] = useState([])
  const [boards, setBoards] = useState([])
  const [columnData,setColumnData] = useState([])
  const [currBoard,setCurrBoard] = useState(null)



  useEffect(()=>{

    //fetch appdata

    fetch("data.json")
    .then(res=>res.json())
    .then(res=>{
       console.log(res)
      
      let boardNames = res.boards.map((r,i)=>({id:i+1,name:r.name}));
      setBoards(boardNames)
      setData(res.boards);
      setCurrBoard(boardNames[0].name)
      // res.boards[0].
     setColumnData(res.boards[0].columns)
    })
  },[])


  const changeCurrBoard=(currBoard)=>{
    setCurrBoard(currBoard);
    console.log(data)
    let currIdx = data.findIndex(d=>d.name == currBoard);
    console.log("currIdx",currIdx);
    setColumnData(data[currIdx].columns)
  }

  const toggleModalView=(modal)=>{
    // if(!modal || showModal){
    //   console.log("no arg provided!!");
    //   if(!e.target.closest(".modal") && !e.target.closest(".modal-form"))setShowModal(false)
    //   return;
    // }
        // console.log("toggleModal fired!",modal);
        setShowModal(!showModal)
        let temp={}
        if(modal.is_board){
        temp = {
            type:modal?.type == "edit" ? `Edit ${currBoard}` : modal?.type == "add" ? "Add New Board" : "Restrictive",
            is_board:true
        }
      }
        else{
          temp = {
            type:modal?.type == "edit" ? `Edit Task` : modal?.type == "add" ? "Add New Task" : "Restrictive",
            is_board:false
        }
      }
        setModalSpec(temp)
        console.log("Temp",temp);


  }


  const removeBoard=(e)=>{
    // console.log("removeBOard fired",e.target)
    if(!e.target.closest(".modal") && !e.target.closest(".modal-btn") && showModal){
      console.log("maybe you should close the modal.")
      setShowModal(false)
    }
  }

  const updateColumns=(columns)=>{
        console.log("Columns",columns)
        let temp = data;
        let idx = temp.findIndex(r=>r.name == currBoard);
        console.log(temp[idx])
        //format colums into expected data-type
        columns = columns.map(c=>c.column_name == "empty" ? c.placeholder : c.column_name)
        columns = columns.map((c,i)=>({id:i+1,name:c,tasks:[]}))

        temp[idx].columns = columns;
        console.log(columns)
        setData(temp);
        setColumnData(columns)
        setShowModal(false)
  }


  const addcolumn=(new_col)=>{
    console.log("newCol",new_col)

    if(columnData.length == 3){
      console.log("MAX COLUMNS!! Please edit or remove one");
      return;
  }
  // let temp = columnData
  // // temp =[...temp,{id:temp.length+1,column_name:"empty",placeholder:temp.length == 0 ? "Todo" : temp.length == 1 ?  "Doing" : "Done"}];
  // temp =[...temp,{id:temp.length+1,name:newCol, tasks:[]}]
  // setColumnData(temp)
  }

  const values = {
    //ui state
    theme,
    setTheme,
    showSideMenu,
    setShowSideMenu,
    toggleModalView,
    removeBoard,
    showModal,
    modalSpec,
    changeCurrBoard,
    updateColumns,
 

 
    addcolumn,


    //data state
    boards,
    currBoard,
    columnData
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};
