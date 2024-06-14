import { useState } from "react";

export default function Emojis() {
    const [emoji, setEmoji] = useState(['😊']);
    const emojiArray = ['😊', '😢', '😒', '🤣', '🍇'];
    const addEmo = () => {
        let i = Math.floor(Math.random()*emojiArray.length + 1)
        setEmoji((e)=>(
            [...e, emojiArray[i]]
        ));
    }

    return (
        <>
            <div>
            <h3> Emojis </h3>
            {emoji.map((e)=>(
                <span style={{fontSize: '2rem'}}> {e} </span>
            ))}
            </div>
            <button onClick = {addEmo}> Add New Emoji </button>
        </>
    );
}