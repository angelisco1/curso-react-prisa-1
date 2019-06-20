import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Inicio from './components/inicio';
import Usuario from './components/Usuario';
import NuevoUsuario from './components/nuevo-usuario';
import Nav from './components/Nav';
import Error from './components/Error';


const App = () => (
  <div>
    <Nav />
    <hr/>
    <Switch>
      <Redirect exact from="/" to="/usuarios" />
      <Route path="/usuarios" component={Inicio} />
      <Route path="/nuevo-usuario" component={NuevoUsuario} />
      {/* <Route path="/:p" component={Inicio} /> */}
      <Route path="*" component={Error} />
    </Switch>
  </div>
);

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));