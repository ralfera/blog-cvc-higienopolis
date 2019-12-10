import React, {useState, useEffect} from 'react';
import { Button, Form, Spinner} from 'react-bootstrap';
import './styles.css'
import db from '../../config/firebase'
import 'firebase/auth'
import useForm from './useForm'
import validate from './formValidation'
import {Redirect} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'

export default function LoginApp() {

  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(0)

  const {
    values,
    errors,
    handleChange,
    handleSubmit,
  } = useForm(login, validate);

  async function login() {
    console.log("login")

    try {
      setIsLoading(1)
      const userLogged = await db.auth().signInWithEmailAndPassword(values.email, values.password)
      const {user: {uid}} = userLogged
      setIsLoading(0)
      if(uid){
        dispatch({type:"LOG_IN", usuarioEmail:values.email, uid: uid})
      }
    } catch (error) {
      console.error(error)
    }
    //   try{
  //   setIsLoading(1)
  //   const {User: {user: {uid}}} = await db.auth().signInWithEmailAndPassword(values.email, values.password)
  //   setIsLoading(0)
  //   if(uid) {    
  //   dispatch({type:"LOG_IN", usuarioEmail: values.email, uid: uid})    
  // }
  // }
  //   catch (error) {
  //     if(error.code == "auth/wrong-password") {
  //     }
  //   }    
  }

  // console.log(values)
  return (
    <div className="login-wrapper">
      {useSelector(state =>
        state.User.user.isLoggedIn ? <Redirect to="/admin" /> : null
      )}
      <div className="login-form-wrapper">
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="email">
            <Form.Label>Digite Seu Email</Form.Label>
            <Form.Control
              size="lg"
              name="email"
              onChange={handleChange}
              value={values.email}
            />
            {errors.email && <p className="help is-danger">{errors.email}</p>}
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Digite Sua Senha</Form.Label>
            <Form.Control
              size="lg"
              name="password"
              onChange={handleChange}
              value={values.password}
            />
            {errors.password && (
              <p className="help is-danger">{errors.password}</p>
            )}
          </Form.Group>

          {isLoading <= 0 ? (
            <Button variant="btn-large btn-block btn btn-cvc" type="submit">
              Logar
            </Button>
          ) : (
            <Button variant="success btn-block" disabled>
              <Spinner
                as="span"
                animation="grow"
                size="lg"
                role="status"
                aria-hidden="true"
              />
              Carregando...
            </Button>
          )}
        </Form>
      </div>
    </div>
  );
}
