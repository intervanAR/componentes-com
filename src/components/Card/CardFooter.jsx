import React from "react";
import PropTypes from "prop-types";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// styles
import style from "./CardStyle.jsx";

function CardFooter({ ...props }) {
  const { classes, className, children, ...rest } = props;
  return (
    <div className={`${classes.cardFooter} ${className}`} {...rest}>
      {children}
    </div>
  );
}

CardFooter.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default withStyles(style)(CardFooter);
