import React from "react";
import PropTypes from "prop-types";
import BlockUi from "react-block-ui"; // @TODO - this lib is doing a crazy shit with focus that produces flickering in tall windows

import "react-block-ui/style.css";

import withStyles from "@material-ui/core/styles/withStyles";
import "./loader.scss";

const styles = (theme) => ({
  spinColor: {
    color: theme?.palette?.default?.main || "#3f51b5",
  },
});

class BlockComponent extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    blocking: PropTypes.bool,
    keepInView: PropTypes.bool,
    showSpinner: PropTypes.bool,
    children: PropTypes.node,
    renderChildren: PropTypes.bool, // default to true
    className: PropTypes.string,
    message: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    loader: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.func,
      PropTypes.node,
    ]),
    tag: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  };

  static defaultProps = {
    showSpinner: true,
  };

  state = {};

  render() {
    const { showSpinner, blocking, children, classes } = this.props;

    const MyLoader = () => {
      return showSpinner ? (
        <div className={`jp-loader ${classes.spinColor}`} />
      ) : (
        <div></div>
      );
    };

    return (
      <BlockUi loader={MyLoader} blocking={blocking} keepInView>
        {children}
      </BlockUi>
    );
  }
}

export default withStyles(styles)(BlockComponent);
