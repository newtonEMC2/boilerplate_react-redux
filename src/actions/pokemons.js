import { FETCH_POKEMONS } from './types'
import axios from 'axios'

export const fetchPokemons = () => {
    return dispatch => {
        axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=1000')
            .then(res => res.data)
            .then(data => {
                dispatch({
                    "type": "FETCH_POKEMONS",
                    "payload": data.results
                })
            })

    }


}

