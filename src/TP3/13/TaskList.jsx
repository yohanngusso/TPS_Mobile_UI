import PropTypes from 'prop-types';
import TaskItem from './TaskItem';
import './TaskList.css';

export default function TaskList({ tasks, onRemoveTask }) {
    return (
        <div className="task-list">
            <h2>Tarefas</h2>
            <ul>
                {tasks.map((task, index) => (
                    <TaskItem key={index} task={task} onRemoveTask={onRemoveTask} />
                ))}
            </ul>
        </div>
    );
}

TaskList.propTypes = {
    tasks: PropTypes.array.isRequired,
    onRemoveTask: PropTypes.func.isRequired
};