import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import { Form } from 'semantic-ui-react'

import cssModules from './event_new.module.css'

class EventNew extends Component {
  renderField(field) {
    console.log(field)
    console.log('hi')
    console.log(cssModules)
    return (
      <Form.Field>
        <label>{field.eventLabel}</label>
        {' '}
        <input placeholder={field.placeholder} {...field.input} type='text'></input>
      </Form.Field>
    )
  }
  render() {
    return (
      <Form className={cssModules.form}>
          <Field 
            eventLabel = 'Title:'
            placeholder='event title'
            name='title'
            component={this.renderField}>
          </Field>
          <Field 
            eventLabel = 'Link:'
            placeholder='a link for more info'
            name='link'
            component={this.renderField}>
          </Field>
          <Field 
            eventLabel = 'Breif:'
            placeholder='short description'
            name='brief'
            component={this.renderField}>
          </Field>
          <Field 
            eventLabel = 'Location:'
            placeholder='Audi'
            name='location'
            component={this.renderField}>
          </Field>
          <Field 
            eventLabel = 'Start Time:'
            placeholder='11-08 21:00'
            name='startTime'
            component={this.renderField}>
          </Field>
          <Field 
            eventLabel = 'End Time:'
            placeholder='11-08 23:00'
            name='endTime'
            component={this.renderField}>
          </Field>
      </Form>
    )
  }
}

export default reduxForm({
  form: 'EventNewForm'
})(EventNew)
