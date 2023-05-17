import React, { useState, useEffect } from "react";
import axios from "axios";

function PokemonList({ searchTerm = "" }) {
  const [pokemons, setPokemons] = useState([]);
  const [setFilteredPokemons] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=100");
      setPokemons(res.data.results);
      setFilteredPokemons(res.data.results);
    } catch (error) {
      console.error("Error fetching Pokemon data:", error);
    }
  }

    const listFiltered = pokemons.filter((pokemon) =>
      pokemon.name.includes(searchTerm)
    );


  return (
    <div>
      <h1>Pokémon List</h1>
      <ul>
        {listFiltered.map((pokemon) => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default PokemonList;
