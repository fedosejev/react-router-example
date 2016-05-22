var React = require('React');
var Link = require('react-router').Link;

var Navigation = React.createClass({
  render: function () {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/secret">Secret</Link>
        </li>
      </ul>
    );
  }
});

module.exports = Navigation;