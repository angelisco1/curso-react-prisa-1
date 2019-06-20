import React from 'react';
import FormCV from './FormCV';
import PreviewCV from './PreviewCV';

class EjercicioCV extends React.Component {
  constructor() {
    super();
    this.state = {
      nombre: 'Angel',
      apellidos: '',
      correo: '',
      skills: []
    }
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleAddSkill = this.handleAddSkill.bind(this);
  }

  handleChangeInput(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleAddSkill(skill) {
    this.setState({
      skills: this.state.skills.concat(skill)
    })
  }

  render() {
    return (
      <div>
        <FormCV {...this.state} onChangeInput={this.handleChangeInput} onAddSkill={this.handleAddSkill}  />
        <PreviewCV {...this.state} />
      </div>
    )
  }
}

export default EjercicioCV;