import React from 'react';

const AddTaskContext=React.createContext(
    {
        title:'',
        specialInfo:'',
        details:'',
        changeTitle:(newTitle)=>{},
        changeSpecialInfo:(newSpecialInfo)=>{},
        changeDetails:(newDetails)=>{}
    }

    )
    export default AddTaskContext;
    


