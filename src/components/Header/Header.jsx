import React, { useState, useEffect } from "react";
//import PropTypes from "prop-types";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Hidden from "@material-ui/core/Hidden";

// material-ui icons
import Menu from "@material-ui/icons/Menu";
import MoreVert from "@material-ui/icons/MoreVert";
import ViewList from "@material-ui/icons/ViewList";

// core components
import Button from "../Buttons/Button.jsx";

// Styles
import style from "./HeaderStyle.jsx";

const Header = (props) => {
  const [classes] = useState(props.classes);
  const [miniActive] = useState(props.miniActive);
  const [children] = useState(props.children);
  const [showTitle] = useState(props.showTitle || true);

  const logoURL = props?.logoURL;

  /*const propTypes = {
    classes: PropTypes.object.isRequired,
    sidebarMinimize: PropTypes.func.isRequired,
    miniActive: PropTypes.bool.isRequired,
    showTitle: PropTypes.bool,
    routes: PropTypes.array.isRequired,
    handleDrawerToggle: PropTypes.func.isRequired,
    children: PropTypes.any,
  };*/

  // Initialize state with undefined width/height so server and client renders match
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  const makeBrand = (props) => {
    const { routes, location } = props;
    let name = "";
    {
      routes &&
        routes.map((prop) => {
          if (prop.collapse) {
            prop.views.map((view) => {
              if (view.path === location.pathname) {
                name = view.name;
              }
              return null;
            });
          }
          if (prop.path === location.pathname) {
            name = prop.name;
          }
          return null;
        });
    }
    return name;
  };

  return (
    <AppBar className={classes.appBar}>
      <Toolbar className={classes.container}>
        <Hidden smDown implementation="css">
          <div className={classes.sidebarMinimize}>
            {miniActive ? (
              <Button justIcon round onClick={props.sidebarMinimize}>
                <ViewList className={classes.sidebarMiniIcon} />
              </Button>
            ) : (
              <Button justIcon round onClick={props.sidebarMinimize}>
                <MoreVert className={classes.sidebarMiniIcon} />
              </Button>
            )}
          </div>
        </Hidden>
        {windowSize.width <= 570 && logoURL && (
          <div>
            <img className={classes.appLogo} src={logoURL} alt="logo" />
          </div>
        )}
        <div className={classes.brandContainer}>
          {/* Here we create navbar brand, based on route name */}
          {showTitle && (
            <Button href="#" className={classes.title} color="transparent">
              {makeBrand(props)}
            </Button>
          )}
          {children}
        </div>
        <Hidden smDown implementation="css"></Hidden>
        <Hidden mdUp implementation="css">
          <Button
            className={classes.appResponsive}
            color="transparent"
            justIcon
            aria-label="open drawer"
            onClick={props.handleDrawerToggle}
          >
            <Menu />
          </Button>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(style)(Header);
