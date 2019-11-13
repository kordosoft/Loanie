import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const DataView = ({ text }) => {
  return <div className="data-view">{text}</div>;
};

DataView.propTypes = {
  text: PropTypes.node,
};

DataView.defaultProps = {
    text: 'sexy view XOXO'
};

export default DataView;
