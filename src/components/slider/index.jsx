import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const Slider = ({ title, name, value, min, max, onChange }) => {
    return (
        <div className="form-group">
            <label className="form-label" htmlFor={name}>
                {title}: {value}
            </label>
            <input
                type="range"
                name={name}
                id={name}
                className="form-control-range"
                min={min}
                max={max}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

Slider.propTypes = {
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    min: PropTypes.number,
    max: PropTypes.number,
    onChange: PropTypes.func.isRequired,
};

Slider.defaultProps = {
    value: 0,
    min: 0,
    max: 100,
};

export default Slider;
