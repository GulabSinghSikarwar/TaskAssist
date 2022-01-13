import React , { useState,useContext } from 'react'
import { Form } from 'react-bootstrap';
// import AddTaskContext from './contextStore/AddTaskContext';
import AddTaskContext from './contextStore/AddTaskContext';



const AddTaskForm = ( props) => {
    // const addTaskContext=useContext(AddTaskContext)
    const context=useContext(AddTaskContext);

 
 
    const titleChangeHandeler=(event)=>{
        console.log(" titleChangeHandeler is called  inside add task form ")
        let value =event.target.value;

        // addTaskContext.updateTitle(value)
        console.log(" title : "+ value );
        context.changeTitle(value)

 

    }
    const specialChangeHandeler=(event)=>{
        let value =event.target.value;
        console.log(" Special  : "+ value );
        context.changeSpecialInfo(value)

        // addTaskContext.updateSpecialInfo(value) 
       }

    const detailsChangeHandeler=(event)=>{
        let value =event.target.value;
        console.log(" Details : "+value);
        context.changeDetails(value)
        // addTaskContext.updateDetails(value);

    }

    
    return (
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label style={{fontSize:'20px'}}>Task Title </Form.Label>
                <Form.Control
                type="text"
                onChange={titleChangeHandeler} 
                placeholder="Task Title " />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label style={{fontSize:'20px'}} >Special Information Regarding Task</Form.Label>
                <Form.Control  
                placeholder="Important Information  Of Task  "  
                as="textarea"
                onChange={specialChangeHandeler} 
                rows={3} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label style={{fontSize:'20px'}} > Task Details</Form.Label>
                <Form.Control  
                placeholder="Detail of  Task  "  
                as="textarea" 
                onChange={detailsChangeHandeler}
                rows={3} />
            </Form.Group>
        </Form>
    )
}
export default AddTaskForm;
