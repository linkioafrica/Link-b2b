import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
  paper: {
    marginTop: "16px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "16px",
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
    width: "100%", // Fix IE 11 issue.
    marginTop: "24px",
  },
  submit: {
    marginTop: "20px",
  },
}));
