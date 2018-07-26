import React from 'react';
import ReactDom from 'react-dom';

const App = (props) => {
  return (
    <h2 className="text-center">
      {props.headerMessage}
    </h2>
  );
};

App.propTypes = {
  headerMessage: React.PropTypes.string
};

App.defaultProps = {
  headerMessage: 'Hello!!'
};

ReactDom.render(
  <App />,
  document.getElementById('root')
);