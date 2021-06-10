const ButtonStyle = (theme) => ({
  button: {
    minHeight: "auto",
    minWidth: "auto",
    backgroundColor: theme?.palette?.default?.main || "#3f51b5",
    color: theme?.palette?.default?.contrastText || "white",
    boxShadow:
      "0 2px 2px 0 rgba(153, 153, 153, 0.14), 0 3px 1px -2px rgba(153, 153, 153, 0.2), 0 1px 5px 0 rgba(153, 153, 153, 0.12)",
    border: "none",
    borderRadius: "3px",
    position: "relative",
    padding: "12px 30px",
    margin: ".3125rem 1px",
    fontSize: "12px",
    fontWeight: "400",
    textTransform: "uppercase",
    letterSpacing: "0",
    willChange: "box-shadow, transform",
    transition:
      "box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
    lineHeight: "1.42857143",
    textAlign: "center",
    whiteSpace: "nowrap",
    verticalAlign: "middle",
    touchAction: "manipulation",
    cursor: "pointer",
    "&:focus,&:hover": {
      opacity: 0.8,
      backgroundColor: theme?.palette?.default?.main || "#3f51b5",
    },
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      position: "relative",
      display: "inline-block",
      top: "0",
      marginTop: "-1em",
      marginBottom: "-1em",
      fontSize: "1.1rem",
      marginRight: "4px",
      verticalAlign: "middle",
    },
    "& svg": {
      position: "relative",
      display: "inline-block",
      top: "0",
      width: "18px",
      height: "18px",
      marginRight: "4px",
      verticalAlign: "middle",
    },
    "&$justIcon": {
      "& .fab,& .fas,& .far,& .fal,& .material-icons": {
        marginTop: "0px",
        position: "absolute",
        width: "100%",
        transform: "none",
        left: "0px",
        top: "0px",
        height: "100%",
        lineHeight: "41px",
        fontSize: "20px",
      },
    },
  },
  fullWidth: {
    width: "100%",
  },
  primary: {
    backgroundColor: theme?.palette?.default?.main || "#3f51b5",
    color: theme?.palette?.default?.contrastText || "white",
    "&:focus,&:hover": {
      opacity: 0.9,
      backgroundColor: theme?.palette?.default?.main || "#3f51b5",
    },
  },
  secondary: {
    backgroundColor: theme?.palette?.secondary?.main || "#46ce90",
    color: theme?.palette?.secondary?.contrastText || "white",
    "&:focus,&:hover": {
      opacity: 0.9,
      backgroundColor: theme?.palette?.secondary?.main || "#46ce90",
    },
  },
  success: {
    backgroundColor: theme?.palette?.success?.main || "lightseagreen",
    color: theme?.palette?.success?.contrastText || "white",
    "&:focus,&:hover": {
      opacity: 0.9,
      backgroundColor: theme?.palette?.success?.main || "lightseagreen",
    },
  },
  error: {
    backgroundColor: theme?.palette?.error?.main || "orangered",
    color: theme?.palette?.error?.contrastText || "white",
    "&:focus,&:hover": {
      opacity: 0.9,
      backgroundColor: theme?.palette?.error?.main || "orangered",
    },
  },
  simple: {
    "&,&:focus,&:hover": {
      color: theme?.palette?.default?.main || "#3f51b5",
      background: "transparent",
      boxShadow: "none",
    },
    "&$primary": {
      "&,&:focus,&:hover,&:visited": {
        color: theme?.palette?.default?.main || "#3f51b5",
      },
    },
    "&$secondary": {
      "&,&:focus,&:hover,&:visited": {
        color: theme?.palette?.secondary?.main || "#46ce90",
      },
    },
    "&$success": {
      "&,&:focus,&:hover,&:visited": {
        color: theme?.palette?.success?.main || "lightseagreen",
      },
    },
    "&$error": {
      "&,&:focus,&:hover,&:visited": {
        color: theme?.palette?.error?.main || "orangered",
      },
    },
  },
  transparent: {
    "&,&:focus,&:hover": {
      color: "inherit",
      background: "transparent",
      boxShadow: "none",
    },
  },
  disabled: {
    opacity: "0.65",
    pointerEvents: "none",
  },
  lg: {
    padding: "1.125rem 2.25rem",
    fontSize: "0.875rem",
    lineHeight: "1.333333",
    borderRadius: "0.2rem",
  },
  sm: {
    padding: "0.40625rem 1.25rem",
    fontSize: "0.6875rem",
    lineHeight: "1.5",
    borderRadius: "0.2rem",
  },
  round: {
    borderRadius: "30px",
  },
  justIcon: {
    paddingLeft: "12px",
    paddingRight: "12px",
    fontSize: "20px",
    height: "41px",
    minWidth: "41px",
    width: "41px",
    "& .fab,& .fas,& .far,& .fal,& svg,& .material-icons": {
      marginRight: "0px",
    },
    "&$lg": {
      height: "57px",
      minWidth: "57px",
      width: "57px",
      lineHeight: "56px",
      "& .fab,& .fas,& .far,& .fal,& .material-icons": {
        fontSize: "32px",
        lineHeight: "56px",
      },
      "& svg": {
        width: "32px",
        height: "32px",
      },
    },
    "&$sm": {
      height: "30px",
      minWidth: "30px",
      width: "30px",
      "& .fab,& .fas,& .far,& .fal,& .material-icons": {
        fontSize: "17px",
        lineHeight: "29px",
      },
      "& svg": {
        width: "17px",
        height: "17px",
      },
    },
  },
});

export default ButtonStyle;
