import React from 'react';
import { Link } from 'react-router-dom';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';

import LibraryHeader from './LibraryHeader';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    photo: {
      display: 'inline-block',
      height: 200,
      margin: theme.spacing(1),
      '& img': {
        height: 200,
      },
      '& img:hover': {
        transform: 'scale(1.05)',
        transition: 'all 1s',
      },
      overflow: 'hidden',
    },
  })
);

const Library = () => {
  const classes = useStyles();

  return (
    <div>
      <LibraryHeader />
      <Toolbar variant="dense" />
      <Box className={classes.root}>
        <Link to="/photo" className={classes.photo}>
          <img src="file:///C:/Users/ybm/Pictures/xinhua.jpg" alt="photo" />
        </Link>
        <Link to="/photo" className={classes.photo}>
          <img src="file:///C:/Users/ybm/Pictures/Tsunami_by_hokusai_19th_century.jpg" alt="photo" />
        </Link>
        <Link to="/photo" className={classes.photo}>
          <img src="file:///C:/Users/ybm/Pictures/2dcc327b1c8895c78b6abb6c2c3122a6.jpg" alt="photo" />
        </Link>
        <Link to="/photo" className={classes.photo}>
          <img src="file:///C:/Users/ybm/Pictures/2dcc327b1c8895c78b6abb6c2c3122af.jpg" alt="photo" />
        </Link>
        <Link to="/photo" className={classes.photo}>
          <img src="file:///C:/Users/ybm/Pictures/Scarlett_Johansson.jpg" alt="photo" />
        </Link>
        <Link to="/photo" className={classes.photo}>
          <img src="file:///C:/Users/ybm/Pictures/135706d2490808dfeff2595fb7a74251.jpg" alt="photo" />
        </Link>
      </Box>
    </div>
  );
};

export default Library;
