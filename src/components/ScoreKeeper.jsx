import { useState } from "react";

// eslint-disable-next-line react/prop-types, no-unused-vars
export default function ScoreKeeper({numOfPlayers=3, target=5}) {
    const init = new Array(numOfPlayers).fill(0);
    const [scores, setScores] = useState(init);
    const [winner, setWinner] = useState('');
    const increment = (idx) => {
        setScores ((scores) => {
            const copy = [...scores];
            copy[idx] += 1; 
            if (copy[idx] === target){
                let id = idx+1;
                setWinner('Player ' + id);
            }
            return copy;   
        });
    }

    const resetScore = () => {
        setScores(init);
        setWinner('');
    }

    return (
        <>
            <h2> Score Keeper </h2>
            <ul>
                {scores.map((score, idx) => {
                    return (
                    <li key= {idx + 1}> Player {idx + 1}: {score} 
                        <button onClick={() => increment(idx)}> +1 </button>
                    </li>
                    );
                })}
            </ul>
            <button onClick={resetScore}> Reset </button>
           { winner && <h3> Winner is - {winner}</h3>}
        </>
    );
}