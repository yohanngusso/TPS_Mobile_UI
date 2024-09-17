import './Question.css';

import PropTypes from 'prop-types';
import './Question.css';

export default function Question({ question, onAnswerOptionClick }) {
    return (
        <div className="question">
            <h2>{question.question}</h2>
            <div className="options">
                {question.options.map((option, index) => (
                    <button key={index} onClick={() => onAnswerOptionClick(option)}>
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
}

Question.propTypes = {
    question: PropTypes.object.isRequired,
    onAnswerOptionClick: PropTypes.func.isRequired
};
