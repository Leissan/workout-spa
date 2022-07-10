import React from "react"

export const Post = (props) => {
    const { id = null, workout = "", description = "", repetitions = ""} = props

    return (
        <div style={{margin: 20}}>
            <a href={`/posts/${id}`}><h3> {workout} </h3></a>
            <p> {description} </p>
            <p>  {repetitions} </p>
            <br/>
        </div>
    )
}