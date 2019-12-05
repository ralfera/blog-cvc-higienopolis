import React, {useState} from 'react'

export default function useOfertaDesque(){
  
  const [formInputs, setFormInputs] = useState()

  const inputHandleChange = (event) => {
    setFormInputs({
      ...formInputs,
      [event.target.name]: event.target.value
    })
    
  }
  
const formHandleClick = () => {
  console.log(formInputs)
  document.getElementById("form-orcamento").reset()
}

  return {
    inputHandleChange,
    formHandleClick
  }
}

