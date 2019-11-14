import React, { Component } from 'react'
import { connect } from 'react-redux'


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
        return abilities.map(anAbility => {
            return <li>{anAbility.ability.name}</li>
        })
    }

    return (
        <div className="pokedetails">
            <span className="pokedetails__close">X</span>
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

export default PokemonDetailBox