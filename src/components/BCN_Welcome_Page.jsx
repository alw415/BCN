import React, {Component} from 'react';
import {Grid} from 'react-bootstrap';
import ReactDOM from 'react-dom';
import Navbar from './BCN_NavBar';
import logo from './BlkCreators_logo.jpg';

export default class Homepage extends Component {
    render(){
        return(
             <div>
                <Navbar/> 
                 <Grid>
                     <div className="welcome">
                       <h1> Welcome to the Black Creators Network</h1>
                    </div>
                    <div className="logo">
                        <img src={logo} />
                        <div className="pictext">
                        PROVIDING SUPPORT 
                        FOR BLACK INNOVATORS  
                        WORLDWIDE!!!
                        </div>
                    </div> 
                    <div className="info">
                         <h3>The Black Creators Network provides support for black innovators by establishing a space for businesses to be promoted, informative resources to be exchanged, and community to be made by connecting individuals with one another</h3>
                    </div>
                 </Grid>
               </div> 
        )
    }
}