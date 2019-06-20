import React from 'react';

class Caja extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colorFondo: '' // props.num < 0 ? 'red' : 'green'
    }
  }

  shouldComponentUpdate(next_props) {
    let new_color = next_props.num < 0 ? 'red' : 'green';
    let old_color = this.props.num < 0 ? 'red' : 'green';
    return new_color !== old_color;
  }

  static getDerivedStateFromProps(props, state) {
    return {
      colorFondo: props.num < 0 ? 'red' : 'green'
    }
  }

  render() {
    console.log('Se pinta');
    console.log(this.state.colorFondo);
    const styles = {
      width: '100px',
      height: '100px',
      backgroundColor: this.state.colorFondo//this.props.num < 0 ? 'red' : 'green'
    }
    return (
      <div style={styles}></div>
    )
  }
}

export default Caja;