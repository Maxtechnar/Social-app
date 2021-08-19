import React from "react";
import s from "./Sidebar.module.css"
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className={s.sidebar}>
            <NavLink to="/Main">Страница</NavLink>
            <NavLink to="/News">Новости</NavLink>
            <NavLink to="/Message">Сообщения</NavLink>
            <NavLink to="/№">Друзья</NavLink>
            <NavLink to="/Music">Музыка</NavLink>
        </div>
    )
}

export default Sidebar;