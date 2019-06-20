import React from 'react';

const styles = {
  containerStyles: {
    display: 'flex',
    justifyContent: 'space-evenly'
  }
}

const Footer = (props) => (
  <div className="footer">
    <button type="button">{props.action1}</button>
    <button type="button">{props.action2}</button>
  </div>
)
// const Footer = (props) => (
//   <div style={styles.containerStyles}>
//     <button type="button">{props.action1}</button>
//     <button type="button">{props.action2}</button>
//   </div>
// )

export default Footer;