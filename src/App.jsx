import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';

import { environmnet } from './helpers';

import { Login, Register, ForgotPassword, PageNotFound, DataSetup, DataView } from './modules';

import 'react-toastify/dist/ReactToastify.css';
import './App.scss';

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
            <ToastContainer />
        </>
    );
}

export default App;
