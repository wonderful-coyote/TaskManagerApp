import React, { useState } from 'react';

const UpdateForm = ({ task, cancelEdit, updateTask }) => {
  const [updatedTask, setUpdatedTask] = useState(task);

  const handleSave = (e) => {
    e.preventDefault();
    if (updatedTask.trim() !== '') {
      updateTask(updatedTask);
    }
  };

  const handleCancel = () => {
    cancelEdit();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSave(e);
    }
  };

  return (
    <form onSubmit={handleSave}>
      <div className="input-group">
        <div className="form-group">
          <textarea
            className="form-control"
            rows="3"
            value={updatedTask}
            onChange={(e) => setUpdatedTask(e.target.value)}
            onKeyDown={handleKeyDown}
          ></textarea>
        </div>
        <div className="input-group-append button-container">
          <button type="submit" className="btn btn-outline-primary btn-success">
            Save
          </button>
          <button
            type="button"
            className="btn btn-outline-danger btn-secondary"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
};

export default UpdateForm;