import PropTypes from 'prop-types';

import './Card.css';

const Card = ({ children, className }) => {
  const classes = `card ${className}`;
  return <div className={classes}>{children}</div>;
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
};

export default Card;
