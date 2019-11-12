import { FETCH_POKEMONS } from '../actions/types'


export default (state=[], action) => {
    switch (action.type) {
        case FETCH_POKEMONS:
            return [
                ...state,
                ...action.payload
            ]
        default:
            return state
    }
}


