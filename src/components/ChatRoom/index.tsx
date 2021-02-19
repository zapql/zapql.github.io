import React, { useEffect, useState } from 'react'

import ChatHeader from '../../components/ChatRoom/ChatHeader';
import MessageList from '../../components/ChatRoom/MessageList';
import MessageInput from '../../components/ChatRoom/MessageInput';
import { Container } from './style'

// Funcao onClick no MessageInput
function messageInputOnClick(MessageInputLocalState: String, sendMessage: Function, setInputMessage: Function, messageListState: Array<any>) {
    if (!MessageInputLocalState) return;

    setInputMessage(() => '')
    
    sendMessage([...messageListState,
        {
            wid: Math.random(),
            isMine: true,
            msg: MessageInputLocalState,
            timestamp: Math.floor(Date.now() / 1000),
        }
    ]);
};

const ChatRoom: React.FC<any> = ({ chatId, chatListData, chatHeaderData, messageListData, onSendMessage }) => {

    const contactList = Object.entries(chatListData.contacts)
    const messageList = Object.entries(chatListData.chats)
    
    let chatData = contactList.map((item, i) => Object.assign(
        {}, 
        {id: item[0]}, 
        {info: item[1]}, 
        {messages: messageList[i][1]}
    )).find((chat) => chat.id === chatId)

    const [messageListState, sendMessage] = useState(chatData!.messages)
    
    useEffect(() => {
        // Quando chatId muda, altera o estado
        sendMessage(chatData!.messages)
    }, [chatId])
    
    return (
        <Container data-testid="CallServiceContainer">
            <ChatHeader chatHeaderData={chatData!.info} />
            <MessageList messageListData={messageListState} />
            <MessageInput messageInputOnClick={messageInputOnClick} sendMessage={sendMessage} messageListState={messageListState} />
        </Container>
    )
}

export default ChatRoom;