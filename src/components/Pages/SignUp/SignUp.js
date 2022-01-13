import { Form, Button } from 'react-bootstrap'
import { useRef } from 'react'
const SignUp = () => {
    const url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBQjHEHJl48ohXc1t7dTfjKoydcntmWXsY'

    const email=useRef();
    const password=useRef();
    const confirmedPassword=useRef();

    const submitHandeler=(event)=>{

        event.preventDefault();
        const UserData={
            email:email.current.value,
            password:password.current.value,
            confirmedPassword:confirmedPassword.current.value,
            returnSecureToken:true,

        }
        console.log(UserData);

        fetch(url,{
            method:'POST',
            body:JSON.stringify(UserData),
            headers:{
                'Content-Type':'application/json'
            }
        }).then((response)=>{
            if(response.ok){
                alert("Sign Up  Successful ")

            }
            else{
                return response.json().then((data)=>{
                    console.log(data);

                })
            }
        })

    }

    return (
        <div>
            <div style={{  width:'300px',margin: 'auto' }}>
            <h1> This Is Sign Up</h1>
            <Form
             onSubmit={submitHandeler}
             style={{marginTop:'50px'}}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                     type="email"
                     ref={email}
                    placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                    type="password"
                    ref={password}
                    placeholder="Password" />
                </Form.Group>
                

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm  Password</Form.Label>
                    <Form.Control 
                    type="password" 
                    ref={confirmedPassword}
                    placeholder="Password" />
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
        </div>
    )
}
export default SignUp