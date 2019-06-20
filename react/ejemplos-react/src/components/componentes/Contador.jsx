
import React from 'react';
import {useState, useEffect} from 'react';

const Contador = (props) => {

  const [cuenta, setCuenta] = useState(0);

  useEffect(() => {
    console.log('Se ha vuelto a pintar');

    return () => {
      console.log('Se va a eliminar')
    }

  })

  return (
    <div>
      <p onClick={() => setCuenta(cuenta+1)}>Cuenta: {cuenta}</p>
      {/* <button type="button" onClick={(event) => {this.handleClickDecrement()}}>-</button> */}
      {/* <button className="btn btn-warning" type="button" onClick={ this.handleClickDecrement}>-</button>
      <span>Cuenta: {this.state.cuenta}</span>
      <button className="btn btn-primary" type="button" onClick={this.handleClickIncrement}>+</button>
      <button type="button" onClick={this.handleClick(8)}>+</button> */}
    </div>
  )
}

export default Contador;