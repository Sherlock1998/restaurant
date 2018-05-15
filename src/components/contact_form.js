import React from 'react';
import { Field, reduxForm } from 'redux-form';

const ContactForm = props => {
  const { handleSubmit, pristine, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div className="inputs">
        <Field
          className="input field"
          name="firstName"
          component="input"
          type="text"
          placeholder="First Name"
        />
        <Field
          className="input field"
          name="contact"
          component="input"
          type="tel"
          placeholder="Contact Number"
        />
        <Field
          className="input field"
          name="seats"
          component="input"
          type="number"
          placeholder="No. of Seats"
        />
      </div>
      <Field
        name="notes"
        component="textarea"
        type="text"
        placeholder="Notes"
        className="field textarea"
      />
      <button type="submit" disabled={pristine || submitting}>
        Submit
      </button>
    </form>
  );
};

export default reduxForm({
  form: 'contactForm' // a unique identifier for this form
})(ContactForm);
