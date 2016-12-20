import React from 'react';

class Main extends React.Component {
  render () {
    return (
      <div>
        <p>{this.props.name} was here!</p>
      </div>
    );
  }
}
export default Main;