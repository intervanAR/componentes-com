const LoginComponentStyle = (theme) => ({
  container: {
    paddingRight: "15px",
    paddingLeft: "15px",
    marginRight: "auto",
    marginLeft: "auto",
    "@media (min-width: 768px)": {
      width: "750px",
    },
    "@media (min-width: 992px)": {
      width: "970px",
    },
    "@media (min-width: 1200px)": {
      width: "1170px",
    },
    "&:before,&:after": {
      display: "table",
      content: '" "',
    },
    "&:after": {
      clear: "both",
    },
    zIndex: "4",
    [theme.breakpoints.down("sm")]: {
      paddingBottom: "100px",
    },
  },
  cardTitle: {
    textDecoration: "none",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1",
    },
    marginTop: "0",
    marginBottom: "3px",
    minHeight: "auto",
    "& a": {
      color: "#3C4858",
      textDecoration: "none",
      fontWeight: "300",
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      "& small": {
        color: "#777",
        fontSize: "65%",
        fontWeight: "400",
        lineHeight: "1",
      },
      marginTop: ".625rem",
      marginBottom: "0.75rem",
      minHeight: "auto",
    },
    color: "#FFFFFF",
  },
  textCenter: {
    textAlign: "center",
  },
  justifyContentCenter: {
    justifyContent: "center !important",
    "& .ingButton": {
      backgroundColor: theme?.palette?.primary?.main || "grey",
      color: theme?.palette?.primary?.contrastText || "white",
    },
  },
  inputAdornment: {
    marginRight: "18px",
  },
  inputAdornmentIcon: {
    color: "#555",
  },
  cardHidden: {
    opacity: "0",
    transform: "translate3d(0, -60px, 0)",
  },
  cardHeader: {
    marginBottom: "20px",
    backgroundColor: theme?.palette?.primary?.main || "grey",
  },
});

export default LoginComponentStyle;
