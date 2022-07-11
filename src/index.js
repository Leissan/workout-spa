import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Posts from './components/post';  //??? 
import NewPost from './components/post/NewPost';
import Post from './components/post/Post';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="workout_plan" element={<Posts />} />  
        <Route path="new_workout" element={<NewPost />} />
        <Route path="workout/${id}" element={<Post />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// 21  - which component is Posts