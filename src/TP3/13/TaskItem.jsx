import './TaskItem.css';

import PropTypes from 'prop-types';
import './TaskItem.css';

export default function TaskItem({ task, onRemoveTask }) {
    return (
        <li className="task-item">
            <span>{task}</span>
            <button onClick={() => onRemoveTask(task)}>Remover</button>
        </li>
    );
}

TaskItem.propTypes = {
    task: PropTypes.string.isRequired,
    onRemoveTask: PropTypes.func.isRequired
};
