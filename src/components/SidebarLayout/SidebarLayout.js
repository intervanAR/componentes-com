import React, { useEffect, useState } from "react";

import Icon from "@material-ui/core/Icon";
import AccountTreeTwoToneIcon from "@material-ui/icons/AccountTreeTwoTone";
import HighlightOffTwoToneIcon from "@material-ui/icons/HighlightOffTwoTone";
import PermIdentityTwoToneIcon from "@material-ui/icons/PermIdentityTwoTone";
import PersonOutlineTwoToneIcon from "@material-ui/icons/PersonOutlineTwoTone";
//import AccountBalance from "@material-ui/icons/House";
import EmojiTransportationTwoToneIcon from "@material-ui/icons/EmojiTransportationTwoTone";
import BallotTwoToneIcon from "@material-ui/icons/BallotTwoTone";

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
                      (this.state.openAvatar ? classes.caretActive : "")
                    }
                  />
                }
                disableTypography={true}
                className={itemText + " " + classes.userItemText}
              />
            </NavLink>

            <Collapse in={this.state.openAvatar} unmountOnExit>
              <List className={classes.list + " " + classes.collapseList}>
                <ListItem
                  className={classes.collapseItem}
                  onClick={this.onMyProfile}
                >
                  <NavLink
                    to={getFullUrl("myprofile")}
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
                    to={getFullUrl("cuentas")}
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
                    standalone === "N"
                      ? window.close()
                      : this.setState({ openConfirm: true });
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
          onClick={this.onLoginClick.bind(this)}
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

  return (
    <div ref="mainPanel">
      <Hidden mdUp implementation="css">
        <Drawer
          variant="temporary"
          anchor={"right"}
          open={this.props.open}
          classes={{ paper: drawerPaper + " " + classes.drawerBackground }}
          onClose={this.props.handleDrawerToggle}
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

export default SidebarLayout;
