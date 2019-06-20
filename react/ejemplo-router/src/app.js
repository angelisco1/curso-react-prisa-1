import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Inicio from './components/inicio';
import Usuario from './components/Usuario';
import NuevoUsuario from './components/nuevo-usuario';
import Nav from './components/Nav';


const App = () => (
  <div>
    <Nav />
    <hr/>
    <Route path="/usuarios" component={Inicio} />
    <Route path="/nuevo-usuario" component={NuevoUsuario} />
  </div>
);

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));