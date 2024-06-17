import React from 'react';
import Child from '../democlass/child';

class Parent extends React.Component{
    render() {
        return (
          <div>
            <h1>Welcome to React Props Example</h1>
            <Child name="John" />
          </div>
        );
      }
    }
    
    export default Parent;

