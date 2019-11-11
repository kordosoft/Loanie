import React, { useState } from 'react';

import { DataSetupModel } from 'modules/loan/types';

import { Percentage, Currency, Button } from 'components';

import './index.scss';

const DataSetup = () => {
    const [dataSetup, setDataSetup] = useState(new DataSetupModel());
    
    const handleSubmit = (evt) => {
        evt.preventDefault();

        alert('nada');
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

                <Button type="submit" text="Next" className="btn-primary btn-block" />
            </form>
        </div>
    );
};

export default DataSetup;
