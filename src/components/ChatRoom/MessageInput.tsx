import React, {FC, useReducer, useState} from 'react'
import SendIcon from './SendMessageButton'
import { Container, ActualInput, SendButton } from './MessageInputStyle'

interface MessageInputProps {
    message: string,
    onSendMessage(content: string): any;
}

const MessageInput: FC<any> = ( { submitMessage, message, onSendMessage } ) => {
    // Componente cuida apenas de seu proprio estado temporario.
    const [inputMessage, setInputMessage] = useState('');
    

    const onKeyPress = (e: any) => {
        if (e.charCode === 13) {
          return submitMessage(inputMessage, onSendMessage, message, setInputMessage);
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
                value={inputMessage}
                onKeyPress={onKeyPress}
                onChange={onChange}
            />
            <SendButton
                data-testid="send-button"
                variant="contained"
                color="primary"
                onClick={() => submitMessage(inputMessage, onSendMessage, message, setInputMessage)}>
                <SendIcon />
            </SendButton>
        </Container>
    )
}

export default MessageInput