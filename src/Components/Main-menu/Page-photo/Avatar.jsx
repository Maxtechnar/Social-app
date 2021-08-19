import React from "react";
import a from "./Avatar.module.css"

const Avatar = () => {
    return (
        <div className={a.photo}>
            <img src="https://sun1.beltelecom-by-minsk.userapi.com/s/v1/if1/Sa4xAYG7yAeq_zXh1D2wX0on08Oj7ZcxqdedP1MqKBjLyvFqXEh5wG8lR5Q26JHgY-INlURn.jpg?size=200x0&quality=96&crop=0,0,2040,2048&ava=1" alt="" />
            <a href="№">
                <button type="submit">Редактировать </button>
            </a>
        </div>
    )
}

export default Avatar;