import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import './App.global.css';

import Header from './components/Header';
import Library from './components/Library';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  })
);

export default function App() {
  const classes = useStyles();

  return (
    <Router>
      <Header />
      <Box className={classes.root}>
        <Switch>
          <Route path="/" component={Library} />
        </Switch>
      </Box>
    </Router>
  );
}
