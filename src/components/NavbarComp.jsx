import { React, useState } from 'react'
import '../assets/css/Navbar.css'
import { Navbar, Container, Nav, Modal, Button } from 'react-bootstrap'
import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';
import ButtonComp from './ButtonComp';

function NavbarComp() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleLogin = () => setShow(true);

    return (
        <div className='navComp'>
            <Navbar bg="white" data-bs-theme="white" className='shadow-sm navbar'>
                <Container>
                    <Navbar.Brand href="#home" >
                        <span>LandTick</span>
                        <img src="../src/assets/img/logo.png" width="45" height="45" alt="Logo" />
                    </Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Link className='btn btn-daftar' onClick={handleLogin}>Daftar</Nav.Link>
                        <Nav.Link className="btn btn-pink rounded" onClick={handleLogin}>Login</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>LOGIN</Modal.Title>
                </Modal.Header>
                <Modal.Body><Register /></Modal.Body>
            </Modal>
        </div>
    )
}

export default NavbarComp