import React, {FC, useReducer} from 'react';

import ChatList from '../../components/ChatList';
import ChatRoom from '../../components/ChatRoom'
import { Row, Side, Main, Container } from './style'

import datazero from '../../store/datazero'

interface CallServiceProps {
    chatId: string
}

/**
 * TODO: useEffect com Promise.
 * Se retornar query valida no banco, renderiza os componentes.
 * Senao, useHistory().push("/chats"), nao deve poder acessar numero invalido.
 */
const CallService: React.FC<CallServiceProps> = ({ chatId }) => {
  
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