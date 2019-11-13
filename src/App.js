import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import "./scss/application.scss";
import MainPage from './pages/MainPage'
import DetailsPage from './pages/DetailsPage'


class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <div id="main">
                    <Switch>
                        <Route exact path='/' component={MainPage} />
                        <Route path='/:name' component={DetailsPage} />
                    </Switch>
                </div>
            </BrowserRouter>



        );
    }
}

export default App