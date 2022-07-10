import axios from 'axios';
import React, { useState } from 'react';
import { Layout } from '../layout';

const NewPost = () => {
  const [title, setTitle] = useState(null)
  const [body, setBody] = useState(null)
  const [author, setAuthor] = useState(null)

  const onCreate = () => {
      axios.post("http://localhost:4000/posts", {
          "title": title, 
          "body": body,
          "author": author,
          "createdAt": new Date()
        }).then(() => {
          setTitle(null)
          setAuthor(null)
          setBody(null)
      })
  }

  return (
  )
}

export default NewPost;