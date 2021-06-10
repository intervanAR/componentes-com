import React from "react";
import PropTypes from "prop-types";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import MuiDialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";

// core components
import BlockComponent from "../Loading/BlockComponent";

// styles
import styles from "./DialogStyle.jsx";

class Dialog extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    loading: PropTypes.bool,
    fullScreen: PropTypes.bool,
    maxWidth: PropTypes.bool,
    transparent: PropTypes.bool,
    open: PropTypes.bool.isRequired,
  };

  state = {};

  render() {
    const {
      classes,
      open,
      children,
      loading,
      fullScreen,
      transparent,
      maxWidth,
    } = this.props;
    return (
      <MuiDialog
        fullScreen={fullScreen}
        maxWidth={maxWidth}
        classes={{
          root: transparent && classes.modalRootTransparent,
          paper: transparent && classes.modalTransparent,
        }}
        open={open}
      >
        <BlockComponent blocking={loading}>
          <DialogContent
            className={transparent && classes.modalBodyTransparent}
          >
            {children}
          </DialogContent>
        </BlockComponent>
      </MuiDialog>
    );
  }
}

export default withStyles(styles)(Dialog);
