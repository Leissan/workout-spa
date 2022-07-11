import React from "react"

export const Post = ({id, workout, description, repetitions}) => {
    
    return (
        <div style={{margin: 20, color: "white"}}>
            <h3> {workout} </h3>
            <p> {description} </p>
            <p>  {repetitions} </p>
            <br/>
        </div>
    )
}

export default Post;