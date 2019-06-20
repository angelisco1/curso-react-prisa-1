import React from 'react';
import styles from '../../styles/darkMode';

const CtxChildHoc = (props) => (
  <p style={props.propCtx ? styles.darkStyles : styles.lightStyles}>{props.propCtx ? 'DARK' : 'LIGHT'}</p>
)

export default CtxChildHoc;