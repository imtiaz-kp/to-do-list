import React, { useRef } from 'react';
import { useTaskContext } from './TaskContext';

const TaskItem = ({ task, index, handleDrop }) => {
  const { dispatch } = useTaskContext();
  const itemRef = useRef(null);

  const handleDragStart = (e) => {
    const target = e.target;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', target);
    e.dataTransfer.setData('index', index);
  };

  const handleDragEnd = () => {
    itemRef.current.classList.remove('dragging');
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDropHere = (e) => {
    e.preventDefault();
    const draggedIndex = parseInt(e.dataTransfer.getData('index'), 10);

    if (draggedIndex === index) {
      return;
    }

    handleDrop(draggedIndex, index);
  };

  return (
    <div
      ref={itemRef}
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragOver={handleDragOver}
      onDrop={handleDropHere}
      style={{
        backgroundColor: task.completed ? 'lightgreen' : 'wheat',
      }}
      className='container d-flex flex-column text-center p-3 rounded shadow mt-3'
    >
      <h3 style={{ overflowY: 'hidden' }}>
        {task.title} {task.completed ? <i className="ms-3 fa-solid fa-check"></i> : null}
      </h3>
      {task.dueDate && (
        <span className='mt-2' style={{ marginLeft: '10px' }}>
          Due Date: {new Date(task.dueDate).toLocaleDateString()}
        </span>
      )}
      <button
        className='ms-2 mt-2 btn border'
        style={{ backgroundColor: task.completed ? 'orange' : 'green' }}
        onClick={() => dispatch({ type: 'TOGGLE_TASK', payload: task.id })}
      >
        {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
      </button>
      <button
        className='ms-2 mt-2 btn-primary btn'
        onClick={() => dispatch({ type: 'REMOVE_TASK', payload: task.id })}
      >
        Remove
      </button>
    </div>
  );
};

export default TaskItem;
