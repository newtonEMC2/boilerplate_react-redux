import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import PokemonBox from '../contentBoxes/PokemonBox'

class PokemonMainGrid extends Component {

    render() {
        console.log(this.props.pokemons)
        return (

            < div className="" >

                {
                    this.props.pokemons.map(({ name }, index) => (
                        <PokemonBox key={name} name={name}></PokemonBox>
                    ))
                }
            </div >

        )
    }
}
const mapStateToProps = (state) => {
    return {
        pokemons: state.pokemons
    }
}

export default connect(mapStateToProps, {})(PokemonMainGrid)