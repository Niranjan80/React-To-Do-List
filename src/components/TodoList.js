import React, { useState } from 'react';
import './TodoList.css';

function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [completedTasks, setCompletedTasks] = useState([]);
    const [input, setInput] = useState('');

    const handleAdd = () => {
        if (input.trim() !== '') {
            setTasks([...tasks, input]);
            setInput('');
        }
    };

    const handleComplete = (index) => {
        const taskToMove = tasks[index];
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
        setCompletedTasks([...completedTasks, taskToMove]);
    };

    return (
        <div className="todo-container">
            <h1 className="Title">To-do List</h1>
            <div className="Top-bar">
                <input 
                    type="text" 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Enter your task"
                    className="Input-field"
                />
                <button onClick={handleAdd} className="Add-button">Add</button>
            </div>
            
            <div className="sections-container">
                <div className="section">
                    <h2 className="section-title">Tasks To Do</h2>
                    <div className="task-list">
                        {tasks.map((task, index) => (
                            <div key={index} className="task-item">
                                <label className="task-label">
                                    <input 
                                        type="checkbox"
                                        onChange={() => handleComplete(index)}
                                        className="task-checkbox"
                                    />
                                    <span>{task}</span>
                                </label>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="section">
                    <h2 className="section-title">Completed Tasks</h2>
                    <div className="task-list completed">
                        {completedTasks.map((task, index) => (
                            <div key={index} className="task-item completed">
                                <span>{task}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TodoList;
