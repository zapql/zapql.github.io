import React, {FC, useReducer, useState} from 'react'
import SendIcon from './SendMessageButton'
import { Container, ActualInput, SendButton } from './MessageInputStyle'

interface MessageInputProps {
    message: string,
    onSendMessage(content: string): any;
}

const MessageInput: FC<any> = ( { messageInputOnClick, sendMessage, messageListState } ) => {
    // Componente cuida apenas de seu proprio estado temporario.
    const [MessageInputLocalState, setInputMessage] = useState('');
    

    const onKeyPress = (e: any) => {
        if (e.charCode === 13) {
          return messageInputOnClick(MessageInputLocalState, sendMessage, setInputMessage, messageListState)
        }
      };

    const onChange = ({ target }: any) => {
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
                variant="contained"
                color="primary"
                onClick={() => messageInputOnClick(MessageInputLocalState, sendMessage, setInputMessage, messageListState)}>
                <SendIcon />
            </SendButton>
        </Container>
    )
}

export default MessageInput