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
import Posts from './components/post/index';
import NewPost from './components/post/NewPost';
import { Post } from './components/post/Post';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="list_of_posts" element={<Posts />} />
        <Route path="new_post" element={<NewPost />} />
        <Route path="posts/${id}" element={<Post />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

