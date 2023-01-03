import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
import { Link, useNavigate } from 'react-router-dom'
import Check from './Check,js';
function Header(props) {
    const history = useNavigate();
    function Logout() {
        console.log("han mein log out mein agaya hun")
        localStorage.clear();
        history("/signup")
    }
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Privacy Ops</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/hospital">Hospital</Nav.Link>
                        <Nav.Link href="/ministry">Ministry Of Health</Nav.Link>
                        <Nav.Link href="/paramedics">Paramedics</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;