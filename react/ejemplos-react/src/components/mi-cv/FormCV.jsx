import React from 'react';


class FormCV extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      skill: ''
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.inputSkill = React.createRef();
  }

  handleChange(event) {
    this.setState({
      skill: event.target.value
    })
  }

  handleClick() {
    this.props.onAddSkill(this.inputSkill.current.value)
    this.inputSkill.current.value = '';
    // this.props.onAddSkill(this.state.skill);
    // this.setState({
    //   skill: ''
    // })
  }

  render() {
    return (
      <div>
        <h2>Form</h2>
        <form>
          <div>
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" value={this.props.nombre} onChange={this.props.onChangeInput} />
          </div>
          <div>
            <label htmlFor="apellidos">Apellidos:</label>
            <input type="text" id="apellidos" name="apellidos" value={this.props.apellidos} onChange={this.props.onChangeInput} />
          </div>
          <div>
            <label htmlFor="correo">Email:</label>
            <input type="text" id="correo" name="correo" value={this.props.correo} onChange={this.props.onChangeInput} />
          </div>
          <div>
            <label htmlFor="skill">Skill:</label>
            {/* <input type="text" id="skill" name="skill" value={this.state.skill} onChange={this.handleChange} /> */}
            <input type="text" ref={this.inputSkill}/>
            <button type="button" onClick={this.handleClick}>Añadir</button>
          </div>
        </form>
      </div>
    )
  }
}

export default FormCV;