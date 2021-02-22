import React from 'react';
import moment from 'moment';
import { Container, MessageItem, Contents, Timestamp } from './style'

const MessageList = ({ messageListData = [] }) => {

    return (
        <Container>
            {messageListData.map((message) => (
                <MessageItem isMine={message.isMine} data-testid="message-item" key={message.wid}>
                <Contents data-testid="message-content">{message.msg}</Contents>
                <Timestamp data-testid="message-date">
                    {moment.unix(message.timestamp).format('HH:mm')}
                </Timestamp>
                </MessageItem>
            ))}
        </Container>
    )
}

export default MessageList