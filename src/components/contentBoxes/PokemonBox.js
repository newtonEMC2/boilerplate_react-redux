import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'


const PokemonBox = ({name, url, fetchPokemon}) => {

    const sanitize_src = (src) => src.replace("-", "")

    return (
        <Link to={'/pokemon/' + name} className="boxes" onClick={onclick}>
            <img className="boxes__pokeimg" 
                 src={sanitize_src("http://pokestadium.com/sprites/xy/" + name + ".gif")}>
            </img>
            <div className="boxes__pokename">{name}</div>
        </Link>
    )

}

export default connect(null, { })(PokemonBox)