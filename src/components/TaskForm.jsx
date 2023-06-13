import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() !== '') {
      const newTask = {
        id: new Date().getTime().toString(),
        task: task,
        completed: false,
      };
      addTask(newTask);
      setTask('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <div className="form-group">
          <textarea
            className="form-control"
            rows="3"
            placeholder="Enter task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            onKeyDown={handleKeyDown}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary btn-task">
          Add Task
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
