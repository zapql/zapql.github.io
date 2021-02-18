import React, {FC, useReducer} from 'react';
import { History } from 'history';

import ChatList from '../../components/ChatList/ChatList';
import ChatHeader from '../../components/ChatRoom/ChatHeader';
import MessageList from '../../components/ChatRoom/MessageList';
import MessageInput from '../../components/ChatRoom/MessageInput';
import { Row, Side, Main, Container } from './CallServiceStyle'

import { chats } from '../../components/ChatList/FakeDatabase'

interface CallServiceProps {
    history: History,
    chatId: string
}

const CallService: React.FC<CallServiceProps> = ({ chatId, history }) => {
  console.log("Props:")
  console.log(chatId)
  return (
    <Row>
      <Side data-testid="Side">
        <ChatList chatListData={chats} history={history} />
      </Side>
      <Main data-testid="Main">
        <Container data-testid="CallServiceContainer">
            <ChatHeader chatHeaderData={{}} />
            <MessageList messageListData={[]} />
            <MessageInput onSendMessage={() => true} />
          </Container>
      </Main>
    </Row>
)};

export default CallService;

// This interface and export is for Storybook use only.
// interface CallServiceStoriesProps {
//   chatListData: Array<any>,
//   chatHeaderData: {name: string, picture: string},
//   messageListData: Array<any>,
//   history: History
// }

// export const CallServiceStories: React.FC<CallServiceStoriesProps> = ({chatListData = [], chatHeaderData = {name: "", picture: ""}, messageListData = [], history}) => (
//   <Row>
//     <Side data-testid="Side">
//       <ChatList chatListData={chatListData} history={history} />
//     </Side>
//     <Main data-testid="Main">
//       <Container data-testid="CallServiceContainer">
//           <ChatHeader chatHeaderData={chatHeaderData} />
//           <MessageList messageListData={messageListData} />
//           <MessageInput onSendMessage={() => true} />
//         </Container>
//     </Main>
//   </Row>
// );