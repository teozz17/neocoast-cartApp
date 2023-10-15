import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import './styles.scss';

const CustomButton = ({
  isDisabled = false,
  type = 'primary',
  name,
  onClick,
}) => (
  <button
    disabled={isDisabled}
    onClick={(event) => {
      event.preventDefault(); // stops the parent (Movie) onClick from firing

      onClick();
    }}
    className={
      cn('custom-button', {
        'custom-button--secondary': type === 'secondary',
      })
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
