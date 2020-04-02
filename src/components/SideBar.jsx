import React from "react";
import { Grid, Typography as Font } from "@material-ui/core";
import { Link } from "react-router-dom";
export default function SideBar() {
  return (
    <Grid
      container
      direction="column"
      component="aside"
      className="SideBarRoot"
    >
      <Grid item>
        <Font component={Link} to='/'>
          Home
        </Font>
      </Grid>
      <Grid item>
        <Font component={Link} to="/characters">
          Characters
        </Font>
      </Grid>
      <Grid item>
        <Font component={Link} to="/locations">
          Location
        </Font>
      </Grid>
      <Grid item>
        <Font component={Link} to="/episodes">
          Characters
        </Font>
      </Grid>
      <Grid item>
        <Font component="a" href="https://jesusmj.com">
          Back Home
        </Font>
      </Grid>
    </Grid>
  );
}
