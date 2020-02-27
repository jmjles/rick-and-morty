import React, { useState } from "react";
import { Grid, Container } from "@material-ui/core";
import Character from "./Character";
import Search from "./Search";
export default function CharacterList({ char }) {
  const [search, setSearch] = useState("");
  const exp = new RegExp(search, "gi");
  const filtered = char.filter(({ name }) => name.match(exp));

  return (
    <Container maxWidth="lg" style={{ paddingTop: "66px" }}>
      <Search setSearch={setSearch} content={search} />
      <Grid container justify="space-evenly" spacing={5}>
        {filtered.map(character => (
          <Character char={character} />
        ))}
      </Grid>
    </Container>
  );
}
