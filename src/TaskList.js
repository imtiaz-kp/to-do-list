
import React, { useState } from 'react';
import { useTaskContext } from './TaskContext';
import TaskItem from './TaskItem';

const TaskList = () => {
  const { tasks, dispatch } = useTaskContext();
  const [showCompleted, setShowCompleted] = useState(true);

  const handleDrop = (startIndex, endIndex) => {
    const reorderedTasks = [...tasks];
    const [movedTask] = reorderedTasks.splice(startIndex, 1);
    reorderedTasks.splice(endIndex, 0, movedTask);

    return reorderedTasks;
  };

  const filteredTasks = showCompleted ? tasks.filter(task => task.completed) : tasks;

  return (
    <div>
      <label className='d-flex align-items-center justify-content-center'>
        <input
          type="checkbox"
          checked={showCompleted}
          onChange={() => setShowCompleted(!showCompleted)}
        />
        Show Completed Tasks
      </label>

      <div className='row'>
        {filteredTasks.map((task, index) => (
          <div key={task.id} className='col-lg-3 p-4'>
            <TaskItem task={task} index={index} handleDrop={handleDrop} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
