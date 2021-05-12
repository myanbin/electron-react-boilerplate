import React from 'react';
import { useHistory } from 'react-router-dom';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    title: {
      flex: 1
    },
  })
);

const Settings = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="back" onClick={() => history.push('/')}>
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="inherit" color="inherit" className={classes.title}>
            设置
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar variant="dense" />
      <Box className={classes.root}>
        <Typography variant="h5" gutterBottom>
          h5. Settings
        </Typography>
      </Box>
    </div>
  );
};

export default Settings;
