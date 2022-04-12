import React from 'react';
import { useRequestContext } from '../contexts/RequestContext'
import { set, useForm } from "react-hook-form";
import { useState } from 'react';



function ContactForm() {
  const { handleSubmit, register } = useForm();
  const {addRequest} = useRequestContext();
  const [formType, setFormType] = useState(false);

  const dropDownChange = () => {
    console.log(formType);
    formType == true ? setFormType(false) : setFormType(true);
  }
  const coupleForm = (<div className='partner-form'>
  <input type="text" className='partner-input' {...register('partner-fullname')}/>
  <input type="email" className='partner-input' {...register('partner-email')} />
  <input type="text" className='partner-input' {...register('partner-phone')} />
  <select className='partner-input' {...register('partner-workstatus')}>
    <option value='employee'>Employee</option>
    <option value='independent'>Independent</option>
  </select>
  </div>);
  
  return (
    <div>
        <form onSubmit={handleSubmit(addRequest)}>
            <input type="text" {...register('requester-fullname')}/>
            <input type="email" {...register('requester-email')} />
            <input type="text" {...register('requester-phone')} />
            <select {...register('requester-lifestatus')} onChange={dropDownChange} >
              <option value='single'>Single</option>
              <option value='couple'>Couple</option>
            </select>
            <select {...register('requester-workstatus')}>
              <option value='employee'>Employee</option>
              <option value='independent'>Independent</option>
            </select>
            <br />
            {formType == true ? coupleForm : null}
            <button type='submit'>submit</button>
        </form>
    </div>
  )
}

export default ContactForm