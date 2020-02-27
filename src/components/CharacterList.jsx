import React, { useState } from "react";
import {
  Card,
  Paper,
  Grid,
  Container,
  Typography as Font
} from "@material-ui/core";
import Character from "./Character";
import Search from "./Search";
export default function CharacterList({ char }) {
  const [search, setSearch] = useState("");
  const exp = new RegExp(search, "gi");
  const filtered = char.filter(({ name }) => name.match(exp));

  return (
    <Container maxWidth="lg">
      <Search setSearch={setSearch} content={search} />
      <Grid container justify="space-evenly" spacing={10}>
        {filtered.map(character => (
          <Character char={character} />
        ))}
      </Grid>
    </Container>
  );
}
