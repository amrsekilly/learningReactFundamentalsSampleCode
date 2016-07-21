
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

  // create a state
  constructor() {
    super();

    this.state = {number: 0};
  }

  mount() {
    //console.log("mounting");
  }

  unmount() {
    ReactDOM.unmountComponentAtNode(this.refs.txt);
  }

  countOn() {
    this.setState({number: this.state.number+3})
  }

  componentWillMount() {
    console.log("will mount");
  }

  render() {
    console.log("component rendering");
    return (
      <div>
        <button onClick={this.countOn.bind(this)}>Mount</button>
        <br />
        <br />
        <button onClick={this.unmount.bind(this)}>Unmount</button>
        <br />
        <br />
        <h2 ref="txt">Some text {this.state.number}</h2>
      </div>
    );
  }

  componentDidMount() {
    console.log("component mounted");
  }

}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

export default App;
