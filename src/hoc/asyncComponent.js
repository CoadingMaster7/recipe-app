import React, { Component } from 'react';

const asyncComponent = (importComponent) => {
  return class extends Component {
    constructor(props) {
      super(props);

      this.state = {
        component: null,
      };
    }

    componentDidMount() {
      importComponent()
        .then((cmp) => {
          this.setState({
            component: cmp.default,
          });
        });
    }

    render() {
      const { component: C } = this.state;
      return C ? <C {...this.props} /> : null;
    };
  }
}

export default asyncComponent;
