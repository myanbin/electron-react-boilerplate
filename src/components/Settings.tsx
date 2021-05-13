import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import List from '@material-ui/core/List';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    title: {
      flex: 1,
    },
    sourceList: {
      marginBottom: theme.spacing(2),
    },
  })
);

const Settings = () => {
  const classes = useStyles();
  const history = useHistory();

  const [theme, setTheme] = useState('light');

  const changeTheme = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTheme((event.target as HTMLInputElement).value);
  };

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
          照片源
        </Typography>
        <Typography gutterBottom>
          在照片库中包含更多的文件夹
        </Typography>
        <Typography gutterBottom>
          <Button variant="contained" color="primary">添加文件夹</Button>
        </Typography>
        <List component="nav" className={classes.sourceList}>
          <ListItem button>
            <ListItemAvatar>
              <Avatar>
                <ImageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="C:\Users\ybm\OneDrive\图片" />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete">
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem button>
            <ListItemAvatar>
              <Avatar>
                <ImageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="D:\网络资源\个人\照片" />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete">
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </List>

        <Typography variant="h5" gutterBottom>
          外观
        </Typography>
        <Typography gutterBottom>
          选择应用主题
        </Typography>
        <FormControl component="fieldset">
          <RadioGroup row aria-label="gender" name="theme" value={theme} onChange={changeTheme}>
            <FormControlLabel value="light" control={<Radio />} label="亮色模式" />
            <FormControlLabel value="dark" control={<Radio />} label="暗黑模式" />
            <FormControlLabel value="system" control={<Radio />} label="使用系统设置" />
          </RadioGroup>
        </FormControl>
      </Box>
    </div>
  );
};

export default Settings;
