import React from 'react';

const Tarea = (props) => {
  return (
    <div>
      <p>{props.tarea.nombre} ({props.tarea.completada ? 'Hecha' : 'No hecha'})</p>
      <button type="button">Eliminar</button>
      <button type="button">{props.tarea.completada ? 'Deshacer' : 'Hacer'}</button>
    </div>
  )
}

export default Tarea;