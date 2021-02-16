import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  primary: {
    backgroundColor: theme.palette.primary.main,
  },
  secondary: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

const ChatNoChoice = () => {
  const classes = useStyles();
  return (
    <p>
      <span className={classes.primary}>Mantenha o cel</span>
      <span className={classes.secondary}>ular carregando</span>
    </p>
  );
};

export default ChatNoChoice;
