import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css'

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTaskId, setEditingTaskId] = useState(null);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const editTask = (taskId) => {
    setEditingTaskId(taskId);
  };

  const cancelEdit = () => {
    setEditingTaskId(null);
  };

  const updateTask = (taskId, updatedTask) => {
    setTasks(
      tasks.map((task) => (task.id === taskId ? { ...task, task: updatedTask } : task))
    );
    setEditingTaskId(null);
  };

  const markTaskAsCompleted = (taskId, completed) => {
    setTasks(
      tasks.map((task) => (task.id === taskId ? { ...task, completed: completed } : task))
    );
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Task Manager App</h1>
      <TaskForm addTask={addTask} />
      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        editTask={editTask}
        markTaskAsCompleted={markTaskAsCompleted}
        editingTaskId={editingTaskId}
        cancelEdit={cancelEdit}
        updateTask={updateTask}
      />
    </div>
  );
};

export default App;
