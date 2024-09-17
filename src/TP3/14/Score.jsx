import './Score.css';

import PropTypes from 'prop-types';
import './Score.css';

export default function Score({ score, totalQuestions }) {
    return (
        <div className="score">
            <h2>Seu Resultado</h2>
            <p>
                Você acertou {score} de {totalQuestions} questões.
            </p>
        </div>
    );
}

Score.propTypes = {
    score: PropTypes.number.isRequired,
    totalQuestions: PropTypes.number.isRequired,
};
