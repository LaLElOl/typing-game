import {useState} from 'react';
import './Type.css';
import sentences from '../resources/sentences.json';

export function Type(){

    const [typed, setTyped] = useState('');
    const [inputStyle, setInputStyle] = useState('inputGood');
    const [sentence, setSentence] = useState(sentences.sentencesList[0]);

    return (
        <div>
            <p>{sentences.sentencesList[0]}</p>
            <input
                className={inputStyle}
                value={typed}
                onChange={e => {
                    setTyped(e.target.value);
                    compareToText(e.target.value, sentence, setInputStyle);
                }}
            />
        </div>
    );
}

function compareToText(typed, sentence, setInputStyle) {
    
    const lenInput = typed.length;
    const sentenceTrim = sentence.substring(0, lenInput);
    console.log(sentenceTrim);
    if(sentenceTrim !== typed ){
        setInputStyle('inputWrong');
    }else{
        setInputStyle('inputGood');
    }
}
