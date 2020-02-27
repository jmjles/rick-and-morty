import React from "react";
import { Paper, Typography as Font, Button, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <Paper square elevation={10} style={styled}>
      <Grid container justify='center' spacing={5}>
        <Grid item>
          <Button component={Link} to="/">
            <Font variant="button">Home</Font>
          </Button>
        </Grid>
        <Grid item>
          <Button component={Link} to="/characters">
            <Font variant="button">Characters</Font>
          </Button>
        </Grid>
        <Grid item>
          <Button component={Link} to="/characters">
            <Font variant="button">Locations</Font>
          </Button>
        </Grid>
        <Grid item>
          <Button component={Link} to="/episodes">
            <Font variant="button">Episodes</Font>
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}
const styled = { position: "fixed", top: 0, width: "100%" };
