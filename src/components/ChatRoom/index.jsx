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

    try {
        if (error.type === null) {
            throw new Error("Retorno nulo de mutation.")
        }
        if (error.networkError) {
            throw new Error("Network Error: the entire query was rejected.")
        }
        if (error.graphQLErrors) {
            throw new Error("GrapgQL Error: failed resolvers on parse, validation or execution phase.")
        }
        throw new Error("Unknow Error")
    } catch (throwedError) {
        console.error(throwedError)
        console.table(error)
        // TODO: log error com mutation em database de erros
    } finally {
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
    const [ sendMessageMutation, { loading, error, data: returnData } ] = useMutation(SEND_TEXT_MESSAGE_MUTATION, { onError: () => {} })

    useEffect(() => {
        if (loading) {
            disableMessageInput(true)
        }
        if (error) {
            return handleError(error, dispatch, chatRoomData.id)
        }
        if (returnData) {
            if (returnData[0] === null) return handleError({type: null}, dispatch, chatRoomData.id)

            // TODO: depois vai ter outros tipos de mensagem
            let typeKey = Object.keys(returnData)[0]

            disableMessageInput(false)
            setInputState({
                ...inputState,
                [chatRoomData.id]: ''
            })
            document.getElementById('message-input').focus()

            dispatch((previousState) => {
                return ( 
                    {...previousState, 
                        chats: {
                            ...previousState.chats,
                            [chatRoomData.id]:
                                [
                                    ...previousState.chats[chatRoomData.id],
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
