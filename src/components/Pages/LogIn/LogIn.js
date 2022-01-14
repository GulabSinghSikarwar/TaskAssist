import React, { useContext } from 'react';

import { Form, Button } from 'react-bootstrap'
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import AuthContext from '../../store/context';
const LogIn = () => {
    const navigate = useNavigate();


    const context = useContext(AuthContext);

    const email = useRef();
    const password = useRef();
    const submitLoginHandeler = (event) => {

        event.preventDefault();

        const UserData = {
            email: email.current.value,
            password: password.current.value,
            returnSecureToken: true,
        }
        const url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBQjHEHJl48ohXc1t7dTfjKoydcntmWXsY'


        fetch(url, {
            method: 'POST',
            body: JSON.stringify(UserData),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            if (response.ok) {
                alert("LogIn Successful ")
                return response.json()

            }
            else {
                alert("Password Wrong  ")
                navigate("/login")
                return ;


            }

        }).then((data) => {
            console.log(data);
            console.log(data.idToken);

            context.logIn(data.idToken);
            console.log("Unique UserId : ",data.localId);
            context.setUserId(data.localId);
            

            navigate('/showTask')
            console.log(context.token);
        })


    }


    return (
        <div>
            <div style={{ width: '400px ', margin: 'auto' }}>
                <h1 > Welcome to  Login Page </h1></div>
            <div style={{ width: '300px', margin: 'auto' }}>

                <Form onSubmit={submitLoginHandeler} style={{ marginTop: '50px' }}>
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




                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default LogIn;
