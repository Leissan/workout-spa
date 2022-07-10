import React from "react"

export const Post = (props) => {
    const { id = null, title = "", body = "", author = "", createdAt = null } = props

    return (
        <div style={{margin: 20}}>
            <a href={`/posts/${id}`}><h3> {title} </h3></a>
            <p> {body} </p>
            <span> {author} </span>
            <span> {createdAt} </span>
            <br/>
        </div>
    )
}