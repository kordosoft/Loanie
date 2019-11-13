import React, { useState } from 'react';
import { Stepper } from 'components';

import { DataSetup, DataView } from 'modules/loan/components';

const DataWizard = () => {
    const onChange = (value) => {
        console.log(value);
    };

    const steps = [
        {
            title: 'Loan settings',
            content: <DataSetup onChange={onChange} />
        },
        {
            title: 'Loan view',
            content: <DataView onChange={onChange} />
        },
    ];

    return <Stepper title="Loan wizard" steps={steps} />;
};

export default DataWizard;
