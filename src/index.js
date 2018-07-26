import React from 'react';
import ReactDom from 'react-dom';

const Header = ({ message }) => {
  return (
    <h2 className="text-center">
      {message}
    </h2>
  );
};

Header.propTypes = {
  message: React.PropTypes.string
};

const App = () => {
  return (
    <div>
      <Header message="Naming Contests" />
      <div>
        ...
      </div>
    </div>
  );
};

ReactDom.render(
  <App />,
  document.getElementById('root')
);