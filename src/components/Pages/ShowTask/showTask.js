import React, { useContext, useEffect } from 'react'
import { Card, Button } from 'react-bootstrap'


////////////////////////////////firebase imports//////////////////////////////// 

import { initializeApp } from 'firebase/app';
import { getDoc, getFirestore, doc, setDoc, collection, addDoc } from 'firebase/firestore'

////////////////////////////////firebase Import over////////////////////////////////


////////////////////////////////  auth Context ////////////////////////////////

import AuthContext from '../../store/context';

////////////////////////////////  auth Context Over  ////////////////////////////////


const ShowTask = () => {



  const authCtx = useContext(AuthContext)
  const userId = authCtx.userId;
  
  
  //////////////////////////////// FireBase Function Start ////////////////////////////////

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
  const ShowData = async  () => {
    const date=new Date();
           const path=`${date.getDate()}|${date.getMonth()+1}|${date.getFullYear()}`;
           const docReference=doc(firestore,userId,path)

          //  const docReference=doc(firestore,`${userId}/${path}` )

           console.log( " path Refereence ",`${userId}/${path}`);
            


    const mySnapshot= await getDoc(docReference)
    console.log(" Exsist : ",mySnapshot.exists());
    if (mySnapshot.exists()) {
      console.log(" my data : ",JSON.stringify(mySnapshot));
      // console.log(mySnapshot.data)
      const docData=mySnapshot.data();

      const data=JSON.stringify(docData)
      console.log("data : ",data);
      
    }

    
    

  }
  useEffect(()=>{
    ShowData().then(()=>{
console.log("Succesfully shown ");
    }).catch((error)=>{
      console.log( " error : ",error );
    })

  },[])

  //////////////////////////////// FireBase Function Over ////////////////////////////////





  return (
    <div>
      <h1> this is show task page</h1>

      <div >
        <div style={{ width: '450px', alignContent: 'center', margin: 'auto' }}>
          <Card className="text-center">
            <Card.Header style={{ textTransform: 'uppercase', fontSize: '28px' }}>
              title
            </Card.Header>
            <Card.Body>

              <Card.Title style={{ fontSize: '25px' }}>
                specialInfo
              </Card.Title>
              <Card.Title style={{ fontSize: '25px', fontWeight: 'lighter', marginTop: '50px' }}>
                details

              </Card.Title>



            </Card.Body>
            <Card.Footer className="text-muted">
              <Button variant="primary">
                Go somewhere
              </Button>
            </Card.Footer>
          </Card>
        </div>

      </div>
    </div>
  )
}
export default ShowTask