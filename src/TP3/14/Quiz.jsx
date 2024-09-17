import { useState } from 'react';
import Question from './Question';
import Score from './Score';
import './Quiz.css';

const questions = [
    {
        question: "Qual é a capital da França?",
        options: ["Paris", "Londres", "Berlim", "Madrid"],
        answer: "Paris"
    },
    {
        question: "Qual é a maior montanha do mundo?",
        options: ["Everest", "K2", "Kangchenjunga", "Lhotse"],
        answer: "Everest"
    },
    // Adicione mais 8 questões aqui
];

export default function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

    const handleAnswerOptionClick = (selectedOption) => {
        if (selectedOption === questions[currentQuestion].answer) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    return (
        <div className="quiz">
            {showScore ? (
                <Score score={score} totalQuestions={questions.length} />
            ) : (
                <Question 
                    question={questions[currentQuestion]} 
                    onAnswerOptionClick={handleAnswerOptionClick} 
                />
            )}
        </div>
    );
}