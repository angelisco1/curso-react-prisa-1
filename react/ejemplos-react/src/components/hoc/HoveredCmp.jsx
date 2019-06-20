import React from 'react';

const withHover = (WrappedCmp) => {
  return class extends React.Component {
    render() {
      return (
        <div className="hover">
          <WrappedCmp {...this.props} />
        </div>
      )
    }
  }
}

export default withHover;