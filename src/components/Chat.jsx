import React, { useState, useContext } from 'react'
import Cam from "../img/app/cam.png"
import Add from "../img/app/add.png"
import More from "../img/app/more.png"
import Messages from "./Messages"
import Input from "./Input"
import Sidebar from './Sidebar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { ChatContext } from "../context/ChatContext";


    const Chat = (props) => {
        const [isShown, setIsShown] = useState(false);
        const handleClick = () =>{
            setIsShown(current => !current);
        };
        const { data } = useContext(ChatContext);

        return (
            <div className='chat'>
                <div className="chatInfo">
                <div className="details"><FontAwesomeIcon icon={faBars} size='lg' onClick={handleClick} />
                    </div>
                    <span>{data.user?.displayName}</span>
                    <div className="chatIcons">
                        <img src={Cam} alt=""/>
                        <img src={Add} alt=""/>
                        <img src={More} alt=""/>
                    </div>
                    {isShown && <Sidebar/>}
                </div>
                <Messages />
                <Input />
            </div>
                
        )
    }
    

export default Chat;