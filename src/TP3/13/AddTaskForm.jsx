import { useState } from 'react';
import PropTypes from 'prop-types';
import './AddTaskForm.css';

export default function AddTaskForm({ onAddTask }) {
    const [task, setTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim()) {
            onAddTask(task);
            setTask('');
        }
    };

    return (
        <form className="add-task-form" onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={task} 
                onChange={(e) => setTask(e.target.value)} 
                placeholder="Nova tarefa" 
            />
            <button type="submit">Adicionar</button>
        </form>
    );
}

AddTaskForm.propTypes = {
    onAddTask: PropTypes.func.isRequired,
};