
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';


import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { user, logout } = useAuth();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky="top" bg="secondary" variant="light">
                <Container>

                    <Navbar.Collapse className="justify-content-left">
                        <Nav.Link as={HashLink} to="/">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/food">Food</Nav.Link>

                        <Nav.Link as={Link} to="/services">Services</Nav.Link>
                        <Nav.Link as={Link} to="/deliveryman">Delivery Man Collection</Nav.Link>
                        <Nav.Link as={Link} to="/man" >Delivery Man List</Nav.Link>
                        <Nav.Link as={Link} to="/login" > Login</Nav.Link>

                        <Nav.Link as={Link} to="/add-food" > Add Food</Nav.Link>


                        <span>{user.displayName} </span>
                        {user?.email && <button onClick={logout}>log out</button>}
                    </Navbar.Collapse>
                    <Navbar.Brand href="#home">Blackbulk Delivery Service</Navbar.Brand>
                    <Navbar.Toggle />
                </Container>
            </Navbar>

        </>
    );
};

export default Header;