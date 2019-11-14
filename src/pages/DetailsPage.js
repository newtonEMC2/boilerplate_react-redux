import React, { Component } from 'react'
import { connect } from 'react-redux'


const DetailsPage = ({ pokemon }) => {
    const { weight } = pokemon
    return (
        <section id="detailsPage">
            <div className="detailsPokemonBox">

            </div>
            <p>{weight}</p>
        </section>
    )
}
const mapStateToProps = (state) => {
    return {
        pokemon: state.pokemon
    }
}

export default connect(mapStateToProps, {})(DetailsPage)