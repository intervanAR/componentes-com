import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// Styles
import style from "./CardStyle.jsx";

class CardIcon extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
    color: PropTypes.oneOf(["primary"]),
  };

  render() {
    const { classes, className, children, color, ...rest } = this.props;
    const cardIconClasses = classNames({
      [classes[color + "ColorCardHeader"]]: color,
    });
    return (
      <div
        className={`${classes.cardIcon} ${cardIconClasses} ${className}`}
        {...rest}
      >
        {children}
      </div>
    );
  }
}

export default withStyles(style)(CardIcon);
