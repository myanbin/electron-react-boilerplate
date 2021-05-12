import React from 'react';
import { useHistory } from 'react-router-dom';

import { createStyles, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import DeleteIcon from '@material-ui/icons/Delete';
import InfoIcon from '@material-ui/icons/Info';
import LabelIcon from '@material-ui/icons/Label';
import FaceIcon from '@material-ui/icons/Face';

const useStyles = makeStyles(() =>
  createStyles({
    appBar: {
      width: 'calc(100vw - 400px)',
      marginRight: 400,
    },
    appTitle: {
      flex: 1,
    },
  })
);

const PhotoHeader = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar variant="dense">
        <IconButton edge="start" color="inherit" aria-label="back" onClick={() => history.push('/')}>
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="inherit" color="inherit" className={classes.appTitle}>
          照片
        </Typography>
        <IconButton color="inherit" aria-label="info">
          <InfoIcon />
        </IconButton>
        <IconButton color="inherit" aria-label="face">
          <FaceIcon />
        </IconButton>
        <IconButton color="inherit" aria-label="info">
          <LabelIcon />
        </IconButton>
        <IconButton color="secondary" aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default PhotoHeader;
