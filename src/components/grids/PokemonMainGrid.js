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
                    this.props.pokemons.map((pokemon, index) => (
                        <PokemonBox name={pokemon.name}></PokemonBox>
                    ))
                }
            </div >

            // <div className="">
            //     {
            //         this.props.books.map((book, index) => (
            //             <div id={'boxItem' + index} className="col-12 col-lg-4 col-xl-3 mb-2" key={book.isbn}>
            //                 <BookItemBox book={book} />
            //             </div>
            //         ))
            //     }
            // </div>


        )
    }
}
function mapStateToProps(state) {
    return {
        pokemons: state.pokemons
    }
}

export default connect(mapStateToProps, {})(PokemonMainGrid)