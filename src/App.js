import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [characters, setCharacters] = useState([]);
  const [locations, setLocations] = useState([]);
  useEffect(() => {
    const getChar = async () => {
      let {
        data: {
          results,
          info: { next }
        }
      } = await axios("https://rickandmortyapi.com/api/character");
      setCharacters(results);
      while (next) {
        let { data } = await axios(next);
        next = data.info.next;
        results.map(char => {
          setCharacters(prev => [...prev, char]);
        });
      }
    };

    getChar();
  }, []);

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
  },[]);
  return <div className="App"></div>;
}

export default App;
