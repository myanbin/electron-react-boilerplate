import React from 'react';
import { useHistory } from 'react-router-dom';

import { createStyles, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ViewComfyIcon from '@material-ui/icons/ViewComfy';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import SettingsIcon from '@material-ui/icons/Settings';

const useStyles = makeStyles(() =>
  createStyles({
    appTitle: {
      flex: 1,
    },
  })
);

const LibraryHeader = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <AppBar position="fixed">
      <Toolbar variant="dense">
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="inherit" color="inherit" className={classes.appTitle}>
          照片库
        </Typography>
        <IconButton color="inherit" aria-label="info">
          <ViewComfyIcon />
        </IconButton>
        <IconButton color="inherit" aria-label="info">
          <ViewModuleIcon />
        </IconButton>
        <IconButton color="inherit" aria-label="info" onClick={() => history.push('/settings')}>
          <SettingsIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default LibraryHeader;
