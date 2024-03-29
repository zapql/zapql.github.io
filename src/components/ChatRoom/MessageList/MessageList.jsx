import React, { useEffect } from 'react';
import moment from 'moment';
import { Container, MessageItem, Contents, Timestamp } from './MessageListStyle'
import Tooltip from '@material-ui/core/Tooltip'

/** TODO: confirmar informação abaixo, acredito que já se resolveu.
 * isMine={message.from != chatId ? true : false} 
 * 
 * não vai funcionar para grupo.
 * Eu tenho que testar o "id do login", que por enquanto não tem, é tel do gmapi.
 */

/**
 * Esse componente organiza e exibe o histórico de mensagens.
 * Recebe um Array com todas as mensagens do contato e monta o histórico.
 * 
 * @param {messageListData} Array com as mensagens do ChatId atual.
 * @param {chatId} Número de telefone do chat atualmente aberto.
 * @returns Container com histórico de mensagens.
 */
const MessageList = ({ messageListData = [], chatId }) => {

    useEffect(() => {
        // Pin scroll to bottom
        document.getElementById('message-list-container').scrollTop = document.getElementById('message-list-container').scrollHeight
    }, [messageListData])

    return (
        <Container id="message-list-container">
            {messageListData.map((message) => (
                message.isError
                ?
                    <Tooltip title={message.errorType} placement="left" key={message.wid}>
                        <MessageItem isMine={message.from !== chatId ? true : false} data-testid="message-item">
                            <Contents isError={message.isError ? true : false} data-testid="message-content">{message.msg}</Contents>
                            <Timestamp data-testid="message-date">
                                {moment.unix(message.timestamp).format('HH:mm')}
                            </Timestamp>
                        </MessageItem>
                    </Tooltip>
                :
                    <MessageItem isMine={message.from !== chatId ? true : false} data-testid="message-item" key={message.wid}>
                        <Contents isError={message.isError ? true : false} data-testid="message-content">{message.msg}</Contents>
                        <Timestamp data-testid="message-date">
                            {moment.unix(message.timestamp).format('HH:mm')}
                        </Timestamp>
                    </MessageItem>
            ))}
        </Container>
    )
}

export default MessageList