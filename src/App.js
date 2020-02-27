import React, { useEffect, useState } from "react";
import axios from "axios";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import CharacterList from './components/CharacterList'
function App() {
  const [characters, setCharacters] = useState();
  const [locations, setLocations] = useState();
  const [nextCharLink, setNextCharLink] = useState();
  const [rick,setRick] = useState()
  const [morty,setMorty] = useState()
  useEffect(() => {
    (async () => {
      try {
        const {
          data: {
            results,
            info: { next }
          }
        } = await axios("https://rickandmortyapi.com/api/character");
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
    if(characters){
    setRick(characters.filter(({ id }) => id === 1));
    setMorty(characters.filter(({ id }) => id === 2));
    }
  }, [characters]);
  useEffect(() => {
    const getLocations = async () => {
      let {
        data: {
          results,
          info: { next }
        }
      } = await axios("https://rickandmortyapi.com/api/location");
      setLocations(results);
      while (next) {
        let { data } = await axios(next);
        next = data.info.next;
        results.map(location => {
          setLocations(prev => [...prev, location]);
        });
      }
    };

    getLocations();
  }, []);
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route
          path="/characters"
          children={characters ? <CharacterList char={characters}/> : <></>}
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
