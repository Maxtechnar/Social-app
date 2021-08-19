import React from "react";
import Post from "./Post/Post";
import Photo from "./Block-photo/My-photo";
import Info from "./Info/Info";
import Avatar from "./Page-photo/Avatar";
import "./Main.css"

const Main = () => {
    return (
        <div className="main">
            <Avatar />
            <Info />
            <Photo />
            <Post />
        </div >
    )
}

export default Main;