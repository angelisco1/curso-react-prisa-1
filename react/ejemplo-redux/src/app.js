import React from 'react';
import ReactDOM from 'react-dom';
import Form from './components/Form';
import Filtro from './components/Filtro';
import ListaTareas from './components/ListaTareas';
import { Provider } from 'react-redux';
import configStore from './store/configureStore';

const store = configStore();

const App = (props) => (
  <div>
    {/* <Form store={store} /> */}
    <Form />
    <Filtro />
    <ListaTareas />
  </div>
);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));