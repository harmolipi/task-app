import React from 'react';

class Overview extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.tasks.map((task, index) => {
            return <li key={index}>{task}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Overview;
