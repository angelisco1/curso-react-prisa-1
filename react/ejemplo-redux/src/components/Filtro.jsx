import React from 'react';
import { connect } from 'react-redux';
import { filterTareas } from '../store/lista-tareas/actions';

const Filtro = (props) => {
  return (
    <div>
      <label htmlFor="filtro">Filtrar tareas:</label>
      <input type="text" id="filtro" onChange={
        (event) => {
          props.filterTareas(event.target.value);
        }
      } value={props.texto} />
    </div>
  )
}

const mapStateToProps = (state) => ({texto: state.texto});
const mapDispatchToProps = {
  filterTareas
}

// props.store.dispatch(action)

// props.store.getState()
// subscribe((state))

const withProps = connect(mapStateToProps, mapDispatchToProps);

export default withProps(Filtro);