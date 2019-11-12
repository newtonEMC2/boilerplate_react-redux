import { FETCH_POKEMONS } from '../actions/types'

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_POKEMONS:
            return {
                ...state,
                pokemons: action.payload
              };
        default:
            return state
    }
}


