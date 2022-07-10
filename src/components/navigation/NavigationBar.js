import React from 'react';
import { createUseStyles } from 'react-jss';
import { Link } from "react-router-dom";

const useStyles = createUseStyles({
    wrapper: {
        display: "flex",
        width: "100%",
        margin: 10,
        justifyContent: "center",
    }
  });

const NavigationBar = () => {
    const classes = useStyles();

    return (
        <div className={classes.wrapper}> 
            <nav
                style={{
                    borderBottom: "solid 1px",
                    paddingBottom: "1rem",
                }}
            >
                <Link to="/list_of_posts">Posts list</Link> |{" "}
                <Link to="/new_post">New post</Link>
            </nav>
        </div>
    )
}

export default NavigationBar;