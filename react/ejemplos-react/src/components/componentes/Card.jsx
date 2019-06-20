import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import '../../styles/card.scss';

const Card = (props) => {
  // const styles = {
  //   divContainer: {
  //     border: '1px solid black',
  //     width: '200px',
  //     height: '300px'
  //   }
  // }
  // return (
  //   <div style={styles.divContainer}>
  //     <Header titulo={props.titulo} />
  //     <MainContent descripcion={props.descripcion} imgUrl={props.imgUrl} />
  //     <Footer action1={props.action1} action2={props.action2} />
  //   </div>
  // )
  return (
    <div className="card">
      <Header titulo={props.titulo} />
      <MainContent descripcion={props.descripcion} imgUrl={props.imgUrl} />
      <Footer action1={props.action1} action2={props.action2} />
    </div>
  )
}

Card.defaultProps = {
  titulo: 'Título',
  descripcion: 'Esto es una descripción de mi Card',
  imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png',
  action1: 'Action1 ',
  action2: 'Action2 ',
}

Card.propTypes = {
  titulo: PropTypes.string.isRequired,
  descripcion: PropTypes.string,
  imgUrl: PropTypes.string,
}

export default Card;