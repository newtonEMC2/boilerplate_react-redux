import React, { Component } from "react";

import "./scss/application.scss";
import MainPage from './pages/MainPage'


class App extends Component {

    render() {
        return (
            <div>
                < MainPage />
                <div className="hello">Holaaa</div>
            </div>
        );
    }
}

export default App