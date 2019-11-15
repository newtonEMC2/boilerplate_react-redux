import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const PokemonBox = ({ name, url, fetchPokemon }) => {

    const sanitize_src = (src) => src.replace("-", "")

    return (
        <Link to={'/pokemon/' + name} className="boxes">
            <img className="boxes__pokeimg"
                src={sanitize_src("http://pokestadium.com/sprites/xy/" + name + ".gif")}>
            </img>
            <div className="boxes__pokename">{name}</div>
        </Link>
    )

}

PokemonBox.propTypes = {
    name: PropTypes.string,
    url: PropTypes.string,
    fetchPokemon: PropTypes.func
}

export default connect(null, {})(PokemonBox)