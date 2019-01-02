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
                        <Navbar.Brand>
                        <NavDropdown eventKey={2} title="| Get Involved" id="GI-nav-dropdown">
                            <MenuItem eventKey={2.1} href="/"> General </MenuItem>
                            <NavDropdown eventKey={2.2}  title="Specific Interests">
                                <MenuItem eventKey={2.3} href="/AboutUs"> Beauty </MenuItem>
                                <MenuItem eventKey={2.4} href="/AboutUs"> Culinary </MenuItem>
                                <MenuItem eventKey={2.5} href="/AboutUs"> Fashion </MenuItem>
                                <MenuItem eventKey={2.6} href="/AboutUs"> Health </MenuItem>
                                <MenuItem eventKey={2.7} href="/AboutUs"> Media </MenuItem>
                                <MenuItem eventKey={2.8} href="/AboutUs"> Music </MenuItem>
                                <MenuItem eventKey={2.9} href="/AboutUs"> Tech </MenuItem>
                                <MenuItem eventKey={2.10} href="/AboutUs"> Writing </MenuItem>
                                </NavDropdown>
                            <MenuItem eventKey={2.11} href="/WhatWeDo">Point System</MenuItem>
                        </NavDropdown>
                        </Navbar.Brand>
                    </Navbar.Header>
                </Nav>
            </Navbar>
        );
    }
}