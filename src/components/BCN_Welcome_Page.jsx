import React, {Component} from 'react';
import Grid from 'react-bootstrap';
import NavBar from './BCN_NavBar';

export default class WelcomePage extends Component {
    render(){
        return(
            <div>
                <NavBar/>
                <Grid>
                    <div className="welcome">
                        <h1> Welcome to the Black Creators Network</h1>
                    </div>
                    <div className="info">
                        <h3> Mission statement goes here</h3>
                    </div>
                </Grid>
            </div>
        );
    }
}