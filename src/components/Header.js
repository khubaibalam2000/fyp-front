import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
function Header(props) {
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