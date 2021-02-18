import React, { useState } from 'react'

import ChatList from '../../components/ChatList/ChatList';
import ChatHeader from '../../components/ChatRoom/ChatHeader';
import MessageList from '../../components/ChatRoom/MessageList';
import MessageInput from '../../components/ChatRoom/MessageInput';
import { Row, Side, Main, Container } from './style'

function submitMessage(inputMessage: String, onSendMessage: Function, message: Array<JSON>, setInputMessage: Function) {
        if (!inputMessage) return;
        
        onSendMessage([...message,
            {
                id: Math.random(),
                isMine: true,
                content: inputMessage,
                createdAt: new Date(),
            }
        ]);

        // Limpa o input para nova mensagem
        setInputMessage(() => '')
    };

const initialState = [{
        id: 1,
        content: "foo",
        createdAt: new Date(),
    }]

const ChatRoom: React.FC<any> = ({ 
    chatListData, 
    history, 
    chatHeaderData,
    messageListData,
    onSendMessage
    }) => {
    
    const [message, sendMessage] = useState(initialState)
    
    return (
        <Row>
            <Side data-testid="Side">
                <ChatList chatListData={chatListData} history={history} />
            </Side>
            <Main data-testid="Main">
                <Container data-testid="CallServiceContainer">
                    <ChatHeader chatHeaderData={{}} />
                    <MessageList messageListData={message} />
                    <MessageInput submitMessage={submitMessage} message={message} onSendMessage={sendMessage} />
                </Container>
            </Main>
        </Row>
    )
}

export default ChatRoom;