import React,{useState} from "react";
import {
  Card,
  Paper,
  Grid,
  Container,
  Typography as Font
} from "@material-ui/core";
import Character from "./Character";
export default function CharacterList({char}) {
    const [characters,setCharacters] = useState(char)
  return (
      <Container maxWidth='lg'>
      <Grid container justify='space-evenly' spacing={10}>
            {
                characters.map(character=>(
                    <Character char={character}/>
                ))
            }
      </Grid>
      </Container>

  );
}
