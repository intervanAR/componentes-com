import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";

// styles
import styles from "./GridStyle.jsx";

function GridItem({ ...props }) {
  const { classes, children, ...rest } = props;
  return (
    <Grid item {...rest} className={classes.gridItem}>
      {children}
    </Grid>
  );
}

export default withStyles(styles)(GridItem);
