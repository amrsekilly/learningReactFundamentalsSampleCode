
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

  // create a state
  constructor() {
    super();
  }

  mount() {
    ReactDOM.render(
      <SomeText />,
      document.getElementById('txtHere')
    );
  }

  unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById('txtHere'));
  }



  render() {

    return (
      <div>
        <button onClick={this.mount.bind(this)}>Mount</button>
        <br />
        <br />
        <button onClick={this.unmount.bind(this)}>Unmount</button>
        <div id="txtHere"></div>
      </div>
    );
  }
}

class SomeText extends React.Component {

  componentWillMount() {
    console.log("will mount");
  }

  componentDidMount() {
    console.log("component mounted");
  }

  componentWillUnmount() {
    console.log("component will unmount");
  }

  render() {
    console.log("component rendering");
    return (
      <div>
        <br />
        <br />
        <h2>Some text</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

export default App;
