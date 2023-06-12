import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({
  tasks,
  deleteTask,
  editTask,
  markTaskAsCompleted,
  editingTaskId,
  cancelEdit,
  updateTask,
}) => {
  return (
    <ul className="list-group">
      {tasks.map((task, index) => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          editTask={editTask}
          markTaskAsCompleted={markTaskAsCompleted}
          editingTaskId={editingTaskId}
          cancelEdit={cancelEdit}
          updateTask={updateTask}
          index={index + 1} // Add 1 to index to display numbering correctly
        />
      ))}
    </ul>
  );
};

export default TaskList;
