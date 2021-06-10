import React /*, {props}*/ from "react";
import PropTypes from "prop-types";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// Styles
import styles from "./CardStyle.jsx";

class Card extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
    withAnimation: PropTypes.bool,
  };

  state = {
    cardAnimationClass:
      this.props.withAnimation && this.props.classes.cardHidden,
  };

  componentDidMount() {
    if (this.props.withAnimation) {
      // we add a hidden class to the card and after 700 ms we delete it and the transition appears
      this.timeOutFunction = setTimeout(
        function () {
          this.setState({ cardAnimationClass: null });
        }.bind(this),
        700
      );
    }
  }

  componentWillUnmount() {
    if (this.props.withAnimation) {
      clearTimeout(this.timeOutFunction);
      this.timeOutFunction = null;
    }
  }

  render() {
    const { classes, children, withAnimation, className, ...rest } = this.props;
    const { cardAnimationClass } = this.state;
    return (
      <div
        className={`${classes.card} ${
          withAnimation && classes.cardAnimation
        } ${cardAnimationClass} ${className} `}
        {...rest}
      >
        {children}
      </div>
    );
  }
}

export default withStyles(styles)(Card);
