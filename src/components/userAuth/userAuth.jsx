/* eslint-disable no-unused-vars */
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Avatar, Button, Paper, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import useStyles from "./styles";
import Input from "../formInput/Input";

const initialState = {
  email: "",
  password: "",
};

const UserAuth = () => {
  // const navigate = useNavigate();
  const classes = useStyles();
  const [formData, setFormData] = useState(initialState);
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // dispatch(signin(formData, navigate));
  };

  // Allows us to mutate all states at once and not stress over each of them independently
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const passRequest = () => {};

  return (
    <Container component="main" maxWidth="sm">
      <Paper className={classes.paper} elevation={2}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {"Welcome back!"}
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Input
              name="email"
              label="Email Address"
              handleChange={handleChange}
              type="email"
            />
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />
          </Grid>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button onClick={passRequest}>{"Forgot password?"}</Button>
            </Grid>
          </Grid>
          <Button
            style={{
              backgroundColor: "#30AE4D",
            }}
            type="submit"
            variant="contained"
            className={classes.submit}
          >
            {"Sign In"}
          </Button>
          {/* <Grid container justify="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                {isSignup
                  ? "Already have an account? Sign in"
                  : "Don't have an account? Sign Up"}
              </Button>
            </Grid>
          </Grid> */}
        </form>
      </Paper>
    </Container>
  );
};

export default UserAuth;
