import React from 'react';
import { connect } from 'react-redux';
import { delTarea, editTarea } from '../store/lista-tareas/actions';

const Tarea = (props) => {
  return (
    <div>
      <p>{props.tarea.nombre} ({props.tarea.completada ? 'Hecha' : 'No hecha'})</p>
      <button type="button" onClick={
        () => {props.delete(props.tarea)}
        }>Eliminar</button>
      <button type="button" onClick={
        () => {
          props.edit({...props.tarea, completada: !props.tarea.completada})
        }
      }>{props.tarea.completada ? 'Deshacer' : 'Hacer'}</button>
    </div>
  )
}

const mapDispatchToProps = {
  delete: delTarea,
  edit: editTarea,
}

const withProps = connect(null, mapDispatchToProps);

export default withProps(Tarea);