import React from 'react'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'

import App from './App'
import Contato from './pages/Contato/'
import Login from './pages/Login/'
import AdminPage from './pages/Admin'
import AdicionarOferta from './pages/AdicionarOferta'
import ListarOferta from './pages/ListaOfertas'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/contato" component={Contato} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/admin" component={AdminPage} />
        <Route exact path="/adicionar" component={AdicionarOferta} />
        <Route exact path="/listar" component={ListarOferta} />
        
      </Switch>
    </BrowserRouter>
  );
}
