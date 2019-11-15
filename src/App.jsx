import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { environmnet } from './helpers';

import { LoanRouter, AuthoringRouter } from './modules';

import 'bootstrap/dist/css/bootstrap.css';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
	return (
		<>
			<div className="container container-fluid vh-100">
				<BrowserRouter basename={environmnet.basePath}>
					<AuthoringRouter loginSuccessPath="loan" />
					<LoanRouter />
				</BrowserRouter>
			</div>
			<ToastContainer />
		</>
	);
};

export default App;
