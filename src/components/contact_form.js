import React from 'react'
import { Field, reduxForm } from 'redux-form'

const ContactForm = props => {
  const { handleSubmit, pristine, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name</label>
        <div>
          <Field
            name="firstName"
            component="input"
            type="text"
            placeholder="First Name"
          />
        </div>
      </div>
      <div>
        <label>Contact Number</label>
        <div>
          <Field
            name="contact"
            component="input"
            type="tel"
            placeholder="Contact Number"
          />
        </div>
      </div>
      <div>
        <label>No. of Seats</label>
        <div>
          <Field
            name="seats"
            component="input"
            type="number"
            placeholder="No. of Seats"
          />
        </div>
      </div>
      <div>
        <label>Notes</label>
        <div>
          <Field name="notes" component="textarea" />
        </div>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'simple' // a unique identifier for this form
})(ContactForm)
