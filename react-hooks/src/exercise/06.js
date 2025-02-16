// useEffect: HTTP requests
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'
// 🐨 you'll want the following additional things from '../pokemon':
// fetchPokemon: the function we call to get the pokemon info
// PokemonInfoFallback: the thing we show while we're loading the pokemon info
// PokemonDataView: the stuff we use to display the pokemon info
import { fetchPokemon, PokemonInfoFallback, PokemonDataView, PokemonForm } from '../pokemon'

function PokemonInfo({ pokemonName }) {
    // 🐨 Have state for the pokemon (null)
    // 🐨 use React.useEffect where the callback should be called whenever the
    // pokemon name changes.
    // 💰 DON'T FORGET THE DEPENDENCIES ARRAY!
    // 💰 if the pokemonName is falsy (an empty string) then don't bother making the request (exit early).
    // 🐨 before calling `fetchPokemon`, clear the current pokemon state by setting it to null.
    // (This is to enable the loading state when switching between different pokemon.)
    // 💰 Use the `fetchPokemon` function to fetch a pokemon by its name:
    //   fetchPokemon('Pikachu').then(
    //     pokemonData => {/* update all the state here */},
    //   )
    // 🐨 return the following things based on the `pokemon` state and `pokemonName` prop:
    //   1. no pokemonName: 'Submit a pokemon'
    //   2. pokemonName but no pokemon: <PokemonInfoFallback name={pokemonName} />
    //   3. pokemon: <PokemonDataView pokemon={pokemon} />

    // 💣 remove this
    // return 'TODO'

    const [pokemon, setPokemon] = React.useState('')

    React.useEffect(() => {
        if (!pokemonName) {
            return
        }

        setPokemon(null)
        fetchPokemon(pokemonName).then(pokemonData => {
            setPokemon(pokemonData)
        })
    }, [pokemonName])

    if (!pokemonName) {
        return 'Submit a pokemon'
    } else if (!pokemon) {
        return <PokemonInfoFallback name={pokemonName} />
    } else {
        return <PokemonDataView pokemon={pokemon} />
    }
}

function App() {
    const [pokemonName, setPokemonName] = React.useState('')

    function handleSubmit(newPokemonName) {
        setPokemonName(newPokemonName)
    }

    return (
        <div className="pokemon-info-app">
            <PokemonForm pokemonName={pokemonName} onSubmit={handleSubmit} />
            <hr />
            <div className="pokemon-info">
                <PokemonInfo pokemonName={pokemonName} />
            </div>
        </div>
    )
}

export default App


// Extra Credit 1

// const [error, setError] = React.useState('')

// React.useEffect(() => {
//     if (!pokemonName) {
//         return
//     }

//     setError('')
//     setPokemon(null)
//     fetchPokemon(pokemonName)
//         .then(pokemonData => setPokemon(pokemonData))
//         .catch(error => setError(error))
// }, [pokemonName])

// if(error) {
//     return (
//         <div role="alert">
//             There was an error: <pre style={{ whiteSpace: 'normal' }}>{error.message}</pre>
//         </div>
//     )
// } else if(!pokemonName) {}



// Extra Credit 2

// const [status, setStatus] = React.useState('idle')

// React.useEffect(() => {
//     if (!pokemonName) {
//         return
//     }

//     setStatus('pending')
//     fetchPokemon(pokemonName)
//         .then(pokemonData => setPokemon(pokemonData), setStatus('resolved'))
//         .catch(error => setError(error), setStatus('rejected'))
// }, [pokemonName])

// if (status === 'idle') {
//     return 'Submit a pokemon'
// } else if (status === 'pending') {
//     return <PokemonInfoFallback name={pokemonName} />
// } else if (status === 'rejected') {
//     return (
//         <div role="alert">
//             There was an error: <pre style={{ whiteSpace: 'normal' }}>{error.message}</pre>
//         </div>
//     )
// } else if (status === 'resolved') {
//     return <PokemonDataView pokemon={pokemon} />
// }



// Extra Credit 3

// const [{status, pokemon, error}, setState] = React.useState({
//     status: 'idle',
//     pokemon: null,
//     error: null,
// })

// React.useEffect(() => {
//     if (!pokemonName) {
//         return
//     }

//     setState({status: 'pending'})
//     setStatus('pending')
//     fetchPokemon(pokemonName)
//         .then(pokemonData => setState({pokemonData, status: 'resolved'}))
//         .catch(error => setState({error, status: 'rejected'}))
// }, [pokemonName])
