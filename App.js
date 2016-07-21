
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <h1>It works, {this.props.user}!</h1>
    );
  }
}

App.propTypes = {
  user: React.PropTypes.string.isRequired
}

ReactDOM.render(
  <App user="Amr" />,
  document.getElementById('app')
);


export default App;
