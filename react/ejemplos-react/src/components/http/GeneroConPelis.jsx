import React from 'react';

const GeneroConPelis = props => (
  <React.Fragment>
    <h2>{props.nombre}</h2>
    <ul>
      {props.peliculas.map(p => <li key={p.id}>{p.nombre}</li>)}
    </ul>
  </React.Fragment>
);

export default GeneroConPelis;