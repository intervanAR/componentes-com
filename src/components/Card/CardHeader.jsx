import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// Styles
import styles from "./CardStyle.jsx";

class CardHeader extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
    icon: PropTypes.bool,
    color: PropTypes.oneOf(["primary"]),
  };

  render() {
    const { classes, className, children, color, icon, ...rest } = this.props;
    const cardHeaderClasses = classNames({
      [classes[color + "ColorCardHeader"]]: color,
      [classes.cardHeaderIcon]: icon,
    });

    return (
      <div
        className={`${classes.cardHeader} ${cardHeaderClasses} ${className}`}
        {...rest}
      >
        {children}
      </div>
    );
  }
}

export default withStyles(styles)(CardHeader);
