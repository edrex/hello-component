import './style.css!';
import React from 'react';
export default class extends React.Component {
  render() {
    return React.createElement("h1", {className: "hello-component"}, `Hello, ${this.props.name}.`);
  }
}
