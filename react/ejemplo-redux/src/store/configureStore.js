import { createStore } from 'redux';
import reducerListaTareas from './lista-tareas';

export default function configStore() {
  return createStore(reducerListaTareas);
}