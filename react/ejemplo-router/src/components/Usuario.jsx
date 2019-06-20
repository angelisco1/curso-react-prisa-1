import React from 'react';

class Usuario extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <h2>Usuario {this.props.match.params.id}</h2>
      </div>
    )
  }
}

export default Usuario;