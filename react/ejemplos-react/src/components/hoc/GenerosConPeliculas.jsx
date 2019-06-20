import React from 'react';
import Loader from '../componentes/Loader';

const withPeliculas = (WrappedCmp) => {
  return class extends React.Component {
    constructor() {
      super();
      this.state = {
        peliculas: [],
        cargando: true
      }
    }

    componentDidMount() {
      fetch(`https://ejemplos-dc1c1.firebaseio.com/peliculas/${this.props.nombre}.json`)
        .then(resp => resp.json())
        .then(datos => {
          const peliculas = Object.entries(datos).map(dato => ({id: dato[0], nombre: dato[1]}));
          setTimeout(() => {
            this.setState({
              peliculas,
              cargando: false
            })
          }, 1500)
        })
    }

    render() {
      return this.state.cargando ? <Loader /> : <WrappedCmp {...this.props} peliculas={this.state.peliculas} />;
    }
  }
}

export default withPeliculas;