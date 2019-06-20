import React from 'react';
import Genero from './Genero';

class ListaGeneros extends React.Component {
  constructor() {
    super();
    this.state = {
      generos: []
    }
  }

  componentDidMount() {
    fetch('https://ejemplos-dc1c1.firebaseio.com/generos.json')
      .then(resp => resp.json())
      .then(datos => {
        const generos = Object.entries(datos).map(dato => ({id: dato[0], nombre: dato[1]}));
        this.setState({
          // generos: generos
          generos
        })
      })
  }

  render() {
    const listaGeneros = this.state.generos.map(g => <Genero key={g.id} nombre={g.nombre} />)
    return (
      <div>
        {listaGeneros}
      </div>
    )
  }
}

export default ListaGeneros;