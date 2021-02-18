import React, { useState } from 'react'

import ChatHeader from '../../components/ChatRoom/ChatHeader';
import MessageList from '../../components/ChatRoom/MessageList';
import MessageInput from '../../components/ChatRoom/MessageInput';
import { Container } from './style'

// Funcao onClick no MessageInput
function submitMessage(inputMessage: String, onSendMessage: Function, message: Array<JSON>, setInputMessage: Function) {
        if (!inputMessage) return;

        setInputMessage(() => '')
        
        onSendMessage([...message,
            {
                wid: Math.random(),
                isMine: true,
                msg: inputMessage,
                timestamp: Date.now(),
            }
        ]);
    };

const ChatRoom: React.FC<any> = ({ 
    chatId,
    chatListData, 
    history, 
    chatHeaderData,
    messageListData,
    onSendMessage }) => {

    

    const contactList = Object.entries(chatListData.contacts)
    const messageList = Object.entries(chatListData.chats)
    
    let chatData = contactList.map((item, i) => Object.assign(
        {}, 
        {id: item[0]}, 
        {info: item[1]}, 
        {messages: messageList[i][1]}
    )).find((chat) => chat.id === chatId)

    const [message, sendMessage] = useState(chatData!.messages)

    // console.log(React.props)
    return (
        <Container data-testid="CallServiceContainer">
            <ChatHeader chatHeaderData={chatData!.info} />
            <MessageList messageListData={chatData!.messages} />
            <MessageInput submitMessage={submitMessage} message={message} onSendMessage={sendMessage} />
        </Container>
    )
}

export default ChatRoom;