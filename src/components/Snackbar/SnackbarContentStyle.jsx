const SnackbarContentStyle = (theme) => ({
  root: {
    ...theme.defaultFont,
    flexWrap: "unset",
    position: "relative",
    padding: "20px 15px",
    lineHeight: "20px",
    marginBottom: "20px",
    fontSize: "14px",
    backgroundColor: "white",
    color: "#555555",
    borderRadius: "3px",
    boxShadow:
      "0 12px 20px -10px rgba(255, 255, 255, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 255, 255, 0.2)",
  },
  top20: {
    top: "20px",
  },
  top40: {
    top: "40px",
  },
  info: {
    backgroundColor: theme.palette.info.main,
    color: theme.palette.info.contrastText,
  },
  success: {
    backgroundColor: theme?.palette?.success?.main || "lightseagreen",
    color: theme?.palette?.success?.contrastText || "white",
  },
  error: {
    backgroundColor: theme?.palette?.error?.main || "orangered",
    color: theme?.palette?.error?.contrastText || "white",
  },
  primary: {
    backgroundColor: theme?.palette?.default?.main || "#3f51b5",
    color: theme?.palette?.default?.contrastText || "white",
  },
  message: {
    padding: "0",
    display: "block",
    width: "100%",
  },
  close: {
    width: "11px",
    height: "11px",
  },
  iconButton: {
    width: "24px",
    height: "24px",
    padding: "0px",
  },
});

export default SnackbarContentStyle;
