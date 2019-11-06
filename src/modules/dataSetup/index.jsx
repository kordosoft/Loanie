import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const DataSetup = ({ text }) => {
    return (
        <div className="data-setup">
            {text}
        </div>
    );
};

DataSetup.propTypes = {
    text: PropTypes.node.isRequired
};

export default DataSetup;