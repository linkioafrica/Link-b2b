import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
  paper: {
    marginTop: "16px",
    marginBottom: "16px",
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
    width: "85%", // Fix IE 11 issue.
    marginTop: "30px",
  },
  submit: {
    width: "50%",
    marginTop: "30px",
    marginLeft: "25%",
  },
}));
