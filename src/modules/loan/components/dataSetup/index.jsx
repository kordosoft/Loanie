import React, { useState } from 'react';
import { toast } from 'react-toastify';

import { DataSetupModel } from 'modules/loan/types';

import { Percentage, Currency, Button, Slider } from 'components';

import './index.scss';

const DataSetup = () => {
    const [dataSetup, setDataSetup] = useState(new DataSetupModel());

    const handleSubmit = (evt) => {
        evt.preventDefault();

        toast.success('Submited; updated pipeline');
    };

    const inputOnChange = (evt) => {
        const { name } = evt.target;
        const { value } = evt.target;

        setDataSetup({ ...dataSetup, ...{ [name]: value } });
    };

    return (
        <div className="data-setup">
            <form onSubmit={handleSubmit} className="col">
                <Currency
                    title="Loan principal"
                    name="loanPrincipal"
                    onChange={inputOnChange}
                    value={dataSetup.loanPrincipal}
                />

                <Percentage
                    title="Interest"
                    name="interestRate"
                    onChange={inputOnChange}
                    value={dataSetup.interestRate}
                />

                <Slider title="Number of payments" name="numberOfPayments" value={dataSetup.numberOfPayments} max={360} onChange={inputOnChange} />

                <Button type="submit" text="Next" className="btn-primary btn-block" />
            </form>
        </div>
    );
};

export default DataSetup;
