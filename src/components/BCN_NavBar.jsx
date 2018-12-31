import React from 'react';
import {Navbar, Nav, MenuItem, NavDropdown } from 'react-bootstrap';


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
                            <a href="/AboutUs"> | About Us</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                </Nav>
                <Nav pullLeft>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="/WhatWeDo"> | What We Do</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                </Nav>
                <Nav pullLeft>
                    <Navbar.Header>
                        <NavDropdown eventKey={2} title="| Get Involved" id="GI-nav-dropdown">
                            <MenuItem eventKey={2.1} href="/"> General </MenuItem>
                            <MenuItem eventKey={2.2} href="/AboutUs">Specific Interests</MenuItem>
                            <MenuItem eventKey={2.3} href="/WhatWeDo">Point System</MenuItem>
                        </NavDropdown>
                    </Navbar.Header>
                </Nav>
            </Navbar>
        );
    }
}