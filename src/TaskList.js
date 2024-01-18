// src/TaskList.js
import React, { useState } from 'react';
import { useTaskContext } from './TaskContext';
import TaskItem from './TaskItem';

const TaskList = () => {
  const { tasks, dispatch } = useTaskContext();

  const handleDrop = (startIndex, endIndex) => {
    const reorderedTasks = [...tasks];
    const [movedTask] = reorderedTasks.splice(startIndex, 1);
    reorderedTasks.splice(endIndex, 0, movedTask);

    return reorderedTasks;
  };

  return (
    <div className='row'>
      {tasks.map((task, index) => (
        <div key={task.id} className='col-lg-3 p-4'>
          <TaskItem task={task} index={index} handleDrop={handleDrop} />
        </div>
      ))}
    </div>
  );
};

export default TaskList;
