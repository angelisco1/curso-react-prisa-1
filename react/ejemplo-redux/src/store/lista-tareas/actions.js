import * as ActionTypes from "./action-types";

function addTarea(tarea) {
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