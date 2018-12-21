import React, {Component} from 'react';
import {Grid} from 'react-bootstrap';
import ReactDOM from 'react-dom';
import Navbar from './BCN_NavBar';
import logo from './BlkCreators_logo.jpg';
import twitter from './twitter.png';
import insta from './insta.png';
import facebook from './facebook.png';

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
                    <div className="links">
                        <div className="twitter-profile">
                            <a href="https://twitter.com/blkcreators">
                            <img src={twitter} width="200" height="200"/>
                            </a>
                        </div>
                        <div className="insta-profile">
                            <a href="https://www.instagram.com/blkcreators/?hl=en">
                            <img src={insta} width="200" height="200"/>
                            </a>
                        </div>
                        <div className="facebook-profile">
                            <a href="https://www.facebook.com/blkcreatorsnetwork/">
                            <img src={facebook} width="200" height="200"/>
                            </a>
                      </div>
                    </div>
                 </Grid>
               </div> 
        )
    }
}