import React, { Component } from 'react'
import { connect } from 'react-redux'


const DetailsPage = ({pokemon}) => {
    const {weight} = pokemon
    return (
        <div>
            <p>{weight}</p>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        pokemon: state.pokemon
    }
}

export default connect(mapStateToProps, { })(DetailsPage)