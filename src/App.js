import React, { useEffect, useState } from "react";
import axios from "axios";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import CharacterList from "./components/CharacterList";
import LocationList from "./components/LocationList";
function App() {
  const [characters, setCharacters] = useState();
  const [locations, setLocations] = useState();
  const [nextCharLink, setNextCharLink] = useState();
  const [nextLocationLink, setNextLocationLink] = useState();
  const [rick, setRick] = useState();
  const [morty, setMorty] = useState();

  const api = axios.create({ baseURL: "https://rickandmortyapi.com/api/" });
  useEffect(() => {
    (async () => {
      try {
        const {
          data: {
            results,
            info: { next }
          }
        } = await api("character", {
          params: {
            count: 20
          }
        });
        setCharacters(results);
        setNextCharLink(next);
      } catch (er) {
        console.log(er);
      }
    })();
  }, []);
  useEffect(() => {
    (async () => {
      if (nextCharLink) {
        try {
          const {
            data: {
              results,
              info: { next }
            }
          } = await axios(nextCharLink);
          setCharacters(prev => [...prev, ...results]);
          setNextCharLink(next);
        } catch (er) {
          console.log(er);
        }
      }
    })();
  }, [nextCharLink]);

  useEffect(() => {
    if (characters) {
      setRick(characters.filter(({ id }) => id === 1));
      setMorty(characters.filter(({ id }) => id === 2));
    }
  }, [characters]);

  useEffect(() => {
    (async () => {
      try {
        const {
          data: {
            results,
            info: { next }
          }
        } = await api("location");
        setLocations(results);
        setNextLocationLink(next);
      } catch (er) {
        console.log(er);
      }
    })();
  }, []);

  useEffect(() => {
    try {
      if (nextLocationLink) {
        (async () => {
          const {
            data: {
              results,
              info: { next }
            }
          } = await axios(nextLocationLink);
          setLocations(prev => [...prev, ...results]);
          setNextLocationLink(next);
        })();
      }
    } catch (er) {
      console.log(er);
    }
  }, [nextLocationLink]);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route
          path="/characters"
          children={characters ? <CharacterList char={characters} /> : <></>}
        />
        <Route
          path="/locations"
          children={locations ? <LocationList locations={locations} /> : <></>}
        />
        <Route
          path="/"
          children={rick && morty ? <Home rick={rick} morty={morty} /> : <></>}
        />
      </Switch>
    </div>
  );
}

export default App;
