// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({ onSubmitUsername }) {
    // 🐨 add a submit event handler here (`handleSubmit`).
    // 💰 Make sure to accept the `event` as an argument and call
    // `event.preventDefault()` to prevent the default behavior of form submit
    // events (which refreshes the page).
    // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
    //
    // 🐨 get the value from the username input (using whichever method
    // you prefer from the options mentioned in the instructions)
    // 💰 For example: event.target.elements[0].value
    // 🐨 Call `onSubmitUsername` with the value of the input

    // 🐨 add the onSubmit handler to the <form> below

    // 🐨 make sure to associate the label to the input.
    // to do so, set the value of 'htmlFor' prop of the label to the id of input

    const handleSubmit = (event) => {
        event.preventDefault();

        const username = event.target.elements[0].value // event.target.elements.usernameInput.value

        onSubmitUsername(username)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username:</label>
                <input id='usernameInput' type="text" />
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}

function App() {
    const onSubmitUsername = username => alert(`You entered: ${username}`)
    return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

// Extra Credit 1

// function UsernameForm({ onSubmitUsername }) {
//     const usernameInput = React.useRef()

//     const handleSubmit = (event) => {
//         event.preventDefault();

//         const username = usernameInput.current.value

//         onSubmitUsername(username)
//     }

//     return (
//         <form onSubmit={handleSubmit}>
//             <div>
//                 <label>Username:</label>
//                 <input ref={usernameInput} id='usernameInput' type="text" />
//             </div>
//             <button type="submit">Submit</button>
//         </form>
//     )
// }

// Extra Credit 2

// function UsernameForm({ onSubmitUsername }) {
//     const [error, setError] = React.useState(null)

//     const handleSubmit = (event) => {
//         event.preventDefault();

//         const username = event.target.elements[0].value

//         onSubmitUsername(username)
//     }

//     const handleChange = (event) => {
//         const { value } = event.target
//         const isLowerCase = value === value.toLowerCase()
//         setError(isLowerCase ? null : 'Username must be lowercase')
//     }

//     return (
//         <form onSubmit={handleSubmit}>
//             <div>
//                 <label>Username:</label>
//                 <input id='usernameInput' type="text" onChange={handleChange} />
//             </div>
//             <div style={{ color: 'red' }}>{error}</div>
//             <button disabled={Boolean(error)} type="submit">Submit</button>
//         </form>
//     )
// }

// Extra Credit 3

// function UsernameForm({ onSubmitUsername }) {
//      const [username, setUsername] = React.useState('')

//     const handleSubmit = (event) => {
//         event.preventDefault();

//         onSubmitUsername(username)
//     }

//     const handleChange = (event) => {
//         const { value } = event.target
//         setUsername(value.toLowerCase())
//     }

//     return (
//         <form onSubmit={handleSubmit}>
//             <div>
//                 <label>Username:</label>
//                 <input id='usernameInput' type="text" onChange={handleChange} value={username} />
//             </div>
//             <button disabled={Boolean(error)} type="submit">Submit</button>
//         </form>
//     )
// }

export default App
