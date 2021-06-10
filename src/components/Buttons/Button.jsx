import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
import MuiButton from "@material-ui/core/Button";

// Styles
import style from "./ButtonStyle.jsx";

function Button({ ...props }) {
  const {
    classes,
    color,
    round,
    children,
    fullWidth,
    disabled,
    simple,
    size,
    justIcon,
    className,
    ...rest
  } = props;
  const btnClasses = classNames({
    [classes.button]: true,
    [classes[size]]: size,
    [classes[color]]: color,
    [classes.round]: round,
    [classes.fullWidth]: fullWidth,
    [classes.disabled]: disabled,
    [classes.simple]: simple,
    [classes.justIcon]: justIcon,
    [className]: className,
  });
  return (
    <MuiButton {...rest} className={btnClasses}>
      {children}
    </MuiButton>
  );
}

Button.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.oneOf([
    "primary",
    "success",
    "error",
    "secondary",
    "transparent",
  ]),
  size: PropTypes.oneOf(["sm", "lg"]),
  simple: PropTypes.bool,
  round: PropTypes.bool,
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  justIcon: PropTypes.bool,
  className: PropTypes.string,
};

export default withStyles(style)(Button);
