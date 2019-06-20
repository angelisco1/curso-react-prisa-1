import React from 'react';
// import { darkModeCtx } from '../../app';

const withContext = (WrappedCmp, ctx) => {
  return class extends React.Component {
    render() {
      return (
        <ctx.Consumer>
          {
            (propCtx) => (
              <WrappedCmp propCtx={propCtx} {...this.props} />
            )
          }
        </ctx.Consumer>
      )
    }
  }
};

export default withContext;