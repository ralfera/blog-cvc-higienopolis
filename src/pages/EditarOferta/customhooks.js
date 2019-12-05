import {useState} from 'react'

export default function useFormOfertas(callback) {
  
  const [formValues, setFormValues] = useState({destaque: false, detailsArray: []})

  const handleInputChange = (e) => {
    e.persist()
    e.preventDefault()
    if(e.target.type === "file") {
      setFormValues((formValues) => ({...formValues, [e.target.name]: e.target.files[0]}))
    } else {
      setFormValues((formValues) => ({...formValues, [e.target.name]: e.target.value}))
    }    
    }

    const handleDetailsArray = (e) => {
      e.preventDefault();
      setFormValues({...formValues, detailsArray:[...formValues.detailsArray, formValues.details]})
      document.getElementById("details").value=""
      
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      callback();
      setFormValues({destaque: false, detailsArray: []})
      document.getElementById("form").reset()
    }

   return {
    setFormValues,
    handleInputChange,
    handleDetailsArray,
    formValues,
    handleSubmit
  }
}
