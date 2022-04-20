import React from "react";
import { useState } from "react";
import { searchPokemon } from "../api"

const Searchbar = (props) => {
    const [search, setSearch] = useState("dito")
    const {onSearch} = props
    const [pokemon, setPokemon] = useState()
    
    const onChangeHandler = (e) => {
        setSearch(e.target.value)
        if(e.target.value === 0) {
            onSearch(undefined)
        }
    }
    const onButtonClickHandler = () => {
        onSearch(search)
    }
    
    return (
        <div className="searchbar-container">
            <div className="searchbar">
                <input placeholder="Search for a pokemon" onChange={onChangeHandler}></input>
            </div>
            <div className="searchbar-btn"><button onClick={onButtonClickHandler}>Search</button>
            </div>
            
        </div>
    )
}

export default Searchbar