import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import MainPage from "./App";
import createStore from './utils/store'

ReactDOM.render(
    <Provider store={createStore()}>
        <MainPage />
    </Provider>,
    document.getElementById("root")
);