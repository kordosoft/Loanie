import React from 'react';
import { Stepper } from 'components';

import { DataSetup, DataView } from 'modules/loan/components';

const DataWizard = () => {
    const steps = [
        {
            title: 'Loan settings',
            content: <DataSetup />,
        },
        {
            title: 'Loan view',
            content: <DataView />,
        },
    ];

    return <Stepper title="Loan wizard" steps={steps} />;
};

export default DataWizard;
