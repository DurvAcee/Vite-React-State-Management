import { useState } from "react";
import { v4 as uuid } from "uuid";

export default function Emojis() {
    const [emoji, setEmoji] = useState([{id: uuid(), emoji:'😊'}]);
    const emojiArray = ['😊', '😢', '😒', '🤣', '🍇'];
    const addEmo = () => {
        let i = Math.floor(Math.random()*emojiArray.length + 1)
        setEmoji((e)=>(
            [...e, {id: uuid(), emoji:emojiArray[i]}]
        ));
    }

    return (
        <>
            <div>
            <h3> Emojis </h3>
            {emoji.map((e)=>(
                <span key = {e.id} style={{fontSize: '2rem'}}> {e.emoji} </span>
            ))}
            </div>
            <button onClick = {addEmo}> Add New Emoji </button>
        </>
    );
}