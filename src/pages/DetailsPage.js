import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchPokemon } from '../actions/pokemons'

import Spinner from '../components/spinners/loadSpinner'
import PokemonDetailBox from '../components/contentBoxes/PokemonDetailBox'


class DetailsPage extends Component {

    componentDidMount() {
        const { name = '' } = this.props.match.params
        this.props.fetchPokemon(name)
    }

    render() {
        const { name = '' } = this.props.match.params

        return (
            <section id="detailsPage" >
                {
                    this.props.pokemon.name == name
                        ?
                        <Fragment>
                            <PokemonDetailBox pokemon={this.props.pokemon} />
                        </Fragment>
                        :
                        <Spinner />
                }
            </section>



        )
    }
}

DetailsPage.propTypes = {
    pokemon: PropTypes.object,
    fetchPokemon: PropTypes.func
}

const mapStateToProps = (state) => {
    return {
        pokemon: state.pokemon
    }
}

export default connect(mapStateToProps, { fetchPokemon })(DetailsPage)