import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Emoji from './Lab3Emoji'

function App() {
    const [count, setCount] = useState(50)
  
    const spiderman = { name: 'Spider-Man', alterEgo: 'Peter Parker', catchPhrase: 'With great power comes great responsibility.' };
    const spideyJSX = (<>
  <h3>{spiderman.name}</h3>
  <blockquote>{spiderman.catchPhrase}</blockquote><cite>{spiderman.alterEgo}</cite>
  </>);

return (
    <div className="EmojiChanger componentBox">
        Current Emoji: {emoji}
        <button onClick={() => handleChangeMood('😴')}>Stay Up Late</button>
        <button onClick={() => handleHearJoke('🤣')}>Hear Joke</button>
    </div>
)
}

export default App