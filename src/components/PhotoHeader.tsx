import React from 'react';
import { useHistory } from 'react-router-dom';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import DeleteIcon from '@material-ui/icons/Delete';
import InfoIcon from '@material-ui/icons/Info';
import LabelIcon from '@material-ui/icons/Label';
import FaceIcon from '@material-ui/icons/Face';
import ImageSearchIcon from '@material-ui/icons/ImageSearch';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: 'calc(100vw - 400px)',
      marginRight: 400,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    appTitle: {
      flex: 1,
    },
  })
);

interface Props {
  drawerOpen: boolean;
  open: (type: string) => void;
}

const PhotoHeader = (props: Props) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <AppBar position="fixed" className={props.drawerOpen ? classes.appBarShift : classes.appBar}>
      <Toolbar variant="dense">
        <IconButton edge="start" color="inherit" aria-label="back" onClick={() => history.push('/')}>
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="inherit" color="inherit" className={classes.appTitle}>
          照片
        </Typography>
        <IconButton color="inherit" aria-label="info" onClick={() => props.open('info')}>
          <InfoIcon />
        </IconButton>
        <IconButton color="inherit" aria-label="face" onClick={() => props.open('face')}>
          <FaceIcon />
        </IconButton>
        <IconButton color="inherit" aria-label="tags" onClick={() => props.open('tags')}>
          <LabelIcon />
        </IconButton>
        <IconButton color="inherit" aria-label="tags" onClick={() => props.open('like')}>
          <ImageSearchIcon />
        </IconButton>
        <IconButton color="secondary" aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default PhotoHeader;
