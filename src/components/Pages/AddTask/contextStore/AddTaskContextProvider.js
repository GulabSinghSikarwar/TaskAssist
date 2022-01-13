import React,{useState} from "react"
import AddTaskContext from "./AddTaskContext"

const AddTaskContextProvider=(props)=>{
    const [title,setTitle]=useState();
    const [specialInfo,setSpecialInfo]=useState();
    const [details,setDetails]=useState();

    const changeTitle=(newTitle)=>{
        console.log(" changeTitle  is called  inside addTaskContextProvider  ")
        setTitle(newTitle)

    }
    const changeSpecialInfo=(newspecialInfo)=>{
        setSpecialInfo(newspecialInfo)
    }

    const changeDetails=(newDetails)=>{
        setDetails(newDetails)
    }
    const value=
    {
        title:title,
        specialInfo:specialInfo,
        details:details,
        changeTitle:changeTitle,
        changeSpecialInfo:changeSpecialInfo,
        changeDetails:changeDetails


    }
    return<AddTaskContext.Provider value={value}>{props.children}</AddTaskContext.Provider>
}
export default AddTaskContextProvider