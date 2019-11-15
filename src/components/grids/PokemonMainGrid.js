import React, { Component } from 'react'
import { connect } from 'react-redux'

import PokemonBox from '../contentBoxes/PokemonBox'

class PokemonMainGrid extends Component {

    render() {
        return (

            < div id="grid" className="" >

                {
                    this.props.pokemons.map(({ name, url }, index) => (
                        <PokemonBox key={name} name={name} url={url}></PokemonBox>
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