import React from "react";
import "./Header.css"

const Header = () => {
    return (
        <div className="header">
            <div className="icon">
                <a href="/Main">
                    <img src="https://im0-tub-by.yandex.net/i?id=f3780bbec44f3db56c7898d693d59f4e&n=13&exp=1" alt="" />
                    <h4>ВКОНТАКТЕ</h4>
                </a>
            </div>
            <div className="form">
                <input type="search" placeholder="Поиск" ></input>
            </div>
            <div className="profile">
                <a href="№">
                    <img src="https://sun1.beltelecom-by-minsk.userapi.com/s/v1/if1/XL-GmhElzf1ugBIVydduVXgjObR-PlLBPDpYTN4kcQaAydAZWz9zQgfafS9eI6DxN9NmiCFd.jpg?size=50x0&quality=96&crop=204,204,1632,1632&ava=1" alt="" />
                    <h4>Максим</h4>
                </a>
            </div>
        </div>
    )
}

export default Header;