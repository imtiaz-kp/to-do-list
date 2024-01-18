import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<div  style={{ backgroundImage: `url("https://img.freepik.com/premium-photo/list-icon-notebook-with-completed-todo-list-3d-render_471402-428.jpg")`, backgroundRepeat: "no-repeat", backgroundSize: "cover", width: "100%", height: '100vh' }}>
<App />
</div>
  </React.StrictMode>
);


