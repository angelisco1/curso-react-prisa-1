import * as ActionTypes from "./action-types";

const initialState = {
  listaTareas: [
    {
      id: -1,
      nombre: 'Tarea 1',
      completada: false
    },
  ],
  textoFiltro: '',
  nextId: 0,
  tareasFiltradas: []
}

function addTarea(state, tarea) {
  const nuevaTarea = Object.assign({}, tarea, {id: state.nextId});

  const newListaTareas = [].concat(state.listaTareas, nuevaTarea)
  console.log(newListaTareas)


  const newState = Object.assign({}, state, {listaTareas: newListaTareas, nextId: state.nextId+1});
  console.log(newState)
  return newState;
}

export default function listaTareas(state = initialState, action) {
  switch(action.type) {
    case ActionTypes.ADD_TAREA:
      return addTarea(state, action.payload);
    case ActionTypes.DEL_TAREA:
      return state;
    case ActionTypes.EDIT_TAREA:
      return state;
    case ActionTypes.FILTER_TAREAS:
      return state;
    default:
      return state;
  }
}