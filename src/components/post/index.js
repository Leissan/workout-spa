import React, { useEffect, useState } from 'react';
import { Layout } from '../layout';

import axios from 'axios';
import { Post } from './Post';

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:4000/posts").then((response) => { 
            setPosts(response.data)
        });
    }, []);

    return (
        <Layout>
            <main style={{ padding: "1rem 0" }}>
                <h2>Posts</h2>
                { posts.length > 0 && posts.map((post) => (
                    <div key={post.id}>
                        <Post id={post.id} title={post.title} body={post.body} createdAt={post.createdAt} author={post.Author}/>
                    </div>
                    ))}
            </main>
        </Layout>
      );
}

export default Posts;