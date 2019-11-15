import React, { useState } from 'react';
import { Stepper } from 'components';

import { DataSetup, DataView } from 'modules/loan/components';
import { DataViewModel, DataSetupModel } from 'modules/loan/types';

const DataWizard = () => {
	const [values, setValues] = useState({
		DataView: new DataViewModel(),
		DataSetup: new DataSetupModel()
	});

	const onChange = (key, value) => {
		setValues({ ...values, [key]: value });

		// eslint-disable-next-line no-console
		console.log(values);
	};

	const steps = [
		{
			title: 'Loan settings',
			content: <DataSetup onChange={onChange} data={values.DataSetup} />
		},
		{
			title: 'Loan view',
			content: <DataView onChange={onChange} data={values.DataView} />
		}
	];

	return <Stepper title="Loan wizard" steps={steps} />;
};

export default DataWizard;
