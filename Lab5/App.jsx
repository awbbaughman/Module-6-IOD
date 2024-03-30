import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './style.css'
import BigCats from './BigCats'
import AddCatForm from './AddCatForm'


function App() {
  const [count, setCount] = useState(50)

  const spiderman = { name: 'Spider-Man', alterEgo: 'Peter Parker', catchPhrase: 'With great power comes great responsibility.' };
  const spideyJSX = (<>
<h3>{spiderman.name}</h3>
<blockquote>{spiderman.catchPhrase}</blockquote><cite>{spiderman.alterEgo}</cite>
</>);

const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Kitty',
      avatarUrl: 'https://placekitten.com/g/64/64'
    }
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {spideyJSX}<br />
      <BigCats/>
      <AddCatForm/>
    </>
  )
}

export default App
