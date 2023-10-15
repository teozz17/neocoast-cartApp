import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

const CustomButton = ({
  isDisabled = false,
  type = 'primary',
  name,
  onClick,
}) => (
  <button
    disabled={isDisabled}
    onClick={onClick}
    className={
      cn('custom-button', { 'custom-buttom--secondary': type === 'secondary' })
    }
  >
    {name}
  </button>
);

CustomButton.propTypes = {
  isDisabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['primary', 'secondary']),
};

export default CustomButton;
