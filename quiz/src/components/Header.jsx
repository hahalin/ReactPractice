import { useState } from "react";
import quizlogo from '../assets/quiz-logo.png';
const Header=()=>{
    return (
        <header>
            <img src={quizlogo} />
            <h1>ReactQuiz</h1>
        </header>
    )
}

export default Header;