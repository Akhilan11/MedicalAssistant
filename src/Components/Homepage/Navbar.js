import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import logo from '../Homepage/logo.png'
import Homepage from './Homepage'

function Appbar() {
    return (
        <div>

        <Navbar  expand="lg" variant="dark" bg="dark">
            <Container>
            <Navbar.Brand href="/"><img src={ logo } style = {{width:"20%",float:"left"}}></img></Navbar.Brand>
            <Nav className="me-auto">
            {/* <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/features">Features</Nav.Link>
            <Nav.Link href="/pricing">Pricing</Nav.Link> */}
            </Nav>
            </Container>
        </Navbar>

        <Homepage />

        </div>
    )
}

export default Appbar
