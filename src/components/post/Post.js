import React from "react"

export const Post = ({id, workout, description, repetitions, onPostDelete}) => {
    
    function handleDeletePost() {
        fetch(`http://localhost:3000/posts/${id}`, {
          method: "DELETE",
        });
    
        onPostDelete(id);
      }

      

    return (
        <div style={{margin: 20}}>
            <h3> {workout} </h3>
            <p> {description} </p>
            <p>  {repetitions} </p>
            <button >edit workout!</button>
            <button onClick={handleDeletePost}>killed it!</button>
        
            />
            <br/>
        </div>
    )
}

export default Post;