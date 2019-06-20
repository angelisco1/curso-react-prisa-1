import React from 'react';

class SaludoConProps extends React.Component {
  render() {
    return (
      <p>Hola {this.props.nombre}</p>
    )
  }
}

export default SaludoConProps;