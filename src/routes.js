import React from 'react'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'

import App from './App'
import Contato from './pages/Contato/'

export default function Routes() {
  return (
    
    <BrowserRouter>
      <Route exact path="/" component={App}/>
      <Route exact path="/contato" component={Contato}/>
    </BrowserRouter>

  );
}
