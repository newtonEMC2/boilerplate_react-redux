import React, { Component } from 'react'
import { connect } from 'react-redux'


const DetailsPage = ({pokemon}) => {
    console.log(pokemon)
    return (
        <div>
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        pokemon: state.pokemon
    }
}

export default connect(mapStateToProps, { })(DetailsPage)