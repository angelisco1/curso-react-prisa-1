import { createStore, applyMiddleware } from 'redux';
import reducerListaTareas from './lista-tareas';
import thunk from 'redux-thunk';

export default function configStore() {

  return createStore(reducerListaTareas, applyMiddleware(thunk));
}