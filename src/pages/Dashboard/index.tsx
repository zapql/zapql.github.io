import React, {FC, useEffect, useReducer} from 'react';
import { History } from 'history';

import ChatList from '../../components/ChatList/ChatList';
import { Row, Side, Main, Container, MainContainer, MainContainerIcon, FirstText, SecondText } from './DashboardStyle'

import reducer from '../../store/reducers'
import { ACTIONS } from '../../store/actions'

interface DashboardProps {
    history: History;
}

const initialState = {
  chatListData: []
}

// quer que feche e abra outra vez? nao sei se era o que tu queria
// pera ae
const Dashboard: React.FC<DashboardProps> = ({ history }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    dispatch({ type: ACTIONS.GET_CHAT })
  }, [])

  return (
    <Row>
      <Side data-testid="Side">
        <ChatList chatListData={[]} history={history} />
      </Side>
      <Main data-testid="Main">
        <Container data-testid="DashboardContainer">
        
        <MainContainer>
            <MainContainerIcon />
            <FirstText>Keep your phone connected</FirstText>
            <SecondText>WhatsApp connects to your phone to sync messages. To reduce data usage, connect your phone to Wi-Fi.</SecondText>
        </MainContainer>

          </Container>
      </Main>
    </Row>
)};

export default Dashboard;