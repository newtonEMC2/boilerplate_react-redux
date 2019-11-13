import React, { Component } from 'react'

const PokemonBox = (props) => {
    const {name} = props
    return (
        <div>
            <a href={`https://pokeapi.co/api/v2/pokemon${name}?offset=0&limit=1000`}>{name}</a>
        </div>
    )

}

export default PokemonBox
