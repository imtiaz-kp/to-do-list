
import React from 'react';
import { TaskProvider } from './TaskContext';
import TaskList from './TaskList';
import TaskForm from './TaskForm';


const App = () => {
  return (
    <TaskProvider>
      
      <div>
    
      <div className='d-flex align-iems-center justify-content-center mt-5 ' >
        <h1  style={{overflowY:'hidden'}} >To-Do List App</h1>
        </div>
        <TaskForm />
        <TaskList />
      </div>
    </TaskProvider>
  );
};

export default App;
