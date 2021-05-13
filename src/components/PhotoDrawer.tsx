import React, { ReactChild } from 'react';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      width: 400,
      flexShrink: 0,
    },
    drawerPaper: {
      width: 400,
    },
    drawerHeader: {
      display: 'flex',
      width: 400,
    },
    drawerToolbar: {
      padding: theme.spacing(0, 2),
    },
    drawerTitle: {
      flex: 1,
    },
  })
);

interface Props {
  drawerOpen: boolean;
  drawerTitle: string;
  children: ReactChild;
  close: () => void;
}

const PhotoDrawer = (props: Props) => {
  const classes = useStyles();

  return (
    <Drawer variant="persistent" anchor="right" open={props.drawerOpen} className={classes.drawer} classes={{paper: classes.drawerPaper}}>
      <AppBar className={classes.drawerHeader}>
        <Toolbar variant="dense" className={classes.drawerToolbar}>
          <Typography variant="inherit" color="inherit" className={classes.drawerTitle}>
            {props.drawerTitle}
          </Typography>
          <IconButton color="inherit" aria-label="delete" onClick={props.close}>
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Toolbar variant="dense" />
      {props.children}
    </Drawer>
  );
};

export default PhotoDrawer;
