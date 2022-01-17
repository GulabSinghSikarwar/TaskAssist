import React, { useContext, useEffect, useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import './cardDisplay.css'

//////////////////////////////// Component Imports ////////////////////////////////

import TaskCard from './card';

////////////////////////////////  Components Import Over //////////////////////////////// 

////////////////////////////////firebase imports//////////////////////////////// 

import { initializeApp } from 'firebase/app';
import { getDoc, getFirestore, doc, setDoc, collection, addDoc } from 'firebase/firestore'

////////////////////////////////firebase Import over////////////////////////////////


////////////////////////////////  auth Context ////////////////////////////////

import AuthContext from '../../store/context';



////////////////////////////////  auth Context Over  ////////////////////////////////


//////////////////////////////// FireBase Function Start ////////////////////////////////


const ShowTask = () => {
  var i = 0;

  const [task, setTask] = useState([{}])
  const [recievedDate, setRecievedDate] = useState(false)
  const [enteredDate, setEnteredDate] = useState(null)



  const firebaseConfig = {
    apiKey: "AIzaSyBQjHEHJl48ohXc1t7dTfjKoydcntmWXsY",
    authDomain: "taskassistant-74cc1.firebaseapp.com",
    projectId: "taskassistant-74cc1",
    storageBucket: "taskassistant-74cc1.appspot.com",
    messagingSenderId: "263189497188",
    appId: "1:263189497188:web:4b9fceab3fc02adfa32671"
  };
  const date = new Date();
  const app = initializeApp(firebaseConfig);
  const firestore = getFirestore()


  const authCtx = useContext(AuthContext)
  const userId = authCtx.userId;

  const path = `${date.getDate()}|${date.getMonth() + 1}|${date.getFullYear()}`;
  const docReference = doc(firestore, userId, path)






  var allTasks = [{ message: "emp" }];

  const getData = async () => {


    const userId = authCtx.userId;
    const date = new Date();
    const path = `${date.getDate()}|${date.getMonth() + 1}|${date.getFullYear()}`;
    const reference = doc(firestore, userId, path)
    const mySnapShot = await getDoc(reference)

    var array;

    console.log(mySnapShot.exists());
    var ourArray = []
    if (mySnapShot.exists()) {
      const DocData = await mySnapShot.data();
      array = DocData.allTasks;
      console.log('====================================');
      console.log(" doc : ", DocData);
      console.log(" array  : ", array);
      ourArray = array;
      allTasks = array;



      console.log('====================================');

    }





    return array;

  }
  const recieveData = () => {



    const data = getData().then((value) => {
      setTask(value)
      console.log('====================================');
      console.log(" inside promise : value of set task ", value);
      console.log('====================================');
    }).catch((e) => {
      console.log('====================================');
      console.log(" error : ", e);
      console.log('====================================');
    });



  }
  useEffect(() => {

    var value = recieveData();

  }, [])

  //////////////////////////////// FireBase Function Over ////////////////////////////////
  const firstTouched = true;

  const CalendarValueHandeler = (event) => {
    setRecievedDate(true);
    setEnteredDate(event.target.value)
    console.log(" ENtered Date : ", event.target.value);
    console.log(event.target.value);
  }




  return (
    <div>
      <h1> this is show task page</h1>
      <div>
        <form>
          <input type={"date"} onChange={CalendarValueHandeler}></input>
          <Button variant="primary" style={{ fontSize: '15px' }}>
            Go somewhere
          </Button>
        </form>

      </div>

      <div className='gridContainer'>
        {
          (Array.isArray(task)) ? (task.length === 0) ? "Nod Data " : task.map((currentTask) => {
            return <TaskCard key={i++} title={currentTask.title} specialInfo={currentTask.specialInfo} details={currentTask.details} />
          }) : "No Data Exsist "
        }
      </div>

    </div>
  )
}
export default ShowTask

