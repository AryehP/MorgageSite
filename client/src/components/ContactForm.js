import { useRequestContext } from '../contexts/RequestContext'
import { useForm } from "react-hook-form";

function ContactForm() {
  const { handleSubmit, register } = useForm();
  const {addRequest} = useRequestContext();

  return (
    <div>
        <form onSubmit={handleSubmit(addRequest)}>
            <input type="text" {...register('first-name')}/>
            <input type="email" {...register('first-email')} />
            <input type="text" {...register('first-phone')} />
            <select {...register('first-status')}>
              <option value='single'>Single</option>
              <option value='couple'>Couple</option>
            </select>
            <select {...register('first-workstatus')}>
              <option value='employee'>Employee</option>
              <option value='independent'>Independent</option>
            </select>
            <br />
            <input type="text" {...register('second-name')}/>
            <input type="email" {...register('second-email')} />
            <input type="text" {...register('second-phone')} />
            <select {...register('second-workstatus')}>
              <option value='employee'>Employee</option>
              <option value='independent'>Independent</option>
            </select>
            <button type='submit'>submit</button>
        </form>
    </div>
  )
}

export default ContactForm