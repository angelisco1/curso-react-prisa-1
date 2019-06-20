import React from 'react';

class EditarUsuario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datosGuardados: false
    }
    this.salir = this.salir.bind(this);
  }

  salir() {
    if (this.state.datosGuardados || confirm('Quieres salir? Perderas los datos si no los guardas...')) {
      this.props.history.push('/usuarios');
    }
  }

  render() {
    // console.log(this.props.location.state.nombre)
    return (
      <div>
        <h3>Editando Usuario {this.props.location.state.nombre} ({this.props.match.params.id})</h3>
        <button type="button" onClick={this.salir}>Salir</button>
      </div>
    )
  }
}

export default EditarUsuario;