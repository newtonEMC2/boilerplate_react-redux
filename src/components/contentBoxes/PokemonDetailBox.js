import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const PokemonDetailBox = ({ pokemon }) => {

    const { name, types = [], id, height, abilities = [] } = pokemon

    const sanitize_src = (src) => src.replace("-", "")

    const get_types = (types) => {
        return types.map((aType, index) => {
            let thisType = aType.type.name;
            thisType = (index < types.length - 1) ? thisType + ', ' : thisType + '.';
            return thisType
        })
    }

    const get_abilities = (abilities) => {
        return abilities.map((anAbility, index) => {
            return <li key={index}>{anAbility.ability.name}</li>
        })
    }

    return (
        <div className="pokedetails">
            <Link to={'/pokemon'} className="pokedetails__close">X</Link>
            <div className="pokedetails__main">
                <img className="pokedetails__main-img"
                    src={sanitize_src("http://pokestadium.com/sprites/xy/" + name + ".gif")}
                    alt="pokeimg">
                </img>
                <p className="pokedetails__main-name">{name}</p>
            </div>
            <div className="pokedetails__info">
                <div>
                    <div className="pokedetails__info-properties">
                        <span className="pokedetails__info-label">ID: </span><span>{id}</span>
                    </div>
                    <div className="pokedetails__info-properties">
                        <span className="pokedetails__info-label">TYPE: </span>
                        <span>{get_types(types)}</span>
                    </div>
                    <div className="pokedetails__info-properties">
                        <span className="pokedetails__info-label">HEIGHT: </span><span>{height}</span>
                    </div>
                    <div className="pokedetails__info-properties">
                        <span className="pokedetails__info-label">ABILITIES: </span>
                        <ul className="pokedetails__info-sub">{get_abilities(abilities)}</ul>
                    </div>
                </div>
            </div>

        </div>
    )

}

PokemonDetailBox.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string,
        types: PropTypes. array,
        id: PropTypes.number,
        height: PropTypes.number,
        abilities: PropTypes.array
    })
}

export default PokemonDetailBox