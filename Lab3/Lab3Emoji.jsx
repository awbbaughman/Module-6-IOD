import { useState } from "react";

function Lab3Emoji() {
    const [emoji, changeMood] = useState('😀');

const handleChangeMood = () => {
    changeMood('😴')
};

const handleHearJoke = () => {
    changeMood('🤣')
};

return (
    <div className="Lab3Emoji componentBox">
        Current Emoji: {emoji}
        <button onClick={() => handleChangeMood('😴')}>Stay Up Late</button>
        <button onClick={() => handleHearJoke('🤣')}>Hear Joke</button>
    </div>
)

}

export default Lab3Emoji;

/*
import { useState } from "react";

function Emoji() {

    const [emoji, setEmoji] =  useState('😀');

    const handleSwitchEmoji() => {
    let newEmoji = emoji === '😀' ? '😴' : '😀';
    setEmoji(newEmoji)
}

return (
    <div className="Emoji componentBox">
    Emoji: {emoji}
    <button onClick={handleSwitchEmoji}>Switch Emoji</button>
)
}
*/