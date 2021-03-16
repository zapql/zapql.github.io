import React, { useEffect } from 'react'
import SendIcon from './SendIcon'
import { Container, ActualInput, SendButton } from './MessageInputStyle'

// TODO: alterar para state/dispatch?
/**
 * Componente responsável por organizar e exibir o Container de Input de Mensagens.
 * 
 * @param {onMessage} Dispatch da Mutation. 
 * @param {chatId} Número de telefone do chat atualmente aberto.
 * @param {inputState, setInputState} Recebe e envia o Estado local com valor do input.
 * @returns Container Component: Message Input
 */
const MessageInput = ( { onMessage, chatId, inputState, setInputState } ) => {

    useEffect(() => {
        document.getElementById('message-input').focus()
    }, [chatId])
    
    const sendInput = () => {
        return inputState[chatId] ? onMessage({variables: {to: chatId, msg: inputState[chatId]}}) : false
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
                autoComplete='off'
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