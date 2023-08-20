import React, { useState } from 'react';
import styles from "./Shared.module.scss";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from "react-bootstrap/Image";
import {left} from "@popperjs/core";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import logo from '../../../public/assets/skyit-logo.png'

const Navigation = () => {
    return ( 
        <>
            {/* <Navbar className = {styles.navbar} variant="dark" >
                <div className={styles.nav_center}>
                <Image src={"https://firebasestorage.googleapis.com/v0/b/female-period-support.appspot.com/o/FPS_new_logo.jpg?alt=media&token=ed4eb9b4-5ecf-48c1-a52b-a7a158a98558"} alt="logo" height={50} width={50} className={styles.Nav_logo}/>
                </div>
                <Container className={styles.container_align}>
                <Navbar.Brand href="/">Female Period Support</Navbar.Brand>
                <Nav className="me-auto" >
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/involved">Get Involved</Nav.Link>
                    <Nav.Link href="/storyList">Story</Nav.Link>
                    <Nav.Link href="/donate">Donate</Nav.Link>
                    <Nav.Link href="/resource">Resource</Nav.Link>
                </Nav>
                </Container>
                </Navbar> */}

            <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href="#">
                    <Image src={"https://firebasestorage.googleapis.com/v0/b/female-period-support.appspot.com/o/FPS_new_logo.jpg?alt=media&token=ed4eb9b4-5ecf-48c1-a52b-a7a158a98558"} 
                        alt="logo" height={50} width={50} className={styles.Nav_logo}/>
                    Female Period Support
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/involved">Get Involved</Nav.Link>
                    <Nav.Link href="/storyList">Story</Nav.Link>
                    <Nav.Link href="/resource">Resource</Nav.Link>
                </Nav>
                    <Button variant="warning" href='/donate'>Donate</Button>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </>
    );
};

export default Navigation;