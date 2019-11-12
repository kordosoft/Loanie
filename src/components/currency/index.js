import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEuroSign as Euro } from '@fortawesome/free-solid-svg-icons';

import { Input } from 'components';

const Currency = (props) => {
  const addOn = () => {
    return (
      <span className="input-group-text">
        <FontAwesomeIcon icon={Euro} />
      </span>
    );
  };

  return <Input {...props} inputType="number" addOn={addOn()} />;
};

Currency.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

Currency.defaultProps = {
  placeholder: '',
};

export default Currency;
