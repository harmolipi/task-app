import React from 'react';
import Overview from './components/Overview';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      newTask: '',
    };
  }

  addTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: [...this.state.tasks, this.state.newTask],
      newTask: '',
    });
  };

  updateState = (e) => {
    this.setState({
      newTask: e.target.value,
    });
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.addTask}>
          <input
            onChange={this.updateState}
            placeholder="New task"
            value={this.state.newTask}
          />
          <button>Add</button>
        </form>
        <Overview tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
