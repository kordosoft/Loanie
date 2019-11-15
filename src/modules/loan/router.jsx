import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Private } from 'components';
import { DataWizard } from './components';

const LoanRouter = () => {
	return (
		<>
			<Private>
				<Switch>
					<Route path="/loan" component={DataWizard} />
				</Switch>
			</Private>
		</>
	);
};

export default LoanRouter;
