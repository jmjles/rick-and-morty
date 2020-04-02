import React from "react";
import { Card, Typography as Font, Grid } from "@material-ui/core";
export default function Character({ char }) {
  return (
    <Grid item md={4} sm={5} xs={12} className='CharacterRoot'>
      <Card>
        <Font variant="h3" align="center">
          {char.name}
        </Font>
        <img src={char.image} alt={char.name} style={{ width: "100%" }} />
        <Grid container justify="space-around">
          <Grid item >
            <Font>Gender: </Font>
          </Grid>
          <Grid item>
            <Font>{char.gender}</Font>
          </Grid>
        </Grid>
        <Grid container justify="space-around">
          <Grid item>
            <Font>Species:</Font>
          </Grid>
          <Grid item>
            <Font>{char.species}</Font>
          </Grid>
        </Grid>
        <Grid container justify="space-around">
          <Grid item>
            <Font>Status: </Font>
          </Grid>
          <Grid item>
            <Font>{char.status}</Font>
          </Grid>
        </Grid>
        <Grid container justify="space-around">
          <Grid item>
            <Font>Origin: </Font>
          </Grid>
          <Grid item>
            <Font>{char.origin.name}</Font>
          </Grid>
        </Grid>
        <Grid container justify="space-around">
          <Grid item>
            <Font>Last Seen: </Font>
          </Grid>
          <Grid item>
            <Font>{char.location.name}</Font>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
}
