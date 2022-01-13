import React, { useContext } from "react";
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AuthContext from "./store/context";
const MainHeader = () => {
    const context = useContext(AuthContext)

    const logOutEvent = () => {

    }


    return (
        <div>

            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">

                        <Nav className="me-auto">

                            {context.isLoggedIn && <Nav.Link><Link to="/showTask" style={{ textDecoration: 'none', color: 'black' }}>Your  task </Link> </Nav.Link>}
                            { context.isLoggedIn && <Nav.Link> <Link to="/accomplishedTask" style={{ textDecoration: 'none', color: 'black' }}>Task Accompolished </Link></Nav.Link>}



                           { context.isLoggedIn &&  <Nav.Link > <Link to="/addTask" style={{ textDecoration: 'none', color: 'black' }}> Add Task { }</Link>   </Nav.Link>}
                            {!context.isLoggedIn && <Nav.Link><Link to="/logIn" style={{ textDecoration: 'none', color: 'black' }}>  Log in</Link></Nav.Link>
                            }
                            {context.isLoggedIn && <Nav.Link onClick={context.logOut}> <Link to="/logIn" style={{ textDecoration: 'none', color: 'black' }}>Log out</Link></Nav.Link>}

                            {!context.isLoggedIn && <Nav.Link> <Link to="/signUp" style={{ textDecoration: 'none', color: 'black' }}> Sign Up</Link> </Nav.Link>
                            }




                        </Nav>


                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </div>
    )
}
export default MainHeader;
