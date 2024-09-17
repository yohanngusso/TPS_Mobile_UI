import { useState } from 'react';
import CategoryList from './CategoryList';
import TaskList from './TaskList';
import AddTaskForm from './AddTaskForm';
import './App.css';

const initialCategories = ['Mercado', 'Farmácia', 'Estudos'];
const initialTasks = {
    Mercado: ['Comprar leite', 'Comprar pão'],
    Farmácia: ['Comprar remédio'],
    Estudos: ['Estudar React', 'Fazer exercícios']
};

function App() {
    const [categories] = useState(initialCategories);
    const [tasks, setTasks] = useState(initialTasks);
    const [selectedCategory, setSelectedCategory] = useState(initialCategories[0]);

    const handleAddTask = (task) => {
        setTasks({
            ...tasks,
            [selectedCategory]: [...tasks[selectedCategory], task]
        });
    };

    const handleRemoveTask = (taskToRemove) => {
        setTasks({
            ...tasks,
            [selectedCategory]: tasks[selectedCategory].filter(task => task !== taskToRemove)
        });
    };

    return (
        <div className="App">
            <CategoryList categories={categories} onSelectCategory={setSelectedCategory} />
            <AddTaskForm onAddTask={handleAddTask} />
            <TaskList tasks={tasks[selectedCategory]} onRemoveTask={handleRemoveTask} />
        </div>
    );
}

export default App;