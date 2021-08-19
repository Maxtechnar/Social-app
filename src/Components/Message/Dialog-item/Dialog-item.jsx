import React from "react";
import { NavLink } from "react-router-dom";
import d from "./Dialog-item.module.css"

const DialogItem = (props) => {
    return (
        <div className={d.nick_name}>
            <NavLink to={"/Message/" + props.id}><h3>{props.name}</h3></NavLink>
        </div>
    )
};

export default DialogItem;