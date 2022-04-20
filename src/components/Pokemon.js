import React, { useContext } from "react";
import FavoritesContext from "../contexts/FavoritesContext";

const Pokemon = (props) => {
  const {favoritePokemons, updateFavoritePokemons} = useContext(FavoritesContext); 
  const { pokemon } = props;
  const onHeartClick = () => {
      updateFavoritePokemons(pokemon.name)
  }
  const heart = favoritePokemons && favoritePokemons.includes(pokemon.onClick) ? "❤️" : "🖤";

  return (
    <div className="pokemon-card">
      <div className="pokemon-image-container">
        <img
          alt={pokemon.name}
          src={pokemon.sprites.front_default}
          className="pokemon-image"
        />
      </div>
      <div className="card-body"> </div>
      <div className="card-top">
        <h3>{pokemon.name}</h3>
        <div>#{pokemon.id}</div>
      </div>
      <div className="card-bottom">
        <div className="pokemon-type">
          {pokemon.types.map((type, index) => {
              return (
              <div key={index} className="pokemon-type-text">{type.type.name}</div>
          )})}
        </div>
        {/* <button className="pokemon-heart-btn" onClick={onHeartClick}>
            {heart}
        </button> */}
      </div>
    </div>
  );
};

export default Pokemon;
