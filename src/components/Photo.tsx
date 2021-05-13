import React, { useState } from 'react';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';

import PhotoHeader from './PhotoHeader';
import PhotoDrawer from './PhotoDrawer';
import PhotoInfo from './PhotoInfo';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    photoContainer: {
      flexGrow: 1,
      padding: theme.spacing(3),
      height: 'calc(100vh - 96px)',
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    photoContainerShift: {
      flexGrow: 1,
      padding: theme.spacing(3),
      height: 'calc(100vh - 96px)',
      marginRight: 400,
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    photoCanvas: {
      width: '100%',
      height: '100%',
    },
    photo: {
      height: 'calc(100vh - 100px)',
    },
  })
);

const Photo = () => {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const [drawerTitle, setDrawerTitle] = useState<string>('照片详情');

  const openPhotoDrawer = (type: string) => {
    setDrawerOpen(true)

    if (type === 'info') {
      setDrawerTitle('照片详情');
    } else if (type === 'face') {
      setDrawerTitle('人脸识别');
    } else if (type === 'tags') {
      setDrawerTitle('智能标签');
    } else if (type === 'like') {
      setDrawerTitle('以图搜图');
    }
  }

  return (
    <div>
      <PhotoHeader drawerOpen={drawerOpen} open={(type) => openPhotoDrawer(type)} />
      <PhotoDrawer drawerOpen={drawerOpen} drawerTitle={drawerTitle} close={() => setDrawerOpen(false)}>
        <PhotoInfo />
      </PhotoDrawer>
      <Toolbar variant="dense" />
      <Box className={drawerOpen ? classes.photoContainerShift : classes.photoContainer}>
        <canvas className={classes.photoCanvas}></canvas>
      </Box>
    </div>
  );
};

export default Photo;
