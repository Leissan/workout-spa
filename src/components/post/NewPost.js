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
    <Layout>
            <main style={{ padding: "1rem 0" }}>
                <h2>New post</h2>
                <div>
                    <span>Заголовок</span>
                        <input
                            placeholder="Загаловок"
                            value={title || ''}
                            onChange={(event) => setTitle(event.target.value)}
                        />
                    </div>
                    <div>
                        <span>Текст</span>
                            <input 
                            placeholder="Текст" 
                            multiline 
                            value={body || ''}
                            onChange={(event) => setBody(event.target.value)}
                        />
                    </div>
                    <div>
                        <span>Автор</span>
                            <input
                                placeholder="Автор"
                                value={author || ''}
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