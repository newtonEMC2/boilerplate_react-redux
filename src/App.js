import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import "./scss/application.scss";
import MainPage from './pages/MainPage'
import DetailsPage from './pages/DetailsPage'
import TopHeader from './components/headers/TopHeader'


class App extends Component {

    render() {
        return (
            <div>
                <section>
                    <TopHeader />
                </section>
                
                <section id="main">
                    <Route exact path='/' component={MainPage}></Route>
                </section>

                
            </div>
        );
    }
}

export default App