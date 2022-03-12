import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
  paper: {
    // border: "1px solid red",
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
  },
  form: {
    // border: "1px solid green",
    width: "85%", // Fix IE 11 issue.
    marginTop: "30px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "15px",
  },
  submit: {
    width: "50%",
    // textTransform: "none",
  },
}));
