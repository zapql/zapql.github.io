import React, {FC, useReducer} from 'react';
// import { History } from 'history';

import ChatRoom from '../../components/ChatRoom'

import { chats } from '../../components/ChatList/FakeDatabase'

interface CallServiceProps {
    history: History,
    chatId: string
}

const CallService: React.FC<any> = ({}) => {
  
  return (
    <div>
      <ChatRoom chatListData={chats}
                history={{}}
                />
    </div>
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