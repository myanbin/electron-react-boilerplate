import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import './App.global.css';

import Library from './components/Library';
import Settings from './components/Settings';
import Photo from './components/Photo';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Library} />
        <Route path="/settings" component={Settings} />
        <Route path="/photo" component={Photo} />
      </Switch>
    </Router>
  );
}
