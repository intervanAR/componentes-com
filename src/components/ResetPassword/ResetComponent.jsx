import React from "react";
import PropTypes from "prop-types";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";

// @material-ui/icons
import Email from "@material-ui/icons/EmailOutlined";

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

import resetComponentStyle from "./ResetComponentStyle.jsx";

const styles = (theme) => ({
  ...resetComponentStyle(theme),
  link: {
    cursor: "pointer",
    textDecoration: "underline",
    "&:hover": {
      textDecoration: "underline",
    },
  },
});

class ResetComponent extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    loading: PropTypes.bool,
    errorMessage: PropTypes.string,
    open: PropTypes.bool.isRequired,
    onResetPassword: PropTypes.func.isRequired,
    onCancelClick: PropTypes.func.isRequired,
    onLoginClick: PropTypes.func.isRequired,
    onResetClick: PropTypes.func.isRequired,
    history: PropTypes.object,
    isLoggedIn: PropTypes.func.isRequired,
  };

  state = {
    item: {},
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

  onSubmitReset = (event) => {
    event.stopPropagation();
    event.preventDefault();
    const {
      item: { email },
    } = this.state;
    return this.props.onResetPassword(email);
  };

  render() {
    const {
      classes,
      errorMessage,
      loading,
      onCancelClick,
      onLoginClick,
    } = this.props;
    return (
      <Dialog
        fullScreen={false}
        open={this.props.open}
        loading={loading}
        transparent={true}
      >
        <GridContainer justify="center">
          <GridItem xs={12} sm={6} md={4} style={{ minWidth: "100%" }}>
            <form autoComplete="off" onSubmit={this.onSubmitReset.bind(this)}>
              <Card>
                <CardHeader
                  className={`${classes.cardHeader} ${classes.textCenter}`}
                  color="primary"
                >
                  <h4 className={classes.cardTitle}>Recuperar Contraseña</h4>
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
                      Recuperar Contraseña
                    </Button>
                  </div>
                </CardFooter>
                <CardFooter className={classes.justifyContentCenter}>
                  <div
                    className={classes.center}
                    style={{ textAlign: "center" }}
                  >
                    <Button round onClick={onLoginClick}>
                      Ingresar
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

export default withStyles(styles)(ResetComponent);
