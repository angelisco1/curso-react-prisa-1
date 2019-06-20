import React from 'react';
import { Link, NavLink } from 'react-router-dom';

class Nav extends React.Component {
  render() {
    const linkActivo = {
      textDecoration: 'none'
    };
    return (
      <ul>
        <li><NavLink activeStyle={linkActivo} to="/usuarios" exact>Inicio</NavLink></li>
        <li><NavLink activeStyle={linkActivo} to="/nuevo-usuario">Nuevo Usuario</NavLink></li>

        <li><NavLink activeStyle={linkActivo} to="/usuarios/2">Usuario 2</NavLink></li>

        {/* <li><Link to="/">Inicio</Link></li>
        <li><Link to="/nuevo-usuario">Nuevo Usuario</Link></li> */}
      </ul>
    )
  }
}

export default Nav;