
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <h1>It works, {this.props.user}{this.props.em}</h1>
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
