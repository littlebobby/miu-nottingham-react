import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss'

const Button = props => (
  <button className={styles.Button}>
    {props.children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;