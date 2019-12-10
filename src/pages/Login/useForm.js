import {useState, useEffect} from 'react';
import { useDispatch} from 'react-redux'
export default function useForm(callback, validate) {
  
  const [values, setValues] = useState({})
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(null)

  const dispatch = useDispatch();

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  const handleChange = (event) => {
    event.persist();
    setValues((values=>({...values, [event.target.name]: event.target.value})));    
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // if (event) event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);   
    setValues(values=>({...values}))
    console.error(errors)
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit
  }  
}
