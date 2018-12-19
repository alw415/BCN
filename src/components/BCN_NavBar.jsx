import React from 'react';
import {Navbar, Nav } from 'react-bootstrap';


export default class BCNNav extends React.Component{
    render(){
        return(
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">Black Creators Network</a>
                    </Navbar.Brand>
                </Navbar.Header>
            </Navbar>
        );
    }
}