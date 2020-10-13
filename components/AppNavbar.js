import Link from "next/link";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import React from "react";
import styles from '../styles/myStyle.module.css'

export default function AppNavbar() {

    return (
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className={styles.navbar}>
            <Container>
                <Navbar.Brand href="/">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/aboutMe" className={styles.navlink}>About Me</Nav.Link>
                        <Nav.Link href="/interests" className={styles.navlink}>My Interests</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
} 