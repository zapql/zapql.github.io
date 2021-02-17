import React, {FC, useReducer} from 'react';
// import ChatsNavbar from './ChatsNavbar';
// import ChatsList from './ChatsList';
import styled from 'styled-components';
import { History } from 'history';
import ChatList from '../../components/ChatList/ChatList';
import ChatHeader from '../../components/ChatRoom/ChatHeader';
import MessageList from '../../components/ChatRoom/MessageList';
import MessageInput from '../../components/ChatRoom/MessageInput';

import { chats } from '../../components/ChatList/FakeDatabase'

const Container = styled.div`
  background: url(/assets/chat-background.jpg);
  display: flex;
  flex-flow: column;
  height: 100vh;
`;

const Side = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 0.85
`

const Main = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 2
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`

const ACTIONS = {
  TYPE: 'some type'
}

// function reducer (state, action) {
//   switch (action.type) {
//       case ACTIONS.TYPE:
//           return "some action"
//       default:
//           return "default"
//   }
// }

const initialState = {}

interface CallServiceProps {
    history: History;
    chatId: string;
}

const CallService: React.FC<CallServiceProps> = ({ chatId, history }) => (
    <Row>
      <Side data-testid="Side">
        <ChatList data={chats} />
      </Side>
      <Main data-testid="Main">
        <Container data-testid="CallServiceContainer">
            <ChatHeader chat={{}} />
            <MessageList messages={[]} />
            <MessageInput onSendMessage={() => true} />
          </Container>
      </Main>
    </Row>
);

interface CallServiceStoriesProps {
  data: Array<any>,
  chat: {name: string, picture: string},
  messages: Array<any>
}

export const CallServiceStories: React.FC<CallServiceStoriesProps> = ({data = [], chat = {name: "", picture: ""}, messages = []}) => (
  <Row>
    <Side data-testid="Side">
      <ChatList data={data} />
    </Side>
    <Main data-testid="Main">
      <Container data-testid="CallServiceContainer">
          <ChatHeader chat={chat} />
          <MessageList messages={messages} />
          <MessageInput onSendMessage={() => true} />
        </Container>
    </Main>
  </Row>
);

export default CallService;