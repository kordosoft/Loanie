import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";

import './App.scss';

import { Login, Register, ForgotPassword, PageNotFound } from './modules';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/login" component={Login} />
                    <Route path="/forgotPassword" component={ForgotPassword} />
                    <Route component={PageNotFound} />
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default App;
