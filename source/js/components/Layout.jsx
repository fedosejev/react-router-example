var React = require('React');
var Navigation = require('./Navigation.jsx');

var Layout = React.createClass({
  render: function () {
    return (
      <div>
        <Navigation />
        {this.props.children}
      </div>
    );
  }
});

module.exports = Layout;