import { useState } from 'react';
import {Type} from '../components/Type';
import sentencesList from '../resources/sentences.json';

export function Game(){

    const [gameId, setGameId] = useState(1);
    const [sentence, setSentence] = useState(getRandomSentence(sentencesList));

    return (
        <div>
            <p>Type the fastest that you can!!</p>
            <br />
            <Type 
                sentence={sentence}
                key={gameId} 
                startNewGame={
                    () => {
                        setGameId(gameId + 1);
                        setSentence(getRandomSentence(sentencesList));
                    }
                }
            />
        </div>
    );
}

function getRandomSentence(sentences){
    const index = Math.floor(Math.random() * sentences.length);
    return sentences[index];
}