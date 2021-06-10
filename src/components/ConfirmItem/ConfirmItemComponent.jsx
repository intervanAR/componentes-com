import React from "react";
import PropTypes from "prop-types";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "../Buttons/Button.jsx";
import BlockComponent from "../Loading/BlockComponent";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  confirmButton: {
    backgroundColor: theme?.palette?.primary?.main || "green",
    "&:hover": {
      opacity: "0.8",
      backgroundColor: `${theme?.palette?.primary?.main} !important` || "green",
    },
  },
}));

function ConfirmItemComponent(props) {
  const { title, description, loading } = props;
  const classes = useStyles();

  const handleClose = () => {
    if (props.handleClose) props.handleClose();
  };

  const handleContinue = () => {
    const { item } = props;
    if (props.handleOnConfirm) props.handleOnConfirm(item);
  };

  return (
    <Dialog
      open={props.open}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <BlockComponent blocking={loading}>
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {description}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button
            onClick={handleContinue}
            className={classes.confirmButton}
            autoFocus
          >
            Si
          </Button>
        </DialogActions>
      </BlockComponent>
    </Dialog>
  );
}

ConfirmItemComponent.propTypes = {
  classes: PropTypes.any,
  style: PropTypes.any,
  open: PropTypes.bool.isRequired,
  item: PropTypes.any.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleOnConfirm: PropTypes.func,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  loading: PropTypes.bool,
};

export default ConfirmItemComponent;

/*export default class ConfirmItemComponent extends React.Component {
  static propTypes = {
    classes: PropTypes.any,
    style: PropTypes.any,
    open: PropTypes.bool.isRequired,
    item: PropTypes.any.isRequired,
    handleClose: PropTypes.func.isRequired,
    handleOnConfirm: PropTypes.func,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    loading: PropTypes.bool,
  };

  state = {};

  handleClose = () => {
    if (this.props.handleClose) this.props.handleClose();
  };

  handleContinue = () => {
    const { item } = this.props;
    if (this.props.handleOnConfirm) this.props.handleOnConfirm(item);
  };

  render() {
    const { title, description, loading } = this.props;
    return (
      <Dialog
        open={this.props.open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <BlockComponent blocking={loading}>
          <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {description}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose}>Cancelar</Button>
            <Button onClick={this.handleContinue} color="primary" autoFocus>
              Si
            </Button>
          </DialogActions>
        </BlockComponent>
      </Dialog>
    );
  }
}*/
