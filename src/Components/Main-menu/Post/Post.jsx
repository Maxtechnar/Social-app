import React from "react";
import P from "./Post.module.css"


const PostAdd = (props) => {
    return (
        <div className={P.post} >
            <img src="https://sun1.beltelecom-by-minsk.userapi.com/s/v1/if1/XL-GmhElzf1ugBIVydduVXgjObR-PlLBPDpYTN4kcQaAydAZWz9zQgfafS9eI6DxN9NmiCFd.jpg?size=50x0&quality=96&crop=204,204,1632,1632&ava=1" alt="" />
            <h5>{props.post}</h5>
        </div>
    )
}



const Post = () => {
    let postData = [
        { post: "It's my first post" },
        { post: "It's my second post" },
        { post: "It's my third post" }
    ]

    let postSend = postData.map(send => <PostAdd post={send.post} />)

    return (
        <div className={P.info}>
            <div>
                <textarea name="" id="" cols="55" rows="5"></textarea>
            </div>
            <div className={P.b}>
                <button>Разместить</button>
            </div>
            {postSend}
        </div>
    )
}

export default Post;