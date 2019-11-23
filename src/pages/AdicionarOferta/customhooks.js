import React from 'react';
import {useState} from 'react'

// import { Container } from './styles';

export default function useFormSubmit(callback) {
  
  const [inputs, setInputs] = useState({})

  const handleSubmit = (e) => {
    if(e) {
      e.preventDefault()
    }
    callback();
  }

  const handleInputChanges = (e) => {
    e.persist()
    setInputs({...inputs, [e.target.name]: e.target.value})
  }
  
  return {
    handleSubmit,
    handleInputChanges,
    inputs
  }
}
