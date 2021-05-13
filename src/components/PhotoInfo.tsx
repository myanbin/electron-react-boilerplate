import React from 'react';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2),
    },
  })
);

const PhotoInfo = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      222
    </Box>
  );
};

export default PhotoInfo;
