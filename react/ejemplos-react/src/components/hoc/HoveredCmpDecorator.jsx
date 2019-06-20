import React from 'react';


export default function withHover(num) {
  console.log(num)
  return (WrappedCmp) => {
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
}