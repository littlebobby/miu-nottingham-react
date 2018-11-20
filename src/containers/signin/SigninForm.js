import React from 'react'
import { Field, reduxForm } from 'redux-form'
import styles from './SigninForm.module.css'


const onSubmit = values => {
  console.log(values);
  alert(JSON.stringify(values))

}

const SigninForm = ({ handleSubmit }) => {
  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.inputBox}>
        <label className={styles.label} htmlFor="email">Email</label>
        <Field className={styles.input} name="email" component="input" type="text" placeholder='Email' />
      </div>
      <div className={styles.inputBox}>
        <label className={styles.label} htmlFor="password">Password</label>
        <Field className={styles.input} name="password" component="input" type="password" placeholder='Password' />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

export default reduxForm({
  // a unique name for the form
  form: 'signin'
})(SigninForm)
