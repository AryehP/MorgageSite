import React from 'react';
import { useRequestContext } from '../contexts/RequestContext'
import { set, useForm } from "react-hook-form";
import { useState } from 'react';
import './ContactForm.css';



function ContactForm() {
  const { handleSubmit, register } = useForm();
  const {addRequest} = useRequestContext();
  const [formType, setFormType] = useState(false);

  const dropDownChange = () => {
    console.log(formType);
    formType == true ? setFormType(false) : setFormType(true);
  }
  const coupleForm = (<div className='partner-form, form, contact-form'>
  <label className='form-label'>full name</label>
  <input type="text" name='partner-fullname' className='partner-input, form-input' {...register('partner-fullname')}/>
  <label className='form-label'>email adress</label>
  <input type="email" name='partner-email' className='partner-input, form-input' {...register('partner-email')} />
  <label className='form-label'>phone number</label>
  <input type="text" name='partner-phone' className='partner-input, form-input' {...register('partner-phone')} />
  <label className='form-label'>work status</label>
  <select name='partner-workstatus' className='partner-input, form-input' {...register('partner-workstatus')}>
    <option value='employee'>Employee</option>
    <option value='independent'>Independent</option>
  </select>
  </div>);
  
  return (
    <div className='form'>
        <form className='contact-form' onSubmit={handleSubmit(addRequest)}>
            <label className='form-label'>full name</label>
            <input type="text" name='requester-fullname' className='form-input' {...register('requester-fullname')}/>
            <label className='form-label'>email adress</label>
            <input type="email" name='requester-email' className='form-input' {...register('requester-email')} />
            <label className='form-label'>phone number</label>
            <input type="text" name='requester-phone' className='form-input' {...register('requester-phone')} />
            <label className='form-label'>life status</label>
            <select className='form-input' name='requester-lifestatus' {...register('requester-lifestatus')} onChange={dropDownChange} >
              <option value='single'>Single</option>
              <option value='couple'>Couple</option>
            </select>
            <label className='form-label'>work status</label>
            <select className='form-input' name='requester-workstatus' {...register('requester-workstatus')}>
              <option value='employee'>Employee</option>
              <option value='independent'>Independent</option>
            </select>
            <br />
            {formType == true ? coupleForm : null}
            <button type='submit' className='form-btn'>submit</button>
        </form>
    </div>
  )
}

export default ContactForm