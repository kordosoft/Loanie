import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Login, ForgotPassword, Register } from './components';

const AuthoringRouter = ({ loginSuccessPath }) => {
	return (
		<>
			<Switch>
				<Route exact path="/">
					<Login successPath={loginSuccessPath} />
				</Route>
				<Route path="/login">
					<Login successPath={loginSuccessPath} />
				</Route>
				<Route path="/register" component={Register} />
				<Route path="/forgotPassword" component={ForgotPassword} />
			</Switch>
		</>
	);
};

AuthoringRouter.propTypes = {
	loginSuccessPath: PropTypes.string.isRequired
};

export default AuthoringRouter;
