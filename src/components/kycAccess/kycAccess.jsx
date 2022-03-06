/* eslint-disable no-unused-vars */
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Button, Paper, Typography } from "@mui/material";

import useStyles from "./styles";
import Input from "../formInput/Input";

const initialState = {
  name: "",
  email: "",
};

const KycAccess = () => {
  // const navigate = useNavigate();
  const classes = useStyles();
  const [formData, setFormData] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();

    // dispatch(signin(formData, navigate));
  };

  // Allows us to mutate all states at once and not stress over each of them independently
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Container component="main" maxWidth="sm">
      <Paper className={classes.paper} elevation={2}>
        <Typography component="h2" variant="h4">
          {"Request KYB access"}
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Input
              name="name"
              label="Business Name"
              handleChange={handleChange}
              type="text"
            />
            <Input
              name="email"
              label="Email Address"
              handleChange={handleChange}
              type="email"
            />
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {"Continue"}
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default KycAccess;
