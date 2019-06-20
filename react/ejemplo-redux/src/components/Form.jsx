import React from 'react';
import { connect } from 'react-redux';
import { addTarea } from '../store/lista-tareas/actions';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: '',
      completada: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.type === 'text' ? event.target.value : event.target.checked
    })
  }

  handleClick(event) {
    event.preventDefault();
    this.props.addTarea(this.state);
    // const action = addTarea(this.state);
    // this.props.store.dispatch(action);
  }

  render() {
    return (
      <form>
        <div>
          <label htmlFor="nombre">Nombre tarea:</label>
          <input type="text" id="nombre" value={this.state.nombre} onChange={this.handleChange} />
        </div>
        <div>
          <label htmlFor="completada">Completada:</label>
          <input type="checkbox" id="completada" checked={this.state.completada} onChange={this.handleChange} />
        </div>
        <button type="submit" onClick={this.handleClick}>Guardar</button>
      </form>
    )
  }
}

const mapDispatchToProps = {
  addTarea
}

const withProps = connect(null, mapDispatchToProps);

export default withProps(Form);
// export default Form;