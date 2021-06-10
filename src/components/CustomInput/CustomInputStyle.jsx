const CustomInputStyle = (theme) => ({
  disabled: {
    "&:before": {
      borderColor: "transparent !important",
    },
  },
  underline: {
    "&:hover:not($disabled):before,&:before": {
      borderColor: "#D2D2D2 !important",
      borderWidth: "1px !important",
    },
    "&:after": {
      borderColor: theme?.palette?.success?.main || "lightseagreen",
    },
  },
  underlineError: {
    "&:after": {
      borderColor: theme?.palette?.error?.main || "orangered",
    },
  },
  underlineSuccess: {
    "&:after": {
      borderColor: theme?.palette?.success?.main || "lightseagreen",
    },
  },
  labelRoot: {
    ...theme.defaultFont,
    color: "#AAAAAA !important",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "1.42857",
    top: "10px",
    "& + $underline": {
      marginTop: "0px",
    },
  },
  labelRootError: {
    color: theme?.palette?.error?.main || "orangered" + " !important",
  },
  labelRootSuccess: {
    color: theme?.palette?.success?.main || "lightseagreen" + " !important",
  },
  formControl: {
    margin: "0 17px 17px 0",
    paddingTop: "27px",
    position: "relative",
    "& svg,& .fab,& .far,& .fal,& .fas,& .material-icons": {
      color: "#495057",
    },
  },
  input: {
    color: "#495057",
    "&,&::placeholder": {
      fontSize: "14px",
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: "400",
      lineHeight: "1.42857",
      opacity: "1",
    },
    "&::placeholder": {
      color: "#AAAAAA",
    },
  },
});

export default CustomInputStyle;
