import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Avatar = ({ className, src, alt }) => {
  const cssClasses = classNames('avatar', className);

  return (
    <div className={cssClasses}>
      <img src={src} alt={alt} />
    </div>
  );
};

Avatar.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
};

Avatar.defaultProps = {
  className: '',
  src: '',
  alt: 'avatar',
};

export default Avatar;
