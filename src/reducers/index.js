import {combineReducers } from 'redux'

import pokemons from './pokemons'
import pokemon from './pokemon'

const rootReducer = combineReducers({
    pokemons,
    pokemon
})

export default rootReducer