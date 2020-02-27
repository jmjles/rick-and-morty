import React from "react";
import { Card, Typography as Font, Grid } from "@material-ui/core";
export default function Character({ location }) {
  return (
    <Grid item xs={12}>
      <Card>
        <Grid container justify="space-between" alignItems='center' spacing={10}>
          <Grid item>
            <Font variant="h3">{location.name}</Font>
          </Grid>
          <Grid item>
            <Font align="right">Type: {location.type}</Font>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
}
