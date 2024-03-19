import {useState} from 'react';
import './Type.css';
import { Stopwatch } from './Stopwatch.js';

export function Type(props){

    const [typed, setTyped] = useState('');
    const [inputStyle, setInputStyle] = useState('inputGood');
    const [finished, setFinished] = useState(false);
    const sentence = props.sentence;
    
    if(!finished){
        return (
            <div>
                <Stopwatch typedLength={typed.length} finished={finished}/>
                <br/>
                <br/>
                <p>{sentence}</p>
                <input
                    className={inputStyle}
                    value={typed}
                    onChange={e => {
                        setTyped(e.target.value);
                        compareToText(e.target.value, sentence, setInputStyle);
                        endedTyping(e.target.value, sentence, setFinished);
                    }}
                />
            </div>
        );
    }else{
    return (
        <div>
            <Stopwatch typedLength={typed.length} finished={finished}/>
            <br/>
            <p>Completed correctly!</p>
            <br></br>
            <br></br>
            <div>
                <p>Want to play again??</p>
                <button onClick={() => props.startNewGame()}>Play Again</button>
            </div>
        </div>
    );
    }
}

function compareToText(typed, sentence, setInputStyle) {
    
    const lenInput = typed.length;
    const sentenceTrim = sentence.substring(0, lenInput);
    if(sentenceTrim !== typed ){
        setInputStyle('inputWrong');
    }else{
        setInputStyle('inputGood');
    }
}

function endedTyping(typed, sentence, setFinished){
    if(typed === sentence){
        setFinished(true);
    }
}