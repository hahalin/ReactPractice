import { useState, useEffect } from "react";

const QuestionTimer = ({ timeout, onTimeout, mode }) => {
    const [remainingTime, setRemainingTime] = useState(timeout);

    useEffect(() => {
        console.log('set timeout');
        const timeoutvar = setTimeout(onTimeout, timeout);
        //return clearTimeout(timeoutvar);
        return () => {
            clearTimeout(timeoutvar);
        }
    }, [timeout, onTimeout]);

    useEffect(() => {
        console.log('set timeinterval');
        const timeInterval = setInterval(() => {
            setRemainingTime(prevRemainingTime => prevRemainingTime - 100);
        }, 100);

        return () => {
            clearInterval(timeInterval);
        };
        //return clearInterval(timeInterval);
    }, []);

    return <progress id="question-time"
        value={remainingTime}
        max={timeout}
        className={mode}
    />;
}

export default QuestionTimer;