var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var Redirect = require('react-router').Redirect;
var hashHistory = require('react-router').hashHistory;

var Layout = require('./components/Layout.jsx');
var HomePage = require('./components/HomePage.jsx');
var ProjectsPage = require('./components/ProjectsPage.jsx');
var ContactPage = require('./components/ContactPage.jsx');

var app = (
  <Router history={hashHistory}>
    <Redirect from="/secret" to="/" />
    <Route path="/" component={Layout}>
      <IndexRoute component={HomePage} />
      <Route path="projects" component={ProjectsPage} />
      <Route path="contact" component={ContactPage} />
    </Route>
  </Router>
);

var parentElement = document.querySelector('[data-react-application]');

ReactDOM.render(app, parentElement);