import React from 'react';

class ContadorSinEstado extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    let cuenta = event.target.id === 'btnDec' ? this.props.cuenta - 1 : this.props.cuenta + 1;
    this.props.handleChangeCuenta(cuenta);
  }

  render() {
    return (
      <div>
        <button type="button" id="btnDec" onClick={this.handleClick}>-</button>
        <span>Cuenta: {this.props.cuenta}</span>
        <button type="button" id="btnInc" onClick={this.handleClick}>+</button>
      </div>
    )
  }
}

export default ContadorSinEstado;