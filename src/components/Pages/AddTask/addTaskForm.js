import React , { useState,useContext } from 'react'
import { Form } from 'react-bootstrap';
import AddTaskContext from './contextStore/AddTaskContext';
import { Button } from 'react-bootstrap';
import AuthContext from '../../store/context';

// //////////////////////////firebase imports /////////////////////////
import { initializeApp } from 'firebase/app';
import {getFirestore,doc,setDoc,collection,addDoc} from 'firebase/firestore'


const AddTaskForm = ( props) => {
    const context=useContext(AddTaskContext);
    const AuthCtx=useContext(AuthContext);

    ////////////////////////////firebase setup ///////////////////////////////////////

    
    const firebaseConfig = {
        apiKey: "AIzaSyBQjHEHJl48ohXc1t7dTfjKoydcntmWXsY",
        authDomain: "taskassistant-74cc1.firebaseapp.com",
        projectId: "taskassistant-74cc1",
        storageBucket: "taskassistant-74cc1.appspot.com",
        messagingSenderId: "263189497188",
        appId: "1:263189497188:web:4b9fceab3fc02adfa32671"
      };


    const  app=initializeApp(firebaseConfig);
      const firestore=getFirestore()


      const addData=()=>{
           const userId=AuthCtx.userId;
           const docData=
           {
               title:context.title,
               specialInfo:context.specialInfo,
               details:context.details
           }
        //    const docReference =doc(firestore,`${userId}/task1`)
           const docReference =doc(firestore,userId,'task') 
           setDoc(docReference,docData)
        //    addDoc(docReference,docData)







      
      }
///////////////////////////firebase setup end //////////////////////////////
 
 
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
    const onSubmitAddDataHandeler=(event)=>{
        event.preventDefault()
        console.log("function call !!");
        const  data=
        {
            title:context.title,
            specialInfo:context.specialInfo,
            details:context.details
        }
        console.log(" submit : ",data );
        addData()


    }

    
    return (
        <Form  onSubmit={onSubmitAddDataHandeler}>
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
            <Button type='submit' variant="primary">
                            Submit
                        </Button>


        </Form>
    )
}
export default AddTaskForm;
