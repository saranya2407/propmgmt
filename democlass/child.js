import React from 'react';

class Child extends React.Component {
  render() {
    return (
      <div>
        <h2>Hello, {this.props.name}!</h2>
      </div>
    );
  }
}

export default Child;