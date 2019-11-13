import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const Header = ({ leftZone, centerZone, rightZone }) => {
    return (
        <div className="loan-header">
            <div className="loan-header-left">{leftZone}</div>
            <div className="loan-header-center">{centerZone}</div>
            <div className="loan-header-right">{rightZone}</div>
        </div>
    );
};

Header.propTypes = {
    leftZone: PropTypes.node,
    centerZone: PropTypes.node.isRequired,
    rightZone: PropTypes.node,
};

Header.defaultProps = {
    leftZone: '',
    rightZone: '',
};

export default Header;
