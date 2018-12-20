import React from 'react';
import {Navbar, Nav } from 'react-bootstrap';


export default class BCNNav extends React.Component{
    render(){
        return(
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/"> | Black Creators Network</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav pullLeft>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="/"> | About Us</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                </Nav>
                <Nav pullLeft>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="/"> | What We Do</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                </Nav>
                <Nav pullLeft>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="/"> | Get Involved</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                </Nav>
            </Navbar>
        );
    }
}