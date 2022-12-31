import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
import { Link,useNavigate } from 'react-router-dom'
import Check from './Check,js';
function Header(props) {
    const history=useNavigate();
    function Logout(){
        console.log("han mein log out mein agaya hun")
        localStorage.clear();
        history("/signup")
      }
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Book Now</Navbar.Brand>
                        <Nav className="me-auto">                      
                      {
                        localStorage.getItem("userinfo") ?
                            <>
                                {
                                    JSON.parse(localStorage.getItem("userinfo")).isAdmin === true ?
                                        <>
                                            <Nav.Link href="/addevents">AddEvents</Nav.Link>
                                            <Nav.Link href="/allevents">AllEvents</Nav.Link>
                                        </>
                                        :
                                        <>
                                            <Nav.Link href="/bookedevents">Booked Events</Nav.Link>
                                            <Nav.Link href="/unbookedevents">Unbooked Events</Nav.Link>
                                        </>
                                }

                            </>
                            :
                            <>
                                <Nav.Link  href="/login">Login</Nav.Link>
                                <Nav.Link  href="/signup">SignUp</Nav.Link>
                            </>
                    }
                    </Nav>
                    {
                    localStorage.getItem("userinfo") ?
                    <Nav>
                    <NavDropdown title={JSON.parse(localStorage.getItem("userinfo"))["userName"]}>
                        <NavDropdown.Item onClick={Logout}>Logout</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    :null
                    }
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;