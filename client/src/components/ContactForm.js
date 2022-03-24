import React from 'react'

function ContactForm() {
  return (
    <div>
        <form>
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
        </form>
    </div>
  )
}

export default ContactForm