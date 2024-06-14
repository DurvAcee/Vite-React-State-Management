import { useState } from "react";

export default function Scores() {
    const [scores, setScores] = useState({p1: 0, p2: 0});    

    const increment = (e) => {
        const name = e.target.name;
            setScores((s)=>((name === 'p1') ? {...s, p1: s.p1 + 1} : {...s, p2: s.p2 + 1})) 
    }
    
    return (
        <>
            <h2>Scores</h2>
            <h3>Player 1 Score : {scores.p1}</h3>
            <h3>Player 2 Score : {scores.p2}</h3>

            <button name = 'p1' onClick={increment}> + P1</button>
            <button name = 'p2' onClick={increment}> + P2</button>

        </>
    );
}