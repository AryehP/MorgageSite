import React, { useRef } from 'react'
import { useRequestContext } from '../contexts/RequestContext'

function ContactForm() {

  const {state, addRequest} = useRequestContext();
  const form = useRef(null);

  return (
    <div>
        <form ref={form}>
            <input type="text" name='name'/>
            <input type="email" name='email' />
            <input type="text" name='phone' />
            <select>
              <option value='single'>Single</option>
              <option value='couple'>Couple</option>
            </select>
            <select>
              <option value='employee'>Employee</option>
              <option value='independent'>Independent</option>
            </select>
            <br />
            <input type="text" name='name'/>
            <input type="email" name='email' />
            <input type="text" name='phone' />
            <select>
              <option value='employee'>Employee</option>
              <option value='independent'>Independent</option>
            </select>
            <button type='submit' onClick={() => addRequest()}>submit</button>
        </form>
    </div>
  )
}

export default ContactForm