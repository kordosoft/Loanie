import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const DataView = ({ text }) => {
  return <div className="data-view">{text}</div>;
};

DataView.propTypes = {
  text: PropTypes.node.isRequired,
};

export default DataView;
