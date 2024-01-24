import quizCompleteImg from '../assets/quiz-complete.png';
import QUESTIONS from '../questions.js';

const Summary = ({ userAnswers }) => {

    const skppedAnswers = userAnswers.filter(answer => answer === null);
    const correctAnswers = userAnswers.filter((answer, index) => {
        return answer === QUESTIONS[index].answers[0];
    });
    const incorrectAnswers = userAnswers.filter((answer, index) => {
        return answer !== QUESTIONS[index].answers[0];
    });

    const skippedAnswerShare = Math.round(skppedAnswers.length / userAnswers.length * 100);
    const correctAnswerShare = Math.round(correctAnswers.length / userAnswers.length * 100);
    const incorrectAnswerShare = Math.round(incorrectAnswers.length / userAnswers.length * 100);
    return (
        <div id="summary">
            <img src={quizCompleteImg} />
            <h2>Quiz Completed</h2>
            <div id="summary-stats">
                <p>
                    <span className='number'>{skippedAnswerShare}%</span>
                    <span className='text'>skipped</span>
                </p>
                <p>
                    <span className='number'>{correctAnswerShare}%</span>
                    <span className='text'>answered correctly</span>
                </p>
                <p>
                    <span className='number'>{incorrectAnswerShare}%</span>
                    <span className='text'>answered incorrectly</span>
                </p>
            </div>
            <ol>
                {userAnswers.map((answer, index) => {
                    let cssClass = 'user-answer';

                    if (answer === null) {
                        cssClass += ' skipped';
                    }
                    else if (answer === QUESTIONS[index].answers[0]) {
                        cssClass += ' correct';
                    }
                    else {
                        cssClass += ' wrong';
                    }


                    return (
                        <li key={answer}>
                            <h3>{index + 1}</h3>
                            <p className='question'>{QUESTIONS[index].text}</p>
                            <p className={cssClass}>{answer ?? 'Skipped'}</p>

                        </li>
                    )
                })}

            </ol>
        </div>
    )
}

export default Summary;