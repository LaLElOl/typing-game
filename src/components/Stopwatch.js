import { useState, useEffect, useRef } from 'react';

export function Stopwatch(props){

    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);
    const wordLength = props.typedLength;
    const finished = props.finished;

    useEffect(() => {
        if(isRunning){
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current);
            },10);
        }
        return () => {
            clearInterval(intervalIdRef.current);
        }
    }, [isRunning]);

    useEffect(() => {
        if(wordLength > 0){
            start();
        }
        if(finished){
            stop();
        }
    })
    
    function start(){
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
    }
    
    function stop(){
        setIsRunning(false);
    }
    
    function formatTime(){

        let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
        let seconds = Math.floor(elapsedTime / (1000) % 60);
        let miliseconds = Math.floor((elapsedTime % 1000) / 10);
        return `${minutes}:${seconds}:${miliseconds}`;
    }

    return (
        <div>
            {formatTime()}
        </div>
    );

}