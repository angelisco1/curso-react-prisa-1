import React from 'react';

const styles = {
  centerItem: {
    textAlign: 'center'
  }
}

// const Header = (props) => (<h2 style={styles.centerItem}>{props.titulo}</h2>);
const Header = (props) => (<h2>{props.titulo}</h2>);

export default Header;