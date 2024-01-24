import { useState, useCallback, useEffect } from "react";
import QUESTIONS from "../questions";
import Questions from "./Questions";
import Summary from "./Summary";


const Quiz = () => {
    const [answerState, setAnswerState] = useState('');
    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;

    const quizIsComplete = activeQuestionIndex == QUESTIONS.length;

    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectAnswer) {
        setAnswerState('answered');
        setUserAnswers((prevAnswers => {
            return [...prevAnswers, selectAnswer];
        }))

    }, []);

    const handleSkipAnswer = useCallback(() => {
        handleSelectAnswer(null);
    }, []);


    if (quizIsComplete) {
        return (
            <Summary
                userAnswers={userAnswers}
            >
            </Summary>
        );
    }


    return (
        <Questions
            key={activeQuestionIndex}
            index={activeQuestionIndex}
            onSelectAnswer={handleSelectAnswer}
            onSkipAnswer={handleSkipAnswer}
        ></Questions>
    )
}

export default Quiz;