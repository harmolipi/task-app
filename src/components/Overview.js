import React from 'react';

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    };
    this.addTask = this.addTask.bind(this);
  }

  addTask(e) {
    e.preventDefault();
    const newTask = document.querySelector('input').value;
    this.setState({
      tasks: [...this.state.tasks, newTask],
    });
    document.querySelector('input').value = '';
  }

  render() {
    return (
      <div>
        <form>
          <input placeholder="New task" />
          <button onClick={this.addTask}>Add</button>
        </form>
        <ul>
          {this.state.tasks.map((task) => {
            return <li key={task}>{task}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Overview;
