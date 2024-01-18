
import React, { useState } from 'react';
import { useTaskContext } from './TaskContext';

const TaskForm = () => {
  const { dispatch } = useTaskContext();
  const [taskTitle, setTaskTitle] = useState('');
  const [dueDate, setDueDate] = useState('');

  const addTask = (e) => {
    e.preventDefault();
    if (taskTitle.trim() !== '') {
      dispatch({
        type: 'ADD_TASK',
        payload: { id: Date.now(), title: taskTitle, completed: false, dueDate },
      });
      setTaskTitle('');
      setDueDate('');
    }
  };

  return (
    <form onSubmit={addTask}>
     <div className='d-flex mt-4 mb-5 align-items-center justify-content-center'>
         <div className='d-flex  shadow rounded p-2 border' >
              <input className='me-3 p-2 rounded'
                type="text"
                placeholder="Enter task"
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
              />
              <input className='me-3 p-2 rounded'
                type="date"
                placeholder="Due date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
              />
         
          <button type="submit" className='btn btn-info'>Add Task</button>
          </div>
     </div>
    </form>
  );
};

export default TaskForm;
