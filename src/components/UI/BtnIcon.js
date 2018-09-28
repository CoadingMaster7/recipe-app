import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from 'reactstrap';

const BtnIcon = ({ className, icon, size, textColor, ...otherProps }) => {
  const cssClasses = classNames('btn-icon',
    className,
    size ? `btn-${size}` : false,
    textColor ? `text-${textColor}` : false,
  );

  return (
    <Button className={cssClasses} type="button" {...otherProps}>
      <FontAwesomeIcon icon={icon} />
    </Button>
  );
};

BtnIcon.propTypes = {
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
  className: PropTypes.string,
  size: PropTypes.string,
  textColor: PropTypes.string,
};

BtnIcon.defaultProps = {
  className: '',
  size: '',
  textColor: '',
};

export default BtnIcon;
