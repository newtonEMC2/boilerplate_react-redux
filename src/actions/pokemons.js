import { FETCH_POKEMONS, FETCH_POKEMON } from './types'
import axios from 'axios'

export const fetchPokemons = () => {
    return dispatch => {
        axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20')
            .then(res => res.data)
            .then(data => {
                dispatch({
                    "type": FETCH_POKEMONS,
                    "payload": data.results
                })
            })
            .catch(err => console.log(err.name))
    }
}


export const fetchPokemon = (name) => {
    return dispatch => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then(res => res.data)
            .then(data => {
                dispatch({
                    "type": FETCH_POKEMON,
                    "payload": data
                })
            })
            .catch(err => console.log(err.name))
    }
}

