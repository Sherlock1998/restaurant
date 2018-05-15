import React from 'react';
import ContactForm from './contact_form';

const Modal = ({ onCancel }) => {
  return (
    <div className="modal">
      <button onClick={onCancel}>X</button>
      <ContactForm />
    </div>
  );
};

export default Modal;
