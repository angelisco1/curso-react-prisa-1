import React from 'react';
import { Link, Route } from 'react-router-dom';
import Usuario from './Usuario';

class Inicio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usuarios: [
        {id: 1, nombre: 'Angel'},
        {id: 2, nombre: 'Falco'},
        {id: 3, nombre: 'Koz'},
      ]
    }

  }

  render() {
    const linksUsuarios = this.state.usuarios.map(u => {
      return <li key={u.id}><Link to={`${this.props.match.url}/${u.id}`}>{u.nombre}</Link></li>
    })
    return (
      <div>
        <h2>Inicio</h2>
        <ul>
          {linksUsuarios}
        </ul>
        <hr/>
        <Route path={this.props.match.url + '/:id'} component={Usuario} />
      </div>
    )
  }
}

export default Inicio;