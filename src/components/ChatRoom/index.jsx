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

    function ReturnNullException (message, e) {
        this.message = message
        this.name = 'ReturnNullException'
        this.tooltip = 'Return Null Error'
        this.error = e
    }

    function NetworkErrorException (message, e) {
        this.message = message
        this.name = 'NetworkErrorException'
        this.tooltip = 'Network Error'
        this.error = e
    }

    function GraphQLErrorException (message, e) {
        this.message = message
        this.name = 'GraphQLErrorException'
        this.tooltip = 'GraphQL Error'
        this.error = e
    }

    try {
        if (error.type === null) {
            throw new ReturnNullException("Retorno nulo de mutation.", error)
        }
        if (error.networkError) {
            throw new NetworkErrorException("Network Error: the entire query was rejected.", error)
        }
        if (error.graphQLErrors) {
            throw new GraphQLErrorException("GraphQL Error: failed resolvers on parse, validation or execution phase.", error)
        }
        throw new Error("Unknow Error")
    } catch (Exception) {
        console.error(Exception.message)
        console.table(Exception)

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
                                    errorType: Exception.tooltip,
                                    timestamp: (Date.now() / 1000)
                                }
                            ]
                        
                    }}
            )
        })
        // TODO: log error com mutation em database de erros
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
    const [ sendMessageMutation, { loading: mutationLoading, error: mutationError, data: mutationReturnData } ] = useMutation(SEND_TEXT_MESSAGE_MUTATION, { onError: () => {} })

    useEffect(() => {
        if (mutationLoading) {
            disableMessageInput(true)
        }
        if (mutationError) {
            return handleError(mutationError, dispatch, chatRoomData.id)
        }
        if (mutationReturnData) {
            // TODO: depois vai ter outros tipos de mensagem
            let typeKey = Object.keys(mutationReturnData)[0]

            if (mutationReturnData[0] === null) return handleError({type: null}, dispatch, chatRoomData.id)
            if (mutationReturnData[typeKey] === null) return handleError({type: typeKey, return: null}, dispatch, chatRoomData.id)

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
                                        ...mutationReturnData[typeKey]
                                    }
                                ]
                            
                        }}
                )
            })
        }
    }, [mutationLoading, mutationError, mutationReturnData])

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
