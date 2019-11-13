import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ title, name, inputType, value, step, placeholder, onChange, addOn }) => {
  const appendAddOn = () => {
    if (addOn === null) {
      return null;
    }

    return <div className="input-group-append">{addOn}</div>;
  };

  return (
    <div className="form-group">
      <label className="form-label" htmlFor={name}>
        {title}
      </label>
      <div className="input-group">
        <input
          className="form-control"
          id={name}
          name={name}
          type={inputType}
          value={value}
          step={step}
          placeholder={placeholder}
          onChange={onChange}
        />
        {appendAddOn()}
      </div>
    </div>
  );
};

Input.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  inputType: PropTypes.oneOf(['text', 'number', 'password']).isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  step: PropTypes.number,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  addOn: PropTypes.node,
};

Input.defaultProps = {
  placeholder: '',
  step: 1,
  addOn: null,
};

export default Input;
