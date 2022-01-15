import React , { useState,useContext } from 'react'
import { Form } from 'react-bootstrap';
import AddTaskContext from './contextStore/AddTaskContext';
import { Button } from 'react-bootstrap';
import AuthContext from '../../store/context';

// //////////////////////////firebase imports /////////////////////////
import { initializeApp } from 'firebase/app';
import {getFirestore,doc,setDoc,collection,addDoc,getDoc} from 'firebase/firestore'


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


      const addData= async ()=>{
      
       
        const userId=AuthCtx.userId;
        const date =new Date () ;
        const path=`${date.getDate()}|${date.getMonth()+1}|${date.getFullYear()}`;
        const reference=doc(firestore,userId,path)
        const  mySnapShot= await  getDoc(reference)

        if (mySnapShot.exists()) {
            alert("Data Exsist ")
          

            
            const currentTask=
            {
                title:context.title,
                specialInfo:context.specialInfo,
                details:context.details
            }
            const DocData= await mySnapShot.data();
            const arrray =DocData.allTasks;

            console.log('====================================');
            console.log("DocData :: ",arrray);
            console.log("length  :: ",arrray.length);
            arrray.push(currentTask);
            console.log("After adding  :: ",arrray);
            const structure={
                allTasks:arrray
            }
            setDoc(reference,structure);

            

            console.log('====================================');
         


            
        }
        else{
            alert("Data  Not Exsist ")
        const Structure={allTasks:[]}
            

            const userId=AuthCtx.userId;
            const currentTask=
            {
                title:context.title,
                specialInfo:context.specialInfo,
                details:context.details
            }
            Structure.allTasks.push(currentTask);

            setDoc(reference,Structure)


            
        }

        
      
      }
     /** const updateData= async  ()=>{
          alert ("Update called ")

        const userId=AuthCtx.userId;
        const date =new Date () ;
        const path=`${date.getDate()}|${date.getMonth()+1}|${date.getFullYear()}`;
        const reference=doc(firestore,userId,path)
        const  mySnapShot=await  getDoc(reference)

        if (mySnapShot.exists()) {
            alert("Data Exsist ")
            console.log("Data Exsist : ");

            
            const currentTask=
            {
                title:context.title,
                specialInfo:context.specialInfo,
                details:context.details
            }
            const DocData=mySnapShot.data();
            console.log('====================================');
            console.log("DocData :: ",DocData.allTasks);
            console.log('====================================');
         




          
            // const allTask=DocData.allTask;
            // allTask.push(currentTask)
            // const Structure={
            //     allTask:allTask
            // }
            // setDoc(reference,Structure)

            
        }
        else{
            alert("Data  Not Exsist ")
        const Structure={allTasks:[]}
            

            const userId=AuthCtx.userId;
            const currentTask=
            {
                title:context.title,
                specialInfo:context.specialInfo,
                details:context.details
            }
            Structure.allTasks.push(currentTask);

            setDoc(reference,Structure)


            
        }

        


      } */
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
