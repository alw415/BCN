import React, { Component, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './BCN_Welcome_Page';

class BCN extends Component {
    render(){
        return (
            <Router>
                <div>
                    <Suspense fallback={<div>In progress</div>}>
                        <Switch>
                            <Route exact path="/" component={Homepage} />
                        </Switch>
                    </Suspense>
                </div>
            </Router>
        )
    }
}

ReactDOM.render(<BCN />, document.getElementById('home'));