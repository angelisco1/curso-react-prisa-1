import * as ActionTypes from "./action-types";

function addTarea(tarea) {
  return (dispatch) => {
    fetch('https://todo-list-603ba.firebaseio.com/mis-tareas.json', {
      method: 'POST',
      body: JSON.stringify(tarea)
    })
      .then(resp => resp.json())
      .then(datos => {
        dispatch(createActionAddTarea({...tarea, id: datos.name}))
      })
      .catch(err => console.log(err));
  }
}


function createActionAddTarea(tarea) {
  console.log('Action Creator addTarea')
  return {
    type: ActionTypes.ADD_TAREA,
    payload: tarea
  }
}

function delTarea(tarea) {
  return {
    type: ActionTypes.DEL_TAREA,
    payload: tarea
  }
}

function editTarea(tareaActualizada) {
  return {
    type: ActionTypes.EDIT_TAREA,
    payload: tareaActualizada
  }
}

function filterTareas(texto) {
  return {
    type: ActionTypes.FILTER_TAREAS,
    payload: texto
  }
}

export { addTarea, editTarea, delTarea, filterTareas };