import React, { useState } from "react";
import {
  Grid,
  Container,
} from "@material-ui/core";
import Location from "./Location";
import Search from "./Search";
export default function LocationList({ locations }) {
  const [search, setSearch] = useState("");
  const exp = new RegExp(search, "gi");
  const filtered = locations.filter(({ name }) => name.match(exp));

  return (
    <Container maxWidth="lg">
      <Search setSearch={setSearch} content={search} />
      <Grid container direction='row' spacing={2}>
        {filtered.map(location => (
          <Location location={location} />
        ))}
      </Grid>
    </Container>
  );
}
