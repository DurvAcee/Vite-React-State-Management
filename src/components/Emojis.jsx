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

    const deleteEmo = (id) => {
        setEmoji((e)=>e.filter((i)=>i.id !== id));
    }

    const updateEmo = () => {
        setEmoji((emoji)=>(
            emoji.map(e=> {
                return {...e, emoji: '❤️'}
            })
        ))
    }

    const clear = () => {
        setEmoji([]);
    }

    return (
        <>
            <div>
            <h3> Emojis </h3>
            {emoji.map((e)=>(
                <span key = {e.id} style={{fontSize: '2rem'}} onClick={()=> deleteEmo(e.id)}> {e.emoji} </span>
            ))}

            {emoji.length === 0 && <h4> Emoji Not Found!</h4>
            }

            </div>
            <button onClick = {addEmo}> Add New Emoji </button>
            <button onClick = {updateEmo}> Make them all ❤️</button>
            <button onClick = {clear}> Clear </button>
        </>
    );
}