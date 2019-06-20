import React from 'react';

class EventSwitchCmp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colorFondo: 'white'
    }
    // this.handleClick = this.handleClick.bind(this);
    // this.handleMouseLeave = this.handleMouseLeave.bind(this);
    // this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleEvent = this.handleEvent.bind(this);
  }

  // handleClick(event) {
  //   this.setState({
  //     colorFondo: 'yellow'
  //   });
  // }

  // handleMouseLeave(event) {
  //   this.setState({
  //     colorFondo: 'white'
  //   });
  // }

  // handleMouseOver(event) {
  //   this.setState({
  //     colorFondo: 'red'
  //   });
  // }

  handleEvent(event) {
    let color = '';
    switch(event.type) {
      case 'click':
        color = 'yellow';
        break;
      case 'mouseover':
        color = 'red';
        break;
      case 'mouseleave':
        color = 'white';
        break;
      default:
        color = 'blue';
    }
    this.setState({
      colorFondo: color
    });
  }

  render() {
    const styles = {
      backgroundColor: this.state.colorFondo,
      width: '100px',
      height: '100px',
    };
    return (
      // <div style={styles} onClick={this.handleClick} onMouseOver={this.handleMouseOver} onMouseLeave={this.handleMouseLeave}>
      <div style={styles} onClick={this.handleEvent} onMouseOver={this.handleEvent} onMouseLeave={this.handleEvent}>
      </div>
    )
  }
}

export default EventSwitchCmp;