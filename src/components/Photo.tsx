import React from 'react';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import PhotoHeader from './PhotoHeader';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    photoCanvas: {
      flexGrow: 1,
      padding: theme.spacing(3),
      textAlign: 'center',
      marginRight: 400,
    },
    photo: {
      height: 'calc(100vh - 100px)',
    },
    drawer: {
      width: 400,
      flexShrink: 0,
    },
    drawerPaper: {
      width: 400,
    },
    drawerHeader: {
      width: 400,
    },
    drawerToolbar: {
      padding: theme.spacing(0, 2),
    },
    drawerTitle: {
      flex: 1,
    },
    drawerContent: {
      width: 400,
      padding: theme.spacing(2),
    },
  })
);

const Photo = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  return (
    <div>
      <PhotoHeader />
      <Toolbar variant="dense" />
      <Box className={classes.photoCanvas}>
        <img src="file:///C:/Users/ybm/Pictures/xinhua.jpg" alt="photo" className={classes.photo} />
      </Box>
      <Drawer variant="permanent" open={open} anchor="right" className={classes.drawer} classes={{paper: classes.drawerPaper}}>
        <AppBar className={classes.drawerHeader}>
          <Toolbar variant="dense" className={classes.drawerToolbar}>
            <Typography variant="inherit" color="inherit" className={classes.drawerTitle}>
              人脸识别
            </Typography>
            <IconButton color="inherit" aria-label="delete" onClick={() => setOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Toolbar variant="dense" />
        <Box className={classes.drawerContent}>
          <Typography>
            人脸识别
          </Typography>
        </Box>
      </Drawer>
    </div>
  );
};

export default Photo;
