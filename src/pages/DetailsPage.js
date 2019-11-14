import React, { Component } from 'react'
import { connect } from 'react-redux'

import PokemonDetailBox from '../components/contentBoxes/PokemonDetailBox'


const DetailsPage = ({ pokemon }) => {
    
    return (
        <section id="detailsPage">
            <PokemonDetailBox pokemon={pokemon} />
        </section>
    )
}

const mapStateToProps = (state) => {
    return {
        pokemon: state.pokemon
    }
}

export default connect(mapStateToProps, {})(DetailsPage)