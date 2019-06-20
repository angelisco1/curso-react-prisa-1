import React from 'react';
import { darkModeCtx } from '../../app';
import styles from '../../styles/darkMode';

class PreviewCV extends React.Component {
  render() {
    console.log(this.props);
    const listaSkills = this.props.skills.map((skill, pos) => <li key={pos}>{skill}</li>);

    return (
      <darkModeCtx.Consumer>
        {
          (darkMode) => {
            return (
              <div style={darkMode ? styles.darkStyles : styles.lightStyles}>
                <h2>CV de {this.props.nombre} {this.props.apellidos}</h2>
                <p>Email: {this.props.correo}</p>
                <div>
                  <ul>
                    {listaSkills}
                  </ul>
                </div>
              </div>
            )
          }
        }
      </darkModeCtx.Consumer>
    )
  }
}

export default PreviewCV;