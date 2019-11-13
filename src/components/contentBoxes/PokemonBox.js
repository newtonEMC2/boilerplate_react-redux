import React, { Component } from 'react'
import { fetchPokemon } from '../../actions/pokemons'
import { connect } from 'react-redux'


const PokemonBox = ({name, fetchPokemon}) => {

    const onclick = () => {
        fetchPokemon(name)
    }

    return (
        <div onClick={onclick}>
            <div>{name}</div>
        </div>
    )

}

export default connect(null, { fetchPokemon })(PokemonBox)