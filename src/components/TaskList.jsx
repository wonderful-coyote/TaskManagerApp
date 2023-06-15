import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, deleteTask, editTask, markTaskAsCompleted, updateTask, editingTaskId, cancelEdit }) => {
  return (
    <ul className="list-group">
      {tasks.length === 0 ? (
        <li className="list-group-item">No tasks added...</li>
      ) : (
        tasks.map((task, index) => (
          <TaskItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            editTask={editTask}
            markTaskAsCompleted={markTaskAsCompleted}
            updateTask={updateTask}
            editingTaskId={editingTaskId}
            cancelEdit={cancelEdit}
            index={index + 1}
          />
        ))
      )}
    </ul>
  );
};

export default TaskList;
