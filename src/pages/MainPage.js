import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import axios from 'axios'

import { fetchPokemons } from '../actions/pokemons'
import TopHeader from '../components/headers/TopHeader';
import PokemonMainGrid from '../components/grids/PokemonMainGrid'


class MainPage extends Component {


    componentDidMount() {
        this.props.fetchPokemons()
    }


    render() {
        return (
            <section>
                <TopHeader />
                {this.props.pokemons.length ? < PokemonMainGrid /> : <p>loading</p>}
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        pokemons: state.pokemons
    }
}

export default connect(mapStateToProps, { fetchPokemons })(MainPage)
