import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
  paper: {
    marginTop: "16px",
    // border: "1px solid red",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: " 40px 16px",
  },
  root: {
    "& .MuiTextField-root": {
      margin: "8px",
    },
  },
  avatar: {
    margin: "8px",
    backgroundColor: "#1565d8",
  },
  form: {
    // border: "1px solid green",
    width: "80%", // Fix IE 11 issue.
    marginTop: "30px",
  },
  submit: {
    width: "50%",
    marginTop: "30px",
    marginLeft: "25%",
  },
}));
