import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import { identityService } from 'modules/authoring/services';

const Private = ({ children }) => {
	const history = useHistory();
	const { isLoggedIn } = identityService;

	useEffect(() => {
		if (!isLoggedIn) {
			history.push('/login');
		}
	}, [isLoggedIn, history]);

	return <>{children}</>;
};

Private.propTypes = {
	children: PropTypes.node.isRequired
};

export default Private;
