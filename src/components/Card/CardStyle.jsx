const CardStyle = (theme) => ({
  card: {
    border: "0",
    marginBottom: "30px",
    marginTop: "30px",
    borderRadius: "6px",
    color: "rgba(0, 0, 0, 0.87)",
    background: "#fff",
    width: "100%",
    boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.14)",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    minWidth: "0",
    wordWrap: "break-word",
    fontSize: ".875rem",
  },
  cardAnimation: {
    transform: "translate3d(0, 0, 0)",
    transition: "all 300ms linear",
  },
  cardHidden: {
    opacity: "0",
    transform: "translate3d(0, -60px, 0)",
  },
  cardHeader: {
    padding: "0.75rem 1.25rem",
    marginBottom: "0",
    borderBottom: "none",
    background: "transparent",
    zIndex: "3 !important",
    "&:first-child": {
      borderRadius: "calc(.25rem - 1px) calc(.25rem - 1px) 0 0",
    },
  },
  cardHeaderIcon: {
    background: "transparent",
    boxShadow: "none",
    color: "#FFFFFF",
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      width: "33px",
      height: "33px",
      textAlign: "center",
      lineHeight: "33px",
    },
    "& svg": {
      width: "24px",
      height: "24px",
      textAlign: "center",
      lineHeight: "33px",
      margin: "5px 4px 0px",
    },
  },
  cardIcon: {
    "&$primaryColorCardHeader": {
      borderRadius: "3px",
      padding: "15px",
      marginTop: "-20px",
      marginRight: "15px",
      float: "left",
    },
  },
  primaryColorCardHeader: {
    color: "#FFFFFF",
    background: theme?.palette?.default?.main || "#3f51b5",
    borderRadius: "3px",
    margin: "-20px 15px 15px 15px",
  },
  cardBody: {
    padding: "0.9375rem 20px",
    flex: "1 1 auto",
    WebkitBoxFlex: "1",
    position: "relative",
  },
  cardFooter: {
    padding: "0",
    paddingTop: "10px",
    margin: "0 15px 10px",
    borderRadius: "0",
    justifyContent: "space-between",
    alignItems: "center",
    display: "flex",
    backgroundColor: "transparent",
    border: "0",
  },
});

export default CardStyle;
