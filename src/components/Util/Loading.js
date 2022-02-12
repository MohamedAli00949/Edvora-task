import React from 'react';
import { CircularProgress, Paper } from "@mui/material";

import useStyles from './styles';

function Loading() {
  const classes = useStyles();
  return (
        <Paper elevation={0} className={classes.isLoading} style={{background: "transparent"}}>
            <CircularProgress size="7em" />
        </Paper>
  );
}

export default Loading;