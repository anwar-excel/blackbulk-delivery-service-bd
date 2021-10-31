
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// import useAuth from '../../hooks/useAuth'

import { HashLink } from 'react-router-hash-link';

const Header = () => {
    // const { user, logOut } = useAuth();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky="top" bg="secondary" variant="light">
                <Container>

                    <Navbar.Collapse className="justify-content-left">
                        <Nav.Link as={HashLink} to="/">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/food">Food</Nav.Link>

                        <Nav.Link as={Link} to="/services">Services</Nav.Link>
                        <Nav.Link as={Link} to="/deliveryman">Delivery Man</Nav.Link>
                        <Nav.Link as={Link} to="/man" > Man</Nav.Link>
                        <Nav.Link as={Link} to="/man" > <i class="fas fa-phone-alt"></i></Nav.Link>
                        <Nav.Link as={Link} to="/add-food" > Add Food</Nav.Link>
                        <Nav.Link as={Link} to="/delivery-update" > Delivery Update</Nav.Link>
                        {/* <Nav.Link as={HashLink} to="/home#login">Login</Nav.Link> */}

                        {/* {
                            user?.email ?
                                <Button onClick={logOut} variant="light">Logout</Button> :
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        } */}
                        {/* <Navbar.Text>
                            Signed in as: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text> */}
                    </Navbar.Collapse>
                    <Navbar.Brand href="#home">Blackbulk Delivery Service</Navbar.Brand>
                    <Navbar.Toggle />
                </Container>
            </Navbar>

        </>
    );
};

export default Header;