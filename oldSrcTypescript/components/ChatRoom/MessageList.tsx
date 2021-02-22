import moment from 'moment';
import React, { FC } from 'react';
import { Container, MessageItem, Contents, Timestamp } from './MessageListStyle'

interface MessageListProps {
    messageListData: Array<any>;
}

const MessageList: FC<any> = ({ messageListData = [] }) => {

    return (
        <Container>
            {messageListData.map((message: any) => (
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