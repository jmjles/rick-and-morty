import React from "react";
import { Card, Typography as Font, Grid } from "@material-ui/core";
export default function Character({ location }) {
  return (
    <Grid item>
      <Card>
        <Font variant="h3">{location.name}</Font>
        <Font>Type: {location.type}</Font>
      </Card>
    </Grid>
  );
}
