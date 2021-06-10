import React from "react";
import PropTypes from "prop-types";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";

// @material-ui/icons
import Email from "@material-ui/icons/EmailOutlined";
import Person from "@material-ui/icons/PersonOutline";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

// core components
import GridContainer from "../Grid/GridContainer.jsx";
import Dialog from "../Dialog/Dialog.jsx";
import GridItem from "../Grid/GridItem.jsx";
import CustomInput from "../CustomInput/CustomInput.jsx";
import Button from "../Buttons/Button.jsx";
import Card from "../Card/Card.jsx";
import CardBody from "../Card/CardBody.jsx";
import CardHeader from "../Card/CardHeader.jsx";
import CardFooter from "../Card/CardFooter.jsx";

import registerComponentStyle from "./RegisterComponentStyle.jsx";

const styles = (theme) => ({
  ...registerComponentStyle(theme),
  link: {
    cursor: "pointer",
    textDecoration: "underline",
    "&:hover": {
      textDecoration: "underline",
    },
  },
});

class RegisterComponent extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    loading: PropTypes.bool,
    errorMessage: PropTypes.string,
    open: PropTypes.bool.isRequired,
    onCancelClick: PropTypes.func.isRequired,
    onLoginClick: PropTypes.func.isRequired,
    onRegister: PropTypes.func.isRequired,
    history: PropTypes.object,
    isLoggedIn: PropTypes.func.isRequired,
  };

  state = {
    item: {},
    errorMessage: null,
    showPassword: false,
  };

  componentWillMount() {
    if (props.isLoggedIn()) {
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

  onSubmitRegister = (event) => {
    event.stopPropagation();
    event.preventDefault();
    //Varificar password and password2
    if (this.state.item.password !== this.state.item.password2) {
      this.setState({ errorMessage: "Las claves no coiciden." });
      return;
    }
    this.setState({ errorMessage: null });
    const {
      item: { email, name, password },
    } = this.state;
    return this.props.onRegister(email, name, password);
  };

  render() {
    const { classes, loading, onCancelClick, onLoginClick } = this.props;
    const errorMessage =
      this.props.errorMessage || this.state.errorMessage || null;
    return (
      <Dialog
        fullScreen={false}
        open={this.props.open}
        loading={loading}
        transparent={true}
      >
        <GridContainer justify="center">
          <GridItem xs={12} sm={6} md={4} style={{ minWidth: "100%" }}>
            <form
              autoComplete="off"
              onSubmit={this.onSubmitRegister.bind(this)}
            >
              <Card>
                <CardHeader
                  className={`${classes.cardHeader} ${classes.textCenter}`}
                  color="primary"
                >
                  <h4 className={classes.cardTitle}>Crear Usuario</h4>
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
                      type: "email",
                      required: true,
                      ...this.bindValue("email"),
                    }}
                  />
                  <CustomInput
                    labelText="Nombre"
                    id="name"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Person className={classes.inputAdornmentIcon} />
                        </InputAdornment>
                      ),
                      required: true,
                      ...this.bindValue("name"),
                    }}
                  />
                  <CustomInput
                    labelText="Clave"
                    id="password"
                    helpText={"Debe tener al menos 6 caracteres"}
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
                    inputHtmlProps={{
                      pattern: ".{6,}",
                    }}
                  />

                  <CustomInput
                    labelText="Repetir clave"
                    id="password2"
                    helpText={"Debe tener al menos 6 caracteres"}
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
                      ...this.bindValue("password2"),
                    }}
                    inputHtmlProps={{
                      pattern: ".{6,}",
                    }}
                  />
                  {errorMessage && (
                    <p style={{ color: "red", fontWeight: "bold" }}>
                      {errorMessage}
                    </p>
                  )}
                </CardBody>
                <CardFooter className={classes.justifyContentCenter}>
                  <div
                    className={classes.center}
                    style={{ textAlign: "center" }}
                  >
                    <Button round onClick={onCancelClick}>
                      Cancelar
                    </Button>
                    <Button round color="primary" type="submit">
                      Registrar
                    </Button>
                  </div>
                </CardFooter>
                <CardFooter className={classes.justifyContentCenter}>
                  <div
                    className={classes.center}
                    style={{ textAlign: "center" }}
                  >
                    <Button round onClick={onLoginClick}>
                      INGRESAR
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </form>
          </GridItem>
        </GridContainer>
      </Dialog>
    );
  }
}

export default withStyles(styles)(RegisterComponent);
