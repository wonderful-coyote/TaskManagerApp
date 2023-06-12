import React from 'react';
import UpdateForm from './UpdateForm';

const TaskItem = ({
  task,
  deleteTask,
  editTask,
  markTaskAsCompleted,
  editingTaskId,
  cancelEdit,
  updateTask,
}) => {
  const handleDelete = () => {
    deleteTask(task.id);
  };

  const handleMarkAsCompleted = () => {
    markTaskAsCompleted(task.id, !task.completed);
  };

  const handleEdit = () => {
    editTask(task.id);
  };

  const handleUpdateTask = (updatedTask) => {
    updateTask(task.id, updatedTask);
  };

  return (
    <li className={`list-group-item ${task.completed ? 'completed' : ''}`}>
      {editingTaskId === task.id ? (
        <UpdateForm
          task={task.task}
          cancelEdit={cancelEdit}
          updateTask={handleUpdateTask}
        />
      ) : (
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={handleMarkAsCompleted}
            />
            <span className="ml-2">{task.task}</span>
          </div>
          <div>
            <button
              className="btn btn-outline-primary btn-sm mr-2"
              onClick={handleEdit}
              disabled={task.completed} // Disable the Edit button if task is completed
            >
              Edit
            </button>
            <button
              className="btn btn-outline-danger btn-sm"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </li>
  );
};

export default TaskItem;
