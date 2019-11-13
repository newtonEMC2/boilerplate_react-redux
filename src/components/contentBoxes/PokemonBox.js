import React, { Component } from 'react'
import { fetchPokemon } from '../../actions/pokemons'
import { connect } from 'react-redux'


const PokemonBox = ({name, url, fetchPokemon}) => {

    const onclick = () => {
        fetchPokemon(name)
    }

    return (
        <div className="boxes" onClick={onclick}>
            <img className="boxes__pokeimg" src={"http://pokestadium.com/sprites/xy/" + name + ".gif"}></img>
            <div className="boxes__pokename">{name}</div>
        </div>
    )

}

export default connect(null, { fetchPokemon })(PokemonBox)