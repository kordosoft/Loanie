import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { environmnet } from './helpers';

import { Login, Register, ForgotPassword, PageNotFound, DataWizard } from './modules';

import 'bootstrap/dist/css/bootstrap.css';
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';

const App = () => {
  return (
    <>
      <div className="container container-fluid vh-100">
        <BrowserRouter basename={environmnet.basePath}>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/login" component={Login} />

            <Route path="/register" component={Register} />
            <Route path="/forgotPassword" component={ForgotPassword} />

            <Route path="/loan" component={DataWizard} />

            <Route path="*" component={PageNotFound} />
          </Switch>
        </BrowserRouter>
      </div>
      <ToastContainer />
    </>
  );
};

export default App;
