const headerStyle = (theme) => ({
  appBar: {
    backgroundColor: "#fff",
    boxShadow:
      "0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
    borderBottom: "0",
    marginBottom: "0",
    position: "absolute",
    width: "100%",
    paddingTop: "10px",
    zIndex: "1029",
    color: "#555555",
    border: "0",
    borderRadius: "3px",
    padding: "10px 0",
    transition: "all 150ms ease 0s",
    minHeight: "50px",
    display: "block",
  },
  appLogo: {
    maxHeight: "40px",
    maxWidth: "40px",
  },
  container: {
    ...theme.containerFluid,
    minHeight: "50px",
  },
  flex: {
    flex: 1,
  },
  brandContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  title: {
    ...theme.defaultFont,
    lineHeight: "30px",
    fontSize: "18px",
    borderRadius: "3px",
    textTransform: "none",
    color: "inherit",
    paddingTop: "0.625rem",
    paddingBottom: "0.625rem",
    margin: "0 !important",
    "&:hover,&:focus": {
      background: "transparent",
    },
  },
  sidebarMinimize: {
    float: "left",
    padding: "0 0 0 15px",
    display: "block",
    color: "#555555",
  },
  sidebarMiniIcon: {
    width: "20px",
    height: "17px",
  },
});

export default headerStyle;
