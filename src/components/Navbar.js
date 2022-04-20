import React, { useContext } from "react";
import  FavoritesContext  from "../contexts/FavoritesContext";

const Navbar = () => {
const {favoritePokemons} = useContext(FavoritesContext);
  return (
    <nav>
      <div>
        <img
          alt="pokemon logo"
          src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"
          className="navbar-img"
        />
      </div>
      {/* <div>
      {favoritePokemons.length} ❤️  
      </div> */}
    </nav>
  );
};

export default Navbar;
