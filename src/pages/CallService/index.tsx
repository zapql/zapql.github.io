import React, {FC, useReducer} from 'react';

import ChatList from '../../components/ChatList';
import ChatRoom from '../../components/ChatRoom'
import { Row, Side, Main, Container } from './style'

import datazero from '../../store/datazero'

interface CallServiceProps {
    chatId: string
}

const CallService: React.FC<CallServiceProps> = ({ chatId }) => {
  /**
   * TODO: useEffect com Promise.
   * Se retornar query valida no banco, renderiza os componentes.
   * Senao, useHistory().push("/chats"), nao deve poder acessar numero invalido.
   */
  console.log("CallService chatId: ", chatId)
  return (
    <Row>
      <Side id="Side" data-testid="Side">
          <ChatList chatListData={datazero} />
      </Side>
      <Main data-testid="Main">
          <ChatRoom chatListData={datazero} chatId={chatId} />
      </Main>
  </Row>
  )
};

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