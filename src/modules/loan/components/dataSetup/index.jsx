import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const DataSetup = () => {
    const handleSubmit = (evt) => {
        evt.preventDefault();

        identityService
            .login(login)
            .then(() => {
                history.push('/loanSetup');
            })
            .catch((error) => {
                toast.error(error.message);
            });
    };

    const inputOnChange = (evt) => {
        const { name } = evt.target;
        const { value } = evt.target;

        setLogin({ ...login, ...{ [name]: value } });
    };

    return (
        <div className="data-setup">
            <form onSubmit={handleSubmit} className="col">
                <Currency
                    inputType="number"
                    title="Loan principal"
                    name="loanPrincipal"
                    onChange={inputOnChange}
                    value={dataSetup.loanPrincipal}
                    currency={EUR}
                />

                <Percent
                    inputType="number"
                    title="Loan principal"
                    name="loanPrincipal"
                    onChange={inputOnChange}
                    value={dataSetup.interest}
                />

                <Button type="submit" text="Next" className="btn-primary btn-block" />
            </form>
        </div>
    );
};

DataSetup.propTypes = {
  text: PropTypes.node.isRequired,
};

export default DataSetup;
