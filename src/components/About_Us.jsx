import React, {Component} from 'react';
import {Grid} from 'react-bootstrap';
import Navbar from './BCN_NavBar';
import Andrew from './Drew.PNG';
import Angel from './Angel.PNG';
import Derrick from './derrick.PNG';
import Diante from './Diante.PNG';
import Greg from './greg.PNG';
import Jerome from './Jerome.PNG';
import Juice from './Juice.PNG';
import Kae from './Kae.PNG';
import Kenny from './Kenny.PNG';
import Mel from './Mel.PNG';
import Rati from './Rati.PNG';
import Skool from './Skool.PNG';
import Titi from './titi.PNG';

export default class About extends Component {
    render(){
        return(
            <div className="page">
              <Navbar/>
                <Grid>  
                <div className="mission">
                    <div className="mission-label">
                        <h1>Mission</h1>
                    </div>
                    <div className="mission-statement">
                        <p>The Black Creators Network provides support for black innovators by establishing a space for businesses to be promoted, informative resources to be exchanged, and community to be made by connecting individuals with one another</p>
                    </div>
                </div>
                <div className="vision">
                    <div className="vision-label">
                        <h1>Vision</h1>
                    </div>
                    <div className="vision-statement">
                        <p>To create a space for creators to network and have a support system to bounce ideas off of and get feedback to perfect their craft. To help people realize that they can follow their dreams</p>
                    </div>
                </div>
                <div className="founders">
                    <div className="founders-label">
                        <h1>Founders</h1>
                    </div>
                    <div className="founders-list">
                        <div className="Rati-info">
                            <img src={Rati} width="250" height="400"/>
                            <div className="Rati-text">
                                Rati 
                               <p> President </p>
                            </div>
                        </div>
                        <div className="Diante-info">
                            <img src={Diante} width="250" height="400" />
                            <div className="Diante-text">
                                Diante 
                               <p> Vice President </p>
                            </div>
                        </div>
                        <div className="Mel-info">
                            <img src={Mel} width="250" height="400" />
                            <div className="Mel-text">
                                Mel 
                               <p> Admin </p>
                            </div>
                        </div>
                        <div className="Derrick-info">
                            <img src={Derrick} width="250" height="400"/>
                            <div className="Derrick-text">
                                Derrick 
                               <p> Admin </p>
                            </div>
                        </div>
                        <div className="Kenny-info">
                            <img src={Kenny} width="250" height="400" />
                            <div className="Kenny-text">
                                Kendra 
                               <p> Treasurer/CFO </p>
                            </div>
                        </div>
                        <div className="Skool-info">
                            <img src={Skool} width="250" height="400" />
                            <div className="Skool-text">
                                Will
                                <p>Director</p>
                            </div>
                        </div>
                        <div className="Kae-info">
                            <img src={Kae} width="250" height="400" />
                            <div className="Kae-text">
                                Akaela
                                <p>Public Relations Chair</p>
                            </div>
                        </div>
                        <div className="Andrew-info">
                            <img src={Andrew} width="250" height="400" />
                            <div className="Andrew-text">
                                Andrew
                                <p>Head of Tech Department</p>
                            </div>
                        </div>
                        <div className="Angel-info">
                            <img src={Angel} width="250" height="400" />
                            <div className="Angel-text">
                                Angel
                                <p>Head of Media Department</p>
                            </div>
                        </div>
                        <div className="Greg-info">
                            <img src={Greg} width="250" height="400" />
                            <div className="Greg-text">
                                Greg
                                <p>Head of Culinary Department</p>
                            </div>
                        </div>
                        <div className="Jerome-info">
                            <img src={Jerome} width="250" height="400" />
                            <div className="Jerome-text">
                                Jerome
                                <p>Head of Music Department</p>
                            </div>
                        </div>
                        <div className="Juice-info">
                            <img src={Juice} width="250" height="400" />
                            <div className="Juice-text">
                                Juice
                                <p>Head of Writing Department</p>
                            </div>
                        </div>
                        <div className="Titi-info">
                            <img src={Titi} width="250" height="400" />
                            <div className="Titi-text">
                                Titi
                                <p>Head of Beauty Department</p>
                            </div>
                        </div>
                    </div>
                </div>
                </Grid>
            </div>
        )
    }
}