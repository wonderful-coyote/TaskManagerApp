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

  return (
    <form onSubmit={handleSave}>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          value={updatedTask}
          onChange={(e) => setUpdatedTask(e.target.value)}
        />
        <div className="input-group-append">
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
