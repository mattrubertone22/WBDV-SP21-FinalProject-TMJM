import {Nav, Navbar} from "react-bootstrap";
import React from "react";

const NavBar = () => {

    return(
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">Team Dota2</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/search">Search</Nav.Link>
                <Nav.Link href="/profile">Profile</Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/register">Register</Nav.Link>
            </Nav>

        </Navbar>
    )
}

export default NavBar