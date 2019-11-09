import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";

import './App.scss';

import { Login, Register, ForgotPassword, PageNotFound, DataSetup, DataView } from './modules';
import { environmnet } from './helpers';

const App = () => {
    return (
        <>
            <BrowserRouter basename={environmnet.basePath}>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route path="/login" component={Login} />

                    <Route path="/register" component={Register} />                    
                    <Route path="/forgotPassword" component={ForgotPassword} />

                    <Route path="/loanSetup" component={DataSetup} />
                    <Route path="/loanView" component={DataView} />

                    <Route path="*" component={PageNotFound} />
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default App;
