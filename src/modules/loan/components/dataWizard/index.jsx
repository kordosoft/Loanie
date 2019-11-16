import React, { useState } from 'react';
import { toast } from 'react-toastify';

import { Stepper } from 'components';
import { DataSetup, DataView } from 'modules/loan/components';

import { DataSetupModel } from 'modules/loan/types';

const DataWizard = () => {
	const [values, setValues] = useState({
		DataSetup: new DataSetupModel()
	});
	const [currentStep, setCurrentStep] = useState(0);

	const onChange = (key, value) => {
		setValues({ ...values, [key]: value });

		// eslint-disable-next-line no-use-before-define
		if (currentStep + 1 < steps.length) {
			setCurrentStep(currentStep + 1);
		} else {
			toast.success('Done');
		}
	};

	const steps = [
		{
			title: 'Loan settings',
			content: <DataSetup onChange={onChange} data={values.DataSetup} />
		},
		{
			title: 'Loan view',
			content: <DataView onChange={onChange} data={values.DataSetup} />
		}
	];

	return <Stepper title="Loan wizard" steps={steps} currentStep={currentStep} />;
};

export default DataWizard;
