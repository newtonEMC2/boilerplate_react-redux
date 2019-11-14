import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import "./scss/application.scss";
import MainPage from './pages/MainPage'
import DetailsPage from './pages/DetailsPage'

const Notfound = () => <h2>page has not been found</h2>

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" render={() => (
                        <Redirect to="/pokemon" />
                    )} />
                    <Route exact path='/pokemon' component={MainPage} />
                    <Route path='/pokemon/:name' component={DetailsPage} />
                    <Route component={Notfound} />

                </Switch>
            </BrowserRouter>
        );
    }
}

export default App