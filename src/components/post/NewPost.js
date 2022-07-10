import axios from 'axios';
import React, { useState } from 'react';
import { Layout } from '../layout';

const NewPost = () => {
  const [title, setTitle] = useState(null)
  const [body, setBody] = useState(null)
  const [author, setAuthor] = useState(null)

  const onCreate = () => {
      axios.post("http://localhost:3000/posts", {
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
    <Layout>
            <main style={{ padding: "1rem 0" }}>
                <h2>New post</h2>
                <div>
                    <span>Type of workout</span>
                        <input
                            placeholder="Type of workout"
                            value={title}
                            onChange={(event) => setTitle(event.target.value)}
                        />
                    </div>
                    <div>
                        <span>Description</span>
                            <input 
                            placeholder="description" 
                            multiline 
                            value={body}
                            onChange={(event) => setBody(event.target.value)}
                        />
                    </div>
                    <div>
                        <span>Repetitions</span>
                            <input
                                placeholder="number of repetions"
                                value={author}
                                onChange={(event) => setAuthor(event.target.value)}
                            />
                    </div>
                    <div>
                        <button onClick={onCreate}>Сохранить</button>
                    </div>
            </main>
        </Layout>
  )
}

export default NewPost;