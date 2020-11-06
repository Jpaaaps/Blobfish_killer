import React from "react"
import { useForm } from "react-hook-form"
import ErrorMessage from './ErrorMessage'

import './Form.css'

const Form = () => {

  const {
    register,
    handleSubmit,
    errors,
    setError,
    clearError,
    formState: { isSubmitting }
	} = useForm()
	
  const onSubmit = data => {
    alert(JSON.stringify(data));
	}

  return (
    <form className="form_container" onSubmit={handleSubmit(onSubmit)}>
      
      <label>First Name</label>
      <input name="firstName" ref={register({ required: true })} />
      <ErrorMessage error={errors.firstName} />

      <label>Last Name</label>
      <input name="lastName" ref={register({ required: true, minLength: 2 })} />
      <ErrorMessage error={errors.firstName} />

      <label>Email</label>
      <input
        name="email"
        ref={register({ required: true, pattern: /^\S+@\S+$/i })}
      />
      <ErrorMessage error={errors.email} />

      <label>A message for us ?</label>
      <textarea name="aboutyou" ref={register} />

      <button type="submit" disabled={isSubmitting}>Submit</button>
    </form>
  )
}
export default Form
