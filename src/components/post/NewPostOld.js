import axios from 'axios';
import React, { useState } from 'react';
import Layout from '../layout/Layout';

const NewPost = () => {
  const [workout, setWorkout] = useState("")
  const [description, setDescription] = useState("")
  const [repetitions, setRepetitions] = useState("")

  const onCreate = () => {
      axios.post("http://localhost:3000/posts", {
          "workout": workout, 
          "description": description,
          "repetitions": repetitions

        }).then(() => {
          setWorkout("")
          setRepetitions("")
          setDescription("")
      })
  }

  return (
    <Layout>
            <main style={{ padding: "1rem 0" }}>
                <h2>New Workout</h2>
                <div>
                    <span>Type of workout </span>
                        <input
                            placeholder="type of workout"
                            value={workout}
                            onChange={(event) => setWorkout(event.target.value)}
                        />
                    </div>
                    <div>
                        <span>Description </span>
                            <input 
                            placeholder="description " 
                            value={description}
                            onChange={(event) => setDescription(event.target.value)}
                        />
                    </div>
                    <div>
                        <span>Repetitions </span>
                            <input
                                placeholder="number of repetions"
                                value={repetitions}
                                onChange={(event) => setRepetitions(event.target.value)}
                            />
                    </div>
                    <div>
                        <button onClick={onCreate}>Add my workout!</button>
                        <button >edit workout!</button>
                        <button >killed it!</button>
                        
                    </div>
            </main>
        </Layout>
  )
}

export default NewPost;