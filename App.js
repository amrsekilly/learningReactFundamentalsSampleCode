
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <h1>It works, {this.props.user}!</h1>
    );
  }
}

ReactDOM.render(
  <App user="Amr" />,
  document.getElementById('app')
);


export default App;
