import React from "react";
import m from "./Message.module.css"
import DialogItem from "./Dialog-item/Dialog-item";
import Dialogs from "./Dialogs/Dialogs";


const Message = () => {
    let DialogData = [
        { name: "Андрей", id: "1", },
        { name: "Дмитрий", id: "2", },
        { name: "Alex", id: "3", },
        { name: "Eugene", id: "4", },
        { name: "Диана", id: "5", },
        { name: "Антон", id: "6", },
        { name: "Anna", id: "7", }
    ];

    let MessageData = [
        { message: "Hello", id: "1", },
        { message: "How are you?", id: "2", },
        { message: "I'm fine", id: "3", },
        { message: "What are you doing", id: "4", },
        { message: "Nothing!", id: "5", }
    ];

    let dialogItems = DialogData
        .map(dialog =>
            <DialogItem name={dialog.name} id={dialog.id} />
        )

    let messageItems = MessageData.map(mess =>
        <Dialogs message={mess.message} id={mess.id} />
    )

    return (

        <div className={m.message}>
            <div className={m.dialogs__items}>
                {dialogItems}
            </div>
            <div className={m.dialogs}>
                {messageItems}
            </div>
        </div >
    )
}

export default Message;