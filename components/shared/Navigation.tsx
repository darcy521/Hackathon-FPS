import React, { useState } from 'react';
import styles from "./Shared.module.scss";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from "react-bootstrap/Image";
import {left} from "@popperjs/core";
// import logo from '../../../public/assets/skyit-logo.png'

const Navigation = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return ( 
        <>
            <Navbar className = {styles.navbar} variant="dark" >
                <div className={styles.nav_center}>
                <Image src={"https://firebasestorage.googleapis.com/v0/b/female-period-support.appspot.com/o/FPS_new_logo.jpg?alt=media&token=ed4eb9b4-5ecf-48c1-a52b-a7a158a98558"} alt="logo" height={50} width={50} className={styles.Nav_logo}/>
                </div>
                <Container className={styles.container_align}>
                <Navbar.Brand href="/">Female Period Support</Navbar.Brand>
                <Nav className="me-auto" >
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about">About Us</Nav.Link>
                    <Nav.Link href="/involved">Get Involved</Nav.Link>
                    <Nav.Link href="/resource">Resource</Nav.Link>
                    <Nav.Link href="/storyList">Story</Nav.Link>
                    <Nav.Link href="/donate">Donate</Nav.Link>
                    {/*<Nav.Link href="/charityList">Charity List</Nav.Link>*/}


                </Nav>
                </Container>
                </Navbar>
        </>
    );
};

export default Navigation;