import React from 'react';

function WithLogging(WrappedComponent) {
  return class extends React.Component {
    componentDidMount() {
      const componentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
      console.log(`Component ${componentName} is mounted`);
    }

    componentWillUnmount() {
      const componentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
      console.log(`Component ${componentName} is going to unmount`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}

// Modify the displayName for debugging purposes
WithLogging.displayName = (WrappedComponent) => `WithLogging(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

export default WithLogging;
