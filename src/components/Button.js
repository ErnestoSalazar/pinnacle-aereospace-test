import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  }
}));

export default function ContainedButtons({btnColor, children, onClick}) {
  const classes = useStyles();

  return (
    <Button variant="contained" color={btnColor} className={classes.button} onClick={onClick}>
        {children}
    </Button>
  );
}