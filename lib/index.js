import './style.css!';
import React from 'react';
export default class Component extends React.component {
  render() {
    return <div className="hello-component">Hello {this.props.name}</div>;
  }
}
