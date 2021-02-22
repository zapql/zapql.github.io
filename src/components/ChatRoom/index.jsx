import React from 'react'
import {
    Redirect
} from 'react-router-dom'
import ChatRoomHeader from '../../components/ChatRoom/ChatRoomHeader';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import { Container } from './style'

function messageInputOnClick( MessageInputLocalState, dispatch, setInputMessage, chatId ) {
    if (!MessageInputLocalState) return;

    setInputMessage(() => '')
    
    dispatch((previousState) => {
        return ( 
            {...previousState, 
                chats: {
                    ...previousState.chats,
                    [chatId]:
                        [
                            ...previousState.chats[chatId],
                            {
                                wid: Math.random(),
                                isMine: true,
                                msg: MessageInputLocalState,
                                timestamp: Math.floor(Date.now() / 1000)
                            }
                        ]
                    
                }}
        )
    })
}

const ChatRoom = ({ chatRoomData = {id:"", info: {}, messages: []}, dispatch }) => {

    // USEEFFECT?
    // useEffect(() => {
    //     // Quando chatId muda, altera o estado
    //     sendMessage(chatData!.messages)
    // }, [chatId])
    
    /**
     * Se chatId for incorreta, e.g. /chats/1
     * Então chatRoomData virá vazio, redireciona para /chats/
     * Se chatId for válido, exibe ChatRoom
     */
    return (
        <React.Fragment>
            {
                chatRoomData.id
                ? 
                <Container data-testid="CallServiceContainer">
                    <ChatRoomHeader chatHeaderData={chatRoomData.info} />
                    <MessageList messageListData={chatRoomData.messages} />
                    <MessageInput messageInputOnClick={messageInputOnClick} dispatch={dispatch} chatId={chatRoomData.id} />
                </Container>
                :
                <Redirect to="/chats" />
            }
        </React.Fragment>
    )
}

export default ChatRoom
