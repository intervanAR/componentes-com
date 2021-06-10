import React from "react";
import PropTypes from "prop-types";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// styles
import style from "./CardStyle.jsx";

function CardBody({ ...props }) {
  const { classes, className, children, ...rest } = props;
  return (
    <div className={`${classes.cardBody} ${className}`} {...rest}>
      {children}
    </div>
  );
}

CardBody.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default withStyles(style)(CardBody);
