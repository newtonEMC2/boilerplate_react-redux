import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from "./App";
import createStore from './utils/store'
import registerServiceWorker from '../registerServiceWorker';



ReactDOM.render(
    <Provider store={createStore()}>
        <BrowserRouter>
            <Switch>
                <Route component={App}></Route>
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);

registerServiceWorker()