import React from 'react';
import Tarea from './Tarea';
import { connect } from 'react-redux';

const ListaTareas = (props) => {
  const listaTareas = props.tareas.map(t => (<Tarea key={t.id} tarea={t} />))

  return (
    <div>
      {listaTareas}
    </div>
  );
}

const mapStateToProps = (store) => {
  console.log(store);
  return {
    tareas: store.listaTareas
  };
}

const withProps = connect(mapStateToProps);

export default withProps(ListaTareas);