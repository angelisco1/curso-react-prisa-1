import * as ActionTypes from "./action-types";

const initialState = {
  listaTareas: [],
  textoFiltro: '',
  // nextId: 0,
  tareasFiltradas: []
}

function addTarea(state, tarea) {
  const newListaTareas = [...state.listaTareas, tarea]
  // const nuevaTarea = {...tarea, id: state.nextId};
  // const newListaTareas = [...state.listaTareas, nuevaTarea]

  // const newState = {...state, listaTareas: newListaTareas, nextId: state.nextId+1, tareasFiltradas: newListaTareas};
  const newState = {...state, listaTareas: newListaTareas, tareasFiltradas: newListaTareas};

  return newState;
}


function delTarea(state, tarea) {
  const nuevaListaTareas = state.listaTareas.filter((t) => {
    return t.id !== tarea.id;
  })
  const newState = {...state, listaTareas: nuevaListaTareas, tareasFiltradas: nuevaListaTareas};

  return newState;
}


function editTarea(state, tareaActualizada) {
  const nuevaListaTareas = state.listaTareas.map((t) => {
    if (t.id === tareaActualizada.id) {
      return tareaActualizada;
    }
    return t;
  })

  return {...state, listaTareas: nuevaListaTareas, tareasFiltradas: nuevaListaTareas};
}


function filterTareas(state, texto) {

  const tareasFiltradas = state.listaTareas.filter((t) => {
    return t.nombre.includes(texto);
  })

  return {...state, textoFiltro: texto, tareasFiltradas}
}

export default function listaTareas(state = initialState, action) {
  switch(action.type) {
    case ActionTypes.ADD_TAREA:
      return addTarea(state, action.payload);
    case ActionTypes.DEL_TAREA:
      return delTarea(state, action.payload);
    case ActionTypes.EDIT_TAREA:
      return editTarea(state, action.payload);
    case ActionTypes.FILTER_TAREAS:
      return filterTareas(state, action.payload);
    default:
      return state;
  }
}