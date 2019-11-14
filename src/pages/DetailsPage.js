import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPokemon } from '../actions/pokemons'


import PokemonDetailBox from '../components/contentBoxes/PokemonDetailBox'


class DetailsPage extends Component {
    
    componentDidMount() {
        const { name } = this.props.match.params
        this.props.fetchPokemon(name)
    }

    render() {
        return (
            <section id="detailsPage" >
                <PokemonDetailBox pokemon={this.props.pokemon} />
            </section>
        )
    }



}

const mapStateToProps = (state) => {
    return {
        pokemon: state.pokemon
    }
}

export default connect(mapStateToProps, { fetchPokemon })(DetailsPage)