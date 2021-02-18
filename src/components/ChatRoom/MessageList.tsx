import moment from 'moment';
import React, { FC } from 'react';
import { Container, MessageItem, Contents, Timestamp } from './MessageListStyle'

interface MessageListProps {
    messageListData: Array<any>;
}

const MessageList: FC<MessageListProps> = ({ messageListData = [] }) => {

    return (
        <Container>
            {messageListData.map((message: any) => (
                <MessageItem isMine={message.isMine} data-testid="message-item" key={message.id}>
                <Contents data-testid="message-content">{message.content}</Contents>
                <Timestamp data-testid="message-date">
                    {moment(message.createdAt).format('HH:mm')}
                </Timestamp>
                </MessageItem>
            ))}
        </Container>
    )
}

export default MessageList