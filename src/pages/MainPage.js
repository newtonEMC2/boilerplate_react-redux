import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import axios from 'axios'

import { fetchPokemons } from '../actions/pokemons'
import TopHeader from '../components/headers/TopHeader';


class MainPage extends Component {


    componentDidMount() {
        
        this.props.fetchPokemons()
    }


    render() {
        return (
            <div>
                < TopHeader />

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        pokemons: state.pokemons
    }
}

export default connect(mapStateToProps, { fetchPokemons })(MainPage)
