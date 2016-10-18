var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Timer = require('Timer');
var Countdown = require('Countdown');

// Load foundations
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="countdown" component={Countdown}/>
      <IndexRoute component={Timer}/>
    </Route>
  </Router>,
  document.getElementById('app')
);

//Navigation component and render inside main component. No
// links.  H2 tags and have it say Nav Component.
// Then add to webpack config aliases
// Load it in and show it right above Main component h2 tag.
// make a new components file called Nav.jsx


//app routes

// component and countdown

// styles in Navigation

// webpack configu alias.
