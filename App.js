
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

  // create a state
  constructor() {
    super();
    this.state = {
      count: "0"
    }
  }

  increment(e) {
    this.setState({
      count: parseInt(this.state.count) + 1
    });
  }

  render() {
    return (
      <div>
        <h1>It works, {this.props.user}{this.props.em}</h1>
        <button onClick={this.increment.bind(this)}>Increment</button>
        <h3>{this.state.count} times.</h3>
      </div>
    );
  }
}

App.propTypes = {
  user: React.PropTypes.string.isRequired,
  em: React.PropTypes.string
}

App.defaultProps = {
  em: "!"
}

ReactDOM.render(
  <App user="Amr" em="!!!!!!" />,
  document.getElementById('app')
);

export default App;
