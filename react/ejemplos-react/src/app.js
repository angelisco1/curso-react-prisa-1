import React from 'react';
import ReactDOM from 'react-dom';
import Saludo from './components/componentes/Saludo';
import SaludoFunc from './components/componentes/SaludoFunc';
import SaludoConProps from './components/componentes/SaludoConProps';
import Card from './components/componentes/Card';
import Contador from './components/componentes/Contador';
import EventSwitchCmp from './components/componentes/EventSwitchCmp';
import ContadorSinEstado from './components/flujo-de-datos/ContadorSinEstado';
import Form from './components/formulario/Form';
import EjercicioCV from './components/mi-cv/EjercicioCV';
import Caja from './components/should-component-update/Caja';
import CtxChild from './components/context/CtxChild';
import CtxChildHoc from './components/context/CtxChildHoc';
import CmpConFragment from './components/fragments/CmpConFragment';
import withHover from './components/hoc/HoveredCmp';
import withContext from './components/hoc/ContextCmp';
import ListaGeneros from './components/http/ListaGeneros';
import GeneroConPelis from './components/http/GeneroConPelis';
import withPeliculas from './components/hoc/GenerosConPeliculas';

import CardLayout from './components/componentes/CardLayout';

import './styles/style.css';

export const darkModeCtx = React.createContext();

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cuenta: 2,
      darkMode: false
      // usuario: '',
      // password: ''
    }
    this.cambiarCuenta = this.cambiarCuenta.bind(this);
  }

  cambiarCuenta(nuevaCuenta) {
    this.setState({
      cuenta: nuevaCuenta
    })
  }

  render() {

    const HoveredCard = withHover(Card);
    const NewCtxChildHoc = withContext(CtxChildHoc, darkModeCtx);
    const GeneroConPelisHoc = withPeliculas(GeneroConPelis);

    return (
      <div>
        {/* <h1>Hola mundo!!!</h1>
        <p>Un párrafo</p> */}


        <CardLayout>
          <img width="200" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png" />

          <h1>Mi título</h1>

          <p>React es una librería JS para crear interfaces de usuario</p>
        </CardLayout>

        <CardLayout>
          <img width="200" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png" />

          <h2>Mi título</h2>

          <Contador />
        </CardLayout>

        <CardLayout>
          <GeneroConPelisHoc nombre="infantil" />
        </CardLayout>


        <GeneroConPelisHoc nombre="action" />
        <ListaGeneros />
        <HoveredCard titulo="React" />
        <button type="button" onClick={() => {this.setState({darkMode: !this.state.darkMode})}}>Cambiar dark mode</button>
        <darkModeCtx.Provider value={this.state.darkMode}>
          <CmpConFragment />
          <NewCtxChildHoc />
          <CtxChild />
          <EjercicioCV />
        </darkModeCtx.Provider>
        <Form />
        <Caja num={this.state.cuenta} />
        <ContadorSinEstado cuenta={this.state.cuenta} handleChangeCuenta={this.cambiarCuenta} />
        <EventSwitchCmp />
        <Contador color="orange" />
        <Card titulo="React" descripcion="React es una librería JS para crear interfaces de usuario" imgUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png" action1="Ir a doc" action2="Ir a tutorial" />

        <Card titulo="React" />


        {/* <Card titulo="React" descripcion="React es una librería JS para crear interfaces de usuario" imgUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png" action1="Ir a doc" action2="Ir a tutorial" /> */}
        <Saludo />
        <SaludoFunc />
        <SaludoConProps nombre="Angel" />
        <SaludoConProps nombre="Charly" />
      </div>
    );
  }

}

ReactDOM.render(<App />, document.getElementById('root'));