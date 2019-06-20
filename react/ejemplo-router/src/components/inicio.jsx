import React from 'react';
import { Link, Route } from 'react-router-dom';
import Usuario from './Usuario';
import EditarUsuario from './EditarUsuario';

class Inicio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logueado: false,
      usuarios: [
        {id: 1, nombre: 'Angel'},
        {id: 2, nombre: 'Falco'},
        {id: 3, nombre: 'Koz'},
      ]
    }
  }

  render() {
    const linksUsuarios = this.state.usuarios.map(u => {
      return (
        <li key={u.id}>
          {u.nombre}
          <Link to={`${this.props.match.url}/${u.id}`}>Info</Link>
          <Link to={{pathname: `${this.props.match.url}/editar/${u.id}`, state: {nombre: u.nombre}}}>Editar</Link>
        </li>
      )
    })
    return (
      <div>
        <h2>Inicio</h2>
        <ul>
          {linksUsuarios}
        </ul>
        <hr/>
        {
          this.state.logueado ? <Route path={this.props.match.url + '/:id'} component={Usuario} /> : null
        }
        <Route path={this.props.match.url + '/editar/:id'} component={EditarUsuario} />
      </div>
    )
  }
}

export default Inicio;