import React from 'react';
import styles from './Input.module.scss';

import PropTypes from 'prop-types';


const Input = ({ type, onChange, id, placeholder }) => {
  // const capitalized = type.charAt(0).toUpperCase() + type.slice(1)
  return (
    <div className={styles.InputBox}>
      <label htmlFor={id}>{placeholder}</label>
      <input onChange={onChange} id={id} type={type} placeholder={placeholder} />
    </div>
  )
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Input;