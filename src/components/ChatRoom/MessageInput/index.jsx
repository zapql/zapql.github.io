import React, { useEffect, useState } from 'react'
import SendIcon from './SendMessageButton'
import { Container, ActualInput, SendButton } from './style'

const MessageInput = ( { onMessage, chatId, inputState, setInputState } ) => {

    useEffect(() => {
        document.getElementById('message-input').focus()
    }, [chatId])
    
    const sendInput = () => {
        return inputState ? onMessage({variables: {to: chatId, msg: inputState}}) : false
    }

    const onKeyPress = (e) => {
        if (e.charCode === 13) {
          return sendInput()
        }
      };

    const onChange = ({ target }) => {
        setInputState({
            ...inputState,
            [chatId]: target.value
        });
    };

    return (
        <Container>
            <ActualInput
                data-testid="message-input"
                id="message-input"
                type="text"
                placeholder="Type a message"
                value={inputState[chatId] || ''}
                onKeyPress={onKeyPress}
                onChange={onChange}
            />
            <SendButton
                data-testid="send-button"
                id="send-button"
                onClick={() => sendInput()}>
                <SendIcon />
            </SendButton>
        </Container>
    )
}

export default MessageInput