import React, { Component } from 'react'
import { fetchPokemon } from '../../actions/pokemons'
import { connect } from 'react-redux'


const PokemonBox = ({name, url, fetchPokemon}) => {

    const onclick = () => {
        fetchPokemon(name)
    }

    return (
        <div className="boxes" onClick={onclick}>
            <img src={"http://pokestadium.com/sprites/xy/" + name + ".gi"}></img>
            <div>{name}</div>
        </div>
    )

}

export default connect(null, { fetchPokemon })(PokemonBox)