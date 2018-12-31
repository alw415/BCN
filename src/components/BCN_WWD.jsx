import React, {Component} from 'react';
import {Grid} from 'react-bootstrap';
import Navbar from './BCN_NavBar';

export default class WWD extends Component{
    render(){
        return(
            <div className="WWD_page">
                <Navbar/>
                <Grid>
                    <div className="Promos">
                        <h2><u>SOCIAL MEDIA PROMOTIONS</u></h2>
                            <p>As supporters of innovation, if you are a small business owner,
                            musician, artist, developer, or media creator, this platform is here 
                            to develop you brand. We post information about people's businesses
                            on all of our social media platforms. We publically share and support creators and provide
                            our followers with information on where to find them. </p>

                            <p> If you would like for us to help your craft or product reach
                             more individuals there's a multitude of ways to inform us. </p>

                            <p> You can email us at <h3>blackcreatorsnetwork@gmail.com</h3> follow us and message us directly on our social media pages (found on our home page)
                             or contact the head of the specific department your craft or business represents (insert link to "Get Invloved" tab here</p>

                            <p> From there, let us know what your company or brand is and show us
                                a few examples of your work so we can work on promoting you! 
                            </p>
                    </div>

                    <div className="Community">
                        <h2><u>PROVIDE COMMUNITY</u></h2>
                            <p></p>
                   </div>

                    <div className="WorkComp">
                        <h2><u>WORKSHOPS AND COMPETITIONS</u></h2>
                            <p></p>
                    </div>    
                </Grid>
            </div>
        )
    }
}