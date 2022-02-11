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

    const [task, setTask] = useState([])
    const [recievedDate, setRecievedDate] = useState(false)
    const [enteredDate, setEnteredDate] = useState({
        date: 0,
        month: 0,
        year: 0
    })



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

    const path = `${enteredDate.date}|${enteredDate.month}|${enteredDate.year}`;
    const docReference = doc(firestore, userId, path)






    var allTasks = [{ message: "emp" }];






    const getData = async(date) => {


        const userId = authCtx.userId;
        // const date = new Date();

        const path = `${date.date}|${date.month}|${date.year}`;
        console.log('====================================');
        console.log(" path : ", path);
        console.log('====================================');
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
    const recieveData = (date) => {



        const data = getData(date).then((value) => {
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


    //////////////////////////////// FireBase Function Over ////////////////////////////////
    const firstTouched = true;

    const CalendarValueHandeler = (event) => {


        setRecievedDate(true);
        // setEnteredDate(event.target.value)
        console.log(" ENtered Date : ", event.target.value);

        var getDate = event.target.value;

        console.log('====================================');
        console.log(" year: ", getDate.substring(0, 4), " month: ", getDate.substring(5, 7), " date : ", getDate.substring(8, 10)

        );
        //   2022-01-20
        var date = parseInt(getDate.substring(8, 10));
        var month = parseInt(getDate.substring(5, 7));
        var year = parseInt(getDate.substring(0, 4))
        let OurDate = {
            date: date,
            month: month,
            year: year
        }
        setEnteredDate(OurDate);

        getData(OurDate).then((data) => {
            console.log(" inside promise : value of set task ", data);
            setTask(data.allTasks)
            getDataCallBack(data.allTasks)
        })

    }

    var ourTasks = []
    const getDataCallBack = (array) => {
        ourTasks = array;
        console.log("late fn call ");

    }
    useEffect(() => {
        if (recievedDate) {
            recieveData(enteredDate)
        }
    }, [enteredDate])




    return ( <
            div className = 'wrapper' >
            <
            h1 > this is show task page < /h1> <
            div className = 'formContainer' >
            <
            form >
            <
            input type = { "date" }
            onChange = { CalendarValueHandeler } > < /input> {
            /* <Button variant="primary" style={{ fontSize: '15px' }}>
                        Go somewhere
                      </Button> */
        } <
        /form>

    <
    /div>

    <
    div className = 'gridContainer'
    style = {
            { display: (recievedDate) ? "grid" : "none" }
        } > {
            (Array.isArray(task)) ? (task.length === 0) ? "Nod Data " : task.map((currentTask) => {
                return <TaskCard index = { i }
                key = { i++ }
                title = { currentTask.title }
                specialInfo = { currentTask.specialInfo }
                details = { currentTask.details }
                />
            }) : "No Data Exsist "

        } <
        /div>

    <
    /div>
)
}
export default ShowTask