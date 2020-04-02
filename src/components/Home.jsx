import React from "react";
import {
  Typography as Font,
  Container,
  Grid
} from "@material-ui/core";
import Character from "./Character";
export default function Home({ rick, morty }) {
  return (
    <Container component="section" maxWidth="lg" style={{marginTop:'99px'}}>
      <Font variant='h2' align='center'>Rick & Morty Character Sitings</Font>
      <hr/>
      <Grid container justify= 'space-around'>
        <Character char={rick[0]} xs={10}/>
        <Character char={morty[0]} xs={10} />
      </Grid>
    </Container>
  );
}
