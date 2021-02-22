import React, { useState } from 'react'
import SendIcon from './SendMessageButton'
import { Container, ActualInput, SendButton } from './style'

const MessageInput = ( { messageInputOnClick, dispatch, chatId } ) => {
    // Componente cuida apenas de seu proprio estado temporario.
    const [MessageInputLocalState, setInputMessage] = useState('');

    const onKeyPress = (e) => {
        if (e.charCode === 13) {
          return messageInputOnClick( MessageInputLocalState, dispatch, setInputMessage, chatId )
        }
      };

    const onChange = ({ target }) => {
        setInputMessage(target.value);
    };

    return (
        <Container>
            <ActualInput
                data-testid="message-input"
                type="text"
                placeholder="Type a message"
                value={MessageInputLocalState}
                onKeyPress={onKeyPress}
                onChange={onChange}
            />
            <SendButton
                data-testid="send-button"
                // variant="contained"
                // color="primary"
                onClick={() => messageInputOnClick( MessageInputLocalState, dispatch, setInputMessage, chatId )}>
                <SendIcon />
            </SendButton>
        </Container>
    )
}

export default MessageInput