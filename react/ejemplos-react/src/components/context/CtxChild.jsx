import React from 'react';
import { darkModeCtx } from '../../app';
import styles from '../../styles/darkMode';

const CtxChild = (props) => (
  <darkModeCtx.Consumer>
    {
      (darkMode) => {
        return (
          <p style={darkMode ? styles.darkStyles : styles.lightStyles}>{darkMode ? 'DARK' : 'LIGHT'}</p>
        )
      }
    }
  </darkModeCtx.Consumer>
)

export default CtxChild;