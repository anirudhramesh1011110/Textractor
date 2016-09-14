import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from "react-router";

import Home from './components/home';
import App from './components/app';
import Login from './components/login';


function render() {

  ReactDOM.render(

    <Router history={hashHistory}>
      <Route path="/" component={App}>

        <IndexRoute component={Home} />
        <Route path="/login" component={Home} />

      </Route>
    </Router>, document.getElementById('root')

  );

}

render();
