import moment from 'moment';
import React, { FC, useReducer } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: block;
  flex: 2;
  overflow-y: overlay;
  padding: 0 15px;
`;

const MessageItem = styled.div`
  float: right;
  background-color: #dcf8c6;
  display: inline-block;
  position: relative;
  max-width: 100%;
  border-radius: 7px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  margin-top: 10px;
  margin-bottom: 10px;
  clear: both;

  &::after {
    content: '';
    display: table;
    clear: both;
  }

  &::before {
    background-image: url(/assets/message-mine.png);
    content: '';
    position: absolute;
    bottom: 3px;
    width: 12px;
    height: 19px;
    right: -11px;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: contain;
  }
`;

const Contents = styled.div`
  padding: 5px 7px;
  word-wrap: break-word;

  &::after {
    content: ' \\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0';
    display: inline;
  }
`;

const Timestamp = styled.div`
  position: absolute;
  bottom: 2px;
  right: 7px;
  color: gray;
  font-size: 12px;
`;

const ACTIONS = {
    TYPE: 'some type'
}

// function reducer (state, action) {
//     switch (action.type) {
//         case ACTIONS.TYPE:
//             return "some action"
//         default:
//             return "default"
//     }
// }

const initialState = {}

interface MessageListProps {
    messages: Array<any>;
}

const MessageList: FC<MessageListProps> = ({ messages = [] }) => {
    // const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <Container>
            {messages.map((message: any) => (
                <MessageItem data-testid="message-item" key={message.id}>
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