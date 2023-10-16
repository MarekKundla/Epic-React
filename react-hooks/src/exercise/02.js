// useEffect: persistent state
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'

function Greeting({ initialName = '' }) {
    // 🐨 initialize the state to the value from localStorage
    // 💰 window.localStorage.getItem('name') ?? initialName
    const [name, setName] = React.useState(window.localStorage.getItem('name') ?? initialName)

    // 🐨 Here's where you'll use `React.useEffect`.
    // The callback should set the `name` in localStorage.
    // 💰 window.localStorage.setItem('name', name)

    React.useEffect(() => {
        window.localStorage.setItem('name', name)
    })

    function handleChange(event) {
        setName(event.target.value)
    }

    return (
        <div>
            <form>
                <label htmlFor="name">Name: </label>
                <input value={name} onChange={handleChange} id="name" />
            </form>
            {name ? <strong>Hello {name}</strong> : 'Please type your name'}
        </div>
    )
}

// Extra Credit 1

// const [name, setName] = React.useState(() => window.localStorage.getItem('name') ?? initialName)



// Extra Credit 2

// React.useEffect(() => {
//     window.localStorage.setItem('name', name)
// }, [name])



// Extra Credit 3

// function useLocalStorageState (key, defaultValue = ') {
//     const [state, setState] = React.useState(() => window.localStorage.getItem(key) ?? defaultValue)

//     React.useEffect(() => {
//         window.localStorage.setItem(key, state)
//     }, [key, state])

//     return [state, setState]
// }

// function Greeting({ initialName = '' }) {
//     const [name, setName] = useLocalStorageState('name', initialName)
// }



// Extra Credit 4

// function useLocalStorageState (key, defaultValue = ') {
//     const [state, setState] = React.useState(() => {
//     const valueInLocalStorage = window.localStorage.getItem(key)
//     if (valueInLocalStorage) {
//         return JSON.parse(valueInLocalStorage)
//     }
//     return defaultValue
// })

//     React.useEffect(() => {
//         window.localStorage.setItem(key, JSON.stringify(state))
//     }, [key, state])

//     return [state, setState]
// }

// function Greeting({ initialName = '' }) {
//     const [name, setName] = useLocalStorageState('name', initialName)
// }

function App() {
    return <Greeting />
}

export default App
