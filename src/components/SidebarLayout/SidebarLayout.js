import React, { useEffect, useState } from "react";

import {
  Icon,
  Tooltip,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Hidden,
  Collapse,
} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import PerfectScrollbar from "perfect-scrollbar";
import { NavLink } from "react-router-dom";
import cx from "classnames";

import AccountTreeTwoToneIcon from "@material-ui/icons/AccountTreeTwoTone";
import HighlightOffTwoToneIcon from "@material-ui/icons/HighlightOffTwoTone";
import PermIdentityTwoToneIcon from "@material-ui/icons/PermIdentityTwoTone";
import PersonOutlineTwoToneIcon from "@material-ui/icons/PersonOutlineTwoTone";
//import AccountBalance from "@material-ui/icons/House";
import EmojiTransportationTwoToneIcon from "@material-ui/icons/EmojiTransportationTwoTone";
import BallotTwoToneIcon from "@material-ui/icons/BallotTwoTone";
import avatar from "../../assets/img/default-avatar.png";

// Styles
import sidebarStyle from "./SidebarStyle.jsx";

// We've created this component so we can have a ref to the wrapper of the links that appears in our sidebar.
// This was necessary so that we could initialize PerfectScrollbar on the links.
// There might be something with the Hidden component from material-ui, and we didn't have access to
// the links, and couldn't initialize the plugin.
function SidebarWrapper(props) {
  const { className, user, links } = props;

  useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(refs.sidebarWrapper, {
        suppressScrollX: true,
        suppressScrollY: false,
      });
    }

    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
    }
  }, []);

  return (
    <div className={className} ref="sidebarWrapper">
      {user}
      {links}
    </div>
  );
}

function SidebarLayout(props) {
  const { classes, logo, logoText, routes, user, loading } = props;
  const standalone = localStorage.getItem("standalone")
    ? localStorage.getItem("standalone").toUpperCase()
    : "S";
  const [miniActive, setMiniActive] = useState(false);
  const [collapse, setCollapse] = useState(false);
  const [openAvatar, setOpenAvatar] = useState(false);

  const itemText =
    classes.itemText +
    " " +
    cx({
      [classes.itemTextMini]: props.miniActive && state.miniActive,
    });

  const collapseItemText =
    classes.collapseItemText +
    " " +
    cx({
      [classes.collapseItemTextMini]: props.miniActive && miniActive,
    });

  const userWrapperClass = classes.user + " " + classes.drawerBackgroundAfter;

  const caret = classes.caret;
  const photo = classes.photo;

  const fullname =
    props.updatedUser && props.updatedUser.hasOwnProperty("nombre")
      ? props.updatedUser.nombre
      : props.user && props.user.nombre;

  const foto = props.user.fotoUrl;

  const MENU_DESC_CUENTAS = props.parametros.REACT_APP_MENU_DESC_CUENTAS
    ? props.parametros.REACT_APP_MENU_DESC_CUENTAS.valor
    : "Cuentas";

  let userContainer = <div></div>;

  const iconoCuentas =
    props.parametros.REACT_APP_MENU_ICON_CUENTAS &&
    props.parametros.REACT_APP_MENU_ICON_CUENTAS.valor === "municipios" ? (
      <EmojiTransportationTwoToneIcon />
    ) : props.parametros.REACT_APP_MENU_ICON_CUENTAS &&
      props.parametros.REACT_APP_MENU_ICON_CUENTAS.valor === "creditos" ? (
      <BallotTwoToneIcon />
    ) : (
      <AccountTreeTwoToneIcon />
    );

  //USER PROFILE

  if (props.isLoggedIn) {
    userContainer = (
      <div className={userWrapperClass}>
        <div className={photo}>
          <img src={foto || avatar} className={classes.avatarImg} alt="..." />
        </div>
        <List className={classes.list}>
          <ListItem className={classes.item + " " + classes.userItem}>
            <NavLink
              to={"#"}
              className={classes.itemLink + " " + classes.userCollapseButton}
              onClick={() => setCollapse(!collapse)}
            >
              <ListItemText
                primary={fullname}
                secondary={
                  <b
                    className={
                      caret +
                      " " +
                      classes.userCaret +
                      " " +
                      (openAvatar ? classes.caretActive : "")
                    }
                  />
                }
                disableTypography={true}
                className={itemText + " " + classes.userItemText}
              />
            </NavLink>

            <Collapse in={openAvatar} unmountOnExit>
              <List className={classes.list + " " + classes.collapseList}>
                <ListItem
                  className={classes.collapseItem}
                  onClick={this.onMyProfile}
                >
                  <NavLink
                    to={props.getFullUrl("myprofile")}
                    className={classes.itemLink}
                  >
                    <ListItemIcon
                      className={classes.itemIcon}
                      style={{ top: 0 }}
                    >
                      <Icon color="primary">
                        <PermIdentityTwoToneIcon />
                      </Icon>
                    </ListItemIcon>
                    <ListItemText
                      primary={"Mi Perfil"}
                      disableTypography={true}
                      className={collapseItemText}
                    />
                  </NavLink>
                </ListItem>

                <ListItem
                  className={classes.collapseItem}
                  onClick={this.onCuentas}
                >
                  <NavLink
                    to={props.getFullUrl("cuentas")}
                    className={classes.itemLink}
                  >
                    <ListItemIcon
                      className={classes.itemIcon}
                      style={{ top: 0 }}
                    >
                      <Icon color="primary">{iconoCuentas}</Icon>
                    </ListItemIcon>
                    <ListItemText
                      primary={MENU_DESC_CUENTAS}
                      disableTypography={true}
                      className={collapseItemText}
                    />
                  </NavLink>
                </ListItem>
                <ListItem
                  className={classes.collapseItem}
                  onClick={() => {
                    standalone === "N" ? window.close() : props.showLogout;
                  }}
                >
                  <NavLink to="#" className={classes.itemLink}>
                    <ListItemIcon
                      className={classes.itemIcon}
                      style={{ top: 0 }}
                    >
                      <Icon color="primary">
                        <HighlightOffTwoToneIcon />
                      </Icon>
                    </ListItemIcon>
                    <ListItemText
                      primary={standalone === "N" ? "Volver" : "Salir"}
                      disableTypography={true}
                      className={collapseItemText}
                    />
                  </NavLink>
                </ListItem>
              </List>
            </Collapse>
          </ListItem>
        </List>
      </div>
    );
  } else {
    userContainer = (
      <div className={userWrapperClass}>
        <NavLink
          to="#"
          onClick={props.onLoginClick}
          className={classes.itemLink}
        >
          <ListItemIcon className={classes.itemIcon} style={{ top: 0 }}>
            <Icon color="primary">
              <PersonOutlineTwoToneIcon />
            </Icon>
          </ListItemIcon>
          <ListItemText
            primary={"Ingresar"}
            disableTypography={true}
            className={collapseItemText}
          />
        </NavLink>
      </div>
    );
  }

  //LINKS

  const checkPermissions = (prop, user) => true;

  const hasChildrenToShow = (children, user) => {
    let childrenToShow = false;
    children.map((prop) => {
      return (childrenToShow |= checkPermissions(prop, user));
    });
    return childrenToShow;
  };

  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName) => {
    return props.location.pathname.indexOf(routeName) > -1 ? true : false;
  };

  //que rayos hace esto this.state[prop.state]

  var links = (
    <List className={classes.list}>
      {routes.map((prop, key) => {
        const disabled = prop.disabled || false;

        if (prop.redirect) return null;
        if (prop.notShowOnMenu) return null;
        if (prop.private && !props.isLoggedIn) return null;
        if (prop.collapse) {
          if (!hasChildrenToShow(prop.views, user)) return null;
          const navLinkClasses =
            classes.itemLink +
            " " +
            cx({
              [" " + classes.collapseActive]: activeRoute(prop.path),
            });
          const itemText =
            classes.itemText +
            " " +
            cx({
              [classes.itemTextMini]: props.miniActive && miniActive,
            });
          const collapseItemText =
            classes.collapseItemText +
            " " +
            cx({
              [classes.collapseItemTextMini]: props.miniActive && miniActive,
            });
          const itemIcon = classes.itemIcon;
          const caret = classes.caret;
          return (
            <ListItem key={key} className={classes.item} disabled={disabled}>
              <NavLink
                to={"#"}
                className={navLinkClasses}
                onClick={() => setCollapse(!collapse)}
              >
                <ListItemIcon className={itemIcon}>
                  {typeof prop.icon === "string" ? (
                    <Icon>{prop.icon}</Icon>
                  ) : (
                    <prop.icon color="primary" />
                  )}
                </ListItemIcon>
                <Tooltip title={prop.tooltip || ""} placement="right-start">
                  <ListItemText
                    primary={prop.name}
                    secondary={
                      <b
                        className={
                          caret + " " + (prop.state ? classes.caretActive : "")
                        }
                      />
                    }
                    disableTypography={true}
                    className={itemText}
                  />
                </Tooltip>
              </NavLink>

              <Collapse in={prop.state} unmountOnExit>
                <List className={classes.list + " " + classes.collapseList}>
                  {prop.views.map((prop, key) => {
                    const disabled = prop.disabled || false;
                    if (!checkPermissions(prop, user)) return null;
                    const navLinkClasses =
                      classes.collapseItemLink +
                      " " +
                      cx({
                        [" " + classes.optionColor]: activeRoute(prop.path),
                      });
                    return (
                      <ListItem
                        key={key}
                        className={classes.collapseItem}
                        disabled={disabled}
                      >
                        <NavLink
                          to={disabled ? "#" : prop.path}
                          className={navLinkClasses}
                        >
                          <ListItemIcon className={itemIcon} style={{ top: 0 }}>
                            {typeof prop.icon === "string" ? (
                              <Icon>{prop.icon}</Icon>
                            ) : (
                              <prop.icon color="primary" />
                            )}
                          </ListItemIcon>
                          <Tooltip
                            title={prop.tooltip || ""}
                            placement="right-start"
                          >
                            <ListItemText
                              primary={prop.name}
                              disableTypography={true}
                              className={collapseItemText}
                            />
                          </Tooltip>
                        </NavLink>
                      </ListItem>
                    );
                  })}
                </List>
              </Collapse>
            </ListItem>
          );
        }
        if (!checkPermissions(prop, user)) return null;
        const navLinkClasses =
          classes.itemLink +
          " " +
          cx({
            [" " + classes.optionColor]: activeRoute(prop.path),
          });
        const itemText =
          classes.itemText +
          " " +
          cx({
            [classes.itemTextMini]: props.miniActive && state.miniActive,
          });
        const itemIcon = classes.itemIcon;
        return (
          <ListItem key={key} className={classes.item} disabled={disabled}>
            <NavLink to={disabled ? "#" : prop.path} className={navLinkClasses}>
              <ListItemIcon className={itemIcon}>
                {typeof prop.icon === "string" ? (
                  <Icon color="primary">{prop.icon}</Icon>
                ) : (
                  <prop.icon color="primary" />
                )}
              </ListItemIcon>
              <ListItemText
                primary={prop.name}
                disableTypography={true}
                className={itemText}
              />
            </NavLink>
          </ListItem>
        );
      })}
    </List>
  );

  const logoNormal =
    classes.logoNormal +
    " " +
    cx({
      [classes.logoNormalSidebarMini]: props.miniActive && miniActive,
    });
  const logoMini =
    classes.logoMini +
    " " +
    cx({
      [classes.logoMiniSidebarMini]: props.miniActive && miniActive,
    });
  const logoImg =
    classes.img +
    " " +
    cx({
      [classes.imgSidebarMini]: props.miniActive && miniActive,
    });
  const logoClasses = classes.logo + " " + classes.drawerBackgroundAfter;
  var brand = (
    <div className={logoClasses}>
      <a href={props.getFullUrl("")} className={logoMini}>
        <img src={logo} alt="logo" className={logoImg} />
      </a>
      {logoText && (
        <a href={props.getFullUrl("")} className={logoNormal}>
          {logoText}
        </a>
      )}
    </div>
  );
  const drawerPaper =
    classes.drawerPaper +
    " " +
    cx({
      [classes.drawerPaperMini]: props.miniActive && miniActive,
    });
  const sidebarWrapper =
    classes.sidebarWrapper +
    " " +
    cx({
      [classes.drawerPaperMini]: props.miniActive && miniActive,
      [classes.sidebarWrapperWithPerfectScrollbar]:
        navigator.platform.indexOf("Win") > -1,
    });

  return (
    <div ref="mainPanel">
      <Hidden mdUp implementation="css">
        <Drawer
          variant="temporary"
          anchor={"right"}
          open={props.open}
          classes={{ paper: drawerPaper + " " + classes.drawerBackground }}
          onClose={props.handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {brand}
          <SidebarWrapper
            className={sidebarWrapper}
            user={userContainer}
            links={links}
          />
        </Drawer>
      </Hidden>
      <Hidden smDown implementation="css">
        <Drawer
          onMouseOver={() => setMiniActive(false)}
          onMouseOut={() => setMiniActive(true)}
          anchor={"left"}
          variant="permanent"
          open
          classes={{ paper: drawerPaper + " " + classes.drawerBackground }}
        >
          {brand}
          <SidebarWrapper
            className={sidebarWrapper}
            user={userContainer}
            links={links}
          />
        </Drawer>
      </Hidden>
    </div>
  );
}

export default withStyles(sidebarStyle)(SidebarLayout);
