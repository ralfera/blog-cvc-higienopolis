export default function validate(values) {
  
  let errors={}

  if(!values.email) {
    errors.email = "Endereço de Email é necessário. Preencha o campo e tente novamente."
  }  else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Endereço de Email Inválido. Verifique o e-mail digitado e tente novamente.';
  }
  if(!values.password) {
    errors.password = "Preencha o campo de e-mail"
  } else if (values.password.length < 6) {
    errors.password = "Sua senha deve possuir mais de 6 dígitos"
  }   
  return errors
}