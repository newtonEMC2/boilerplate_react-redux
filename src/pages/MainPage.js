import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import axios from 'axios'

import { fetchPokemons } from '../actions/pokemons'
import TopHeader from '../components/headers/TopHeader';
import PokemonMainGrid from '../components/grids/PokemonMainGrid';
import Spinner from '../components/spinners/loadSpinner'


class MainPage extends Component {

    componentDidMount() {
        if(this.props.pokemons.length == 0) this.props.fetchPokemons()
    }


    render() {
        return (
            <section id="mainPage">
                {
                    this.props.pokemons.length
                        ?
                        <Fragment>
                            <TopHeader />
                            < PokemonMainGrid />
                        </Fragment>
                        :
                        <Spinner />
                }
            </section>
        )
    }
}

MainPage.propTypes = {
    pokemons: PropTypes.array,
    fetchPokemons: PropTypes.func
}

const mapStateToProps = (state) => {
    return {
        pokemons: state.pokemons
    }
}

export default connect(mapStateToProps, { fetchPokemons })(MainPage)
