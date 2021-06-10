import React from "react";
import PropTypes from "prop-types";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";

// @material-ui/icons
import Email from "@material-ui/icons/EmailOutlined";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

// core components
import Dialog from "../Dialog/Dialog.jsx";
import GridContainer from "../Grid/GridContainer.jsx";
import GridItem from "../Grid/GridItem.jsx";
import CustomInput from "../CustomInput/CustomInput.jsx";
import Button from "../Buttons/Button.jsx";
import Card from "../Card/Card.jsx";
import CardBody from "../Card/CardBody.jsx";
import CardHeader from "../Card/CardHeader.jsx";
import CardFooter from "../Card/CardFooter.jsx";

import loginComponentStyle from "./LoginComponentStyle.jsx";

const styles = (theme) => ({
  ...loginComponentStyle(theme),
  link: {
    cursor: "pointer",
    textDecoration: "underline",
    "&:hover": {
      textDecoration: "underline",
    },
  },
});

class LoginComponent extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    loading: PropTypes.bool,
    errorMessage: PropTypes.string,
    open: PropTypes.bool.isRequired,
    onCancelClick: PropTypes.func.isRequired,
    onCreateAccountClick: PropTypes.func.isRequired,
    onResetPasswordClick: PropTypes.func.isRequired,
    onLogin: PropTypes.func.isRequired,
    onLoginWithGoogleProvider: PropTypes.func.isRequired,
    onLoginWithFacebookProvider: PropTypes.func.isRequired,
    history: PropTypes.object,
    isLoggedIn: PropTypes.func.isRequired,
  };

  state = {
    item: { email: this.props.DEMO_MAIL, password: this.props.DEMO_PASSWORD },
    showPassword: false,
  };

  componentWillMount() {
    if (this.props.isLoggedIn()) {
      this.props.onCancelClick();
    }
  }

  bindValue = (key) => {
    return {
      onChange: (e) => {
        const item = this.state.item;
        item[key] = e.target.value;
        this.setState({ item });
      },
      value: this.state.item[key] || "",
    };
  };

  onSubmitLogin = (event) => {
    event.stopPropagation();
    event.preventDefault();
    const {
      item: { email, password },
    } = this.state;
    return this.props.onLogin(email, password);
  };

  render() {
    const {
      classes,
      errorMessage,
      loading,
      onCancelClick,
      onCreateAccountClick,
      onResetPasswordClick,
    } = this.props;

    const iconPathGoogle = require("./assets/img/auth_service_google.svg");
    const iconPathFacebook = require("./assets/img/auth_service_facebook.svg");
    const recuperaLink =
      !this.props.DEMO_MAIL ||
      this.props.DEMO_MAIL !== this.state.item.email ? (
        <a className={classes.link} onClick={onResetPasswordClick}>
          Recuperar Contraseña
        </a>
      ) : (
        ""
      );

    return (
      <Dialog
        fullScreen={false}
        open={this.props.open}
        loading={loading}
        transparent={true}
      >
        <GridContainer justify="center">
          <GridItem xs={12} sm={6} md={4} style={{ minWidth: "100%" }}>
            <form autoComplete="off" onSubmit={this.onSubmitLogin.bind(this)}>
              <Card withAnimation>
                <CardHeader
                  className={`${classes.cardHeader} ${classes.textCenter}`}
                  //color="primary"
                >
                  <h4 className={classes.cardTitle}>Ingresar</h4>
                </CardHeader>
                <CardBody>
                  <CustomInput
                    labelText="Email"
                    id="email"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Email className={classes.inputAdornmentIcon} />
                        </InputAdornment>
                      ),
                      required: true,
                      ...this.bindValue("email"),
                    }}
                  />
                  <CustomInput
                    labelText="Clave"
                    id="password"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() =>
                              this.setState({
                                showPassword: !this.state.showPassword,
                              })
                            }
                          >
                            {this.state.showPassword ? (
                              <Visibility />
                            ) : (
                              <VisibilityOff />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                      type: this.state.showPassword ? "text" : "password",
                      required: true,
                      ...this.bindValue("password"),
                    }}
                  />
                  {errorMessage && (
                    <p style={{ color: "red", fontWeight: "bold" }}>
                      {errorMessage}
                    </p>
                  )}
                </CardBody>
                <CardFooter className={classes.justifyContentCenter}>
                  <GridContainer>
                    <GridItem xs={12} sm={6}>
                      <div style={{ textAlign: "center" }}>
                        <Button round type="submit" className="ingButton">
                          Ingresar
                        </Button>
                      </div>
                    </GridItem>
                    <GridItem xs={12} sm={6}>
                      <div style={{ textAlign: "center" }}>
                        <Button round onClick={onCancelClick}>
                          Cancelar
                        </Button>
                      </div>
                    </GridItem>
                  </GridContainer>
                </CardFooter>
                <CardFooter className={classes.justifyContentCenter}>
                  <GridContainer>
                    <GridItem xs={12}>
                      <div style={{ textAlign: "center" }}>
                        <div
                          className={classes.center}
                          style={{ textAlign: "center" }}
                        >
                          <a
                            className={classes.link}
                            onClick={onCreateAccountClick}
                          >
                            Registrarse
                          </a>
                          &nbsp; &nbsp;
                          {recuperaLink}
                        </div>
                      </div>
                    </GridItem>
                  </GridContainer>
                </CardFooter>
                <CardFooter className={classes.justifyContentCenter}>
                  <GridContainer>
                    <GridItem xs={12}>
                      <div style={{ textAlign: "center" }}>
                        <Button
                          round
                          onClick={this.props.onLoginWithGoogleProvider}
                        >
                          <img
                            src={iconPathGoogle}
                            className={classes.img}
                            alt=""
                          />
                          &nbsp; &nbsp;Ingresar Con Google
                        </Button>
                      </div>
                    </GridItem>
                    <GridItem xs={12}>
                      <div style={{ textAlign: "center" }}>
                        <Button
                          round
                          onClick={this.props.onLoginWithFacebookProvider}
                        >
                          <img
                            src={iconPathFacebook}
                            className={classes.img}
                            alt=""
                          />
                          &nbsp; &nbsp;Ingresar con Facebook
                        </Button>
                      </div>
                    </GridItem>
                  </GridContainer>
                </CardFooter>
              </Card>
            </form>
          </GridItem>
        </GridContainer>
      </Dialog>
    );
  }
}

export default withStyles(styles)(LoginComponent);
