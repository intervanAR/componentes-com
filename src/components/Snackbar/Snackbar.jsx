import React from "react";
import PropTypes from "prop-types";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Snack from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";

// @material-ui/icons
import Close from "@material-ui/icons/Close";

// Styles
import style from "./SnackbarContentStyle.jsx";

function Snackbar({ ...props }) {
  const { classes, message, color, close, place, open } = props;
  let action = [];
  if (close !== undefined) {
    action = [
      <IconButton
        className={classes.iconButton}
        key="close"
        aria-label="Close"
        color="inherit"
        onClick={() => props.closeNotification()}
      >
        <Close className={classes.close} />
      </IconButton>,
    ];
  }
  return (
    <Snack
      classes={{
        anchorOriginTopCenter: classes.top20,
        anchorOriginTopRight: classes.top40,
        anchorOriginTopLeft: classes.top40,
      }}
      anchorOrigin={{
        vertical: place.indexOf("t") === -1 ? "bottom" : "top",
        horizontal:
          place.indexOf("l") !== -1
            ? "left"
            : place.indexOf("c") !== -1
            ? "center"
            : "right",
      }}
      open={open}
      message={
        <div>
          <span>{message}</span>
        </div>
      }
      action={action}
      ContentProps={{
        classes: {
          root: classes.root + " " + classes[color],
          message: classes.message,
        },
      }}
    />
  );
}

Snackbar.defaultProps = {
  color: "info",
};

Snackbar.propTypes = {
  classes: PropTypes.object.isRequired,
  message: PropTypes.node.isRequired,
  color: PropTypes.oneOf(["info", "success", "error", "primary"]),
  close: PropTypes.bool,
  place: PropTypes.oneOf(["tl", "tr", "tc", "br", "bl", "bc"]),
  open: PropTypes.bool,
};

export default withStyles(style)(Snackbar);
