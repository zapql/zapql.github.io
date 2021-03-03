import React, { useState, useEffect } from 'react'
import {
    Redirect
} from 'react-router-dom'
import ChatRoomHeader from '../../components/ChatRoom/ChatRoomHeader';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import { Container } from './style'

import { handleError } from '../../services/Errors'

import { useMutation, useSubscription } from '@apollo/client'
import { SEND_TEXT_MESSAGE_MUTATION, ON_TEXT_MESSAGE_SUBSCRIPTION } from '../../store/Apollo/ChatRoom'

const disableMessageInput = (bool) => {
    document.getElementById("message-input").disabled = bool
    document.getElementById("send-button").disabled = bool
}

const ChatRoom = ({ chatRoomData = {id:"", info: {}, messages: []}, dispatch }) => {

    const [ inputState, setInputState ] = useState({});

    useEffect(() => {
        if (!inputState.hasOwnProperty(chatRoomData.id)) setInputState((inputState) => {
            return {
                ...inputState,
                [chatRoomData.id]: ''
            }
        })
    }, [inputState, chatRoomData.id])

    /**
     * Esse { onError: () => {} } é hack para lidar com uma inconsistência no Apollo.
     * O fato de retornar o "error" do ciclo da mutaćão deveria ser suficiente para tratar os erros, 
     * por uma inconsistência (ou por design) sem o onError por enquanto a página quebra e o aplicativo morre.
     * Ver issue: https://github.com/apollographql/apollo-client/issues/6070
     */
    const [ sendMessageMutation, { loading: mutationLoading, error: mutationError, data: mutationReturnData } ] = useMutation(SEND_TEXT_MESSAGE_MUTATION, { onError: () => {} })

    useEffect(() => {
        if (mutationLoading) {
            disableMessageInput(true)
        }
        if (mutationError) {
            return handleError(mutationError, dispatch, chatRoomData.id, disableMessageInput(false))
        }
        if (mutationReturnData) {
            // TODO: depois vai ter outros tipos de mensagem
            let typeKey = Object.keys(mutationReturnData)[0]

            if (mutationReturnData[0] === null) return handleError({type: null}, dispatch, chatRoomData.id, disableMessageInput(false))
            if (mutationReturnData[typeKey] === null) return handleError({type: null}, dispatch, chatRoomData.id, disableMessageInput(false))

            let chatId = mutationReturnData[typeKey].to

            disableMessageInput(false)
            setInputState({
                ...inputState,
                [chatId]: ''
            })
            document.getElementById('message-input').focus()

            return dispatch((previousState) => {
                return ( 
                    {...previousState, 
                        chats: {
                            ...previousState.chats,
                            [chatId]:
                                [
                                    ...previousState.chats[chatId],
                                    {
                                        ...mutationReturnData[typeKey]
                                    }
                                ]
                            
                        }}
                )
            })
        }
    }, [mutationLoading, mutationError, mutationReturnData])

    const { data: subscriptionData, loading: subscriptionLoading } = useSubscription( ON_TEXT_MESSAGE_SUBSCRIPTION )

    useEffect(() => {
        if (subscriptionLoading) {
            console.log("Connection stablished with", chatRoomData.id)
        }
        if (subscriptionData) {
            // TODO: depois vai ter outros tipos de mensagem
            let typeKey = Object.keys(subscriptionData)[0]
            let chatId = subscriptionData[typeKey].from

            return dispatch((previousState) => {
                return ( 
                    {...previousState, 
                        chats: {
                            ...previousState.chats,
                            [chatId]:
                                [
                                    ...previousState.chats[chatId],
                                    {
                                        ...subscriptionData[typeKey]
                                    }
                                ]
                            
                        }}
                )
            })
        }
    }, [subscriptionLoading, subscriptionData])
        
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
