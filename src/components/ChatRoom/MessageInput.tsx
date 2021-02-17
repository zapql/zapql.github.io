import React, {FC, useReducer, useState} from 'react'
import SendIcon from './SendMessageButton'
import { Container, ActualInput, SendButton } from './MessageInputStyle'

const initialState = {}

interface MessageInputProps {
    onSendMessage(content: string): any;
}

// TODO: Componentes devem receber apenas props
const MessageInput: FC<MessageInputProps> = ( { onSendMessage } ) => {
    const [message, setMessage] = useState('');

    const onKeyPress = (e: any) => {
        if (e.charCode === 13) {
          submitMessage();
        }
      };

    const onChange = ({ target }: any) => {
        setMessage(target.value);
    };

    const submitMessage = () => {
        if (!message) return;

        setMessage('');

        if (typeof onSendMessage === 'function') {
            onSendMessage(message);
        }
    };

    return (
        <Container>
            <ActualInput
                data-testid="message-input"
                type="text"
                placeholder="Type a message"
                value={message}
                onKeyPress={onKeyPress}
                onChange={onChange}
            />
            <SendButton
                data-testid="send-button"
                variant="contained"
                color="primary"
                onClick={submitMessage}>
                <SendIcon />
            </SendButton>
        </Container>
    )
}

export default MessageInput