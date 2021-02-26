import React, { useState, useEffect } from 'react'
import {
    Redirect
} from 'react-router-dom'
import ChatRoomHeader from '../../components/ChatRoom/ChatRoomHeader';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import { Container } from './style'

import { useMutation } from '@apollo/client'
import { SEND_TEXT_MESSAGE_MUTATION } from '../../store/Apollo/ChatRoom'

const disableMessageInput = (bool) => {
    document.getElementById("message-input").disabled = bool
    document.getElementById("send-button").disabled = bool
}

const handleError = (error, dispatch, chatId) => {
    disableMessageInput(false)

    console.log("Send Message Error: ", error)

    if (error.type === null) {
        // TODO: Generate Log
    }
    if (error.networkError) {
        // TODO: Generate Log
    }
    if (error.graphQLErrors) {
        // TODO: Generate Log
    }

    dispatch((previousState) => {
        return ( 
            {...previousState, 
                chats: {
                    ...previousState.chats,
                    [chatId]:
                        [
                            ...previousState.chats[chatId],
                            {
                                wid: `error-${Math.random()}`,
                                msg: "Sua mensagem não pôde ser enviada.",
                                isError: true,
                                timestamp: (Date.now() / 1000)
                            }
                        ]
                    
                }}
        )
    })
}

const ChatRoom = ({ chatRoomData = {id:"", info: {}, messages: []}, dispatch }) => {

    const [ inputState, setInputState ] = useState('');

    const [ sendMessageMutation, { loading, error, data: returnData } ] = useMutation(SEND_TEXT_MESSAGE_MUTATION)

    // useEffect para useMutation
    useEffect(() => {
        let chatId = chatRoomData.id

        if (loading) {
            disableMessageInput(true)
        }
        if (error) {
            return handleError(error, dispatch, chatRoomData.id)
        }
        if (returnData) {
            if (returnData[0] === null) return handleError({type: null}, dispatch, chatRoomData.id)
            
            disableMessageInput(false)
            // TODO: depois vai ter outros tipos de mensagem
            let typeKey = Object.keys(returnData)[0]

            setInputState(() => '')

            dispatch((previousState) => {
                return ( 
                    {...previousState, 
                        chats: {
                            ...previousState.chats,
                            [chatId]:
                                [
                                    ...previousState.chats[chatId],
                                    {
                                        ...returnData[typeKey]
                                    }
                                ]
                            
                        }}
                )
            })
        }
    }, [loading, error, returnData])
    
    return (
        <React.Fragment>
            {
                chatRoomData.id
                ? 
                <Container data-testid="CallServiceContainer">
                    <ChatRoomHeader chatHeaderData={chatRoomData.info} />
                    <MessageList messageListData={chatRoomData.messages} chatId={chatRoomData.id} />
                    <MessageInput onMessage={sendMessageMutation} chatId={chatRoomData.id} inputState={inputState} setInputState={setInputState} />
                </Container>
                :
                <Redirect to="/chats" />
            }
        </React.Fragment>
    )
}

export default ChatRoom
