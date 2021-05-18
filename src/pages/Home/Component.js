import React from "react";

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

import Fb from "components/Fb";

import useStyles from "./styles";
import { Avatar, Button, TextField } from "@material-ui/core";

function Welcome() {
  const matchSmallScreen = useMediaQuery("(max-width: 600px)");
  const classes = useStyles();

  return (
    <>
      <Container maxWidth="sm" className="full-height">
        <Fb justifyCenter alignCenter className={classes.wrapper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography
            variant={matchSmallScreen ? "h4" : "h3"}
            className={classes.title}
          >
            LOG IN
          </Typography>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="Phone"
            label="Phone Number"
            name="Phone"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
          >
            Sign In
          </Button>
        </Fb>
      </Container>
    </>
  );
}

export default Welcome;
