import React from 'react';

class Contador extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cuenta: 1
    }
    this.handleClickDecrement = this.handleClickDecrement.bind(this);
    // this.handleClickIncrement = this.handleClickIncrement.bind(this);
    this.handleClickIncrement = () => {
      console.log('Incrementa!!!')
      this.setState({
        cuenta: this.state.cuenta + 1
      })
      //TODO: @babel/plugin-proposal-class-properties
    }
  }

  handleClickDecrement(event) {
    // event.stopPropagation();
    console.log(event.target);
    console.log('Decrementa!!!')
    this.setState({
      cuenta: this.state.cuenta - 1
    })
  }

  handleClick(param1) {
    console.log('Pasa por aqui')
    return (event) => {
      console.log(event);
      console.log(param1);
    }
  }

  render() {
    return (
      <div>
        {/* <button type="button" onClick={(event) => {this.handleClickDecrement()}}>-</button> */}
        <button className="btn btn-warning" type="button" onClick={ this.handleClickDecrement}>-</button>
        <span>Cuenta: {this.state.cuenta}</span>
        <button className="btn btn-primary" type="button" onClick={this.handleClickIncrement}>+</button>
        <button type="button" onClick={this.handleClick(8)}>+</button>
      </div>
    )
  }
}

export default Contador;