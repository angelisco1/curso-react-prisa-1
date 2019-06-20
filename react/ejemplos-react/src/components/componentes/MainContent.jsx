import React from 'react';

const styles = {
  imgStyles: {
    width: '80%',
    margin: '0 auto'
  },
  centerItem: {
    textAlign: 'center'
  }
}

// const MainContent = (props) => (
//   <div style={styles.centerItem}>
//     <img style={styles.imgStyles} src={props.imgUrl} alt=""/>
//     <p style={styles.centerItem}>{props.descripcion}</p>
//   </div>
// )
const MainContent = (props) => (
  <div className="card-content">
    <img src={props.imgUrl} alt=""/>
    <p>{props.descripcion}</p>
  </div>
)

export default MainContent;