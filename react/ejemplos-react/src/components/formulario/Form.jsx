import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChangeUsername(event) {
    this.setState({
      username: event.target.value
    })
  }

  handleChangePassword(event) {
    this.setState({
      password: event.target.value
    })
  }

  handleClick(event) {
    event.preventDefault();
    console.log('Datos a guardar', this.state);
  }

  render() {
    return (
      <form>
        <div>
          <label htmlFor="username">Usuario</label>
          <input type="text" id="username" name="username" onChange={this.handleChangeUsername} value={this.state.username} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="text" id="password" name="password" onChange={this.handleChangePassword} value={this.state.password} />
        </div>
        <button type="submit" onClick={this.handleClick}>Guardar</button>
      </form>
    )
  }
}

export default Form;