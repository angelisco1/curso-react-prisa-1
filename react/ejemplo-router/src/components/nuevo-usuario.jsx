import React from 'react';
import { withRouter } from 'react-router-dom';

class NuevoUsuario extends React.Component {
  constructor(props) {
    super(props);
    this.guardar = this.guardar.bind(this);
  }

  guardar() {
    console.log('Datos guardados!');
    this.props.history.push('/');
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <h2>Nuevo usuario</h2>
        <button type="button" onClick={this.guardar}>Guardar</button>
      </div>
    )
  }
}

export default NuevoUsuario;