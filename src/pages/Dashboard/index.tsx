import React, {FC, useReducer} from 'react';
import { History } from 'history';

import ChatList from '../../components/ChatList/ChatList';
import { Row, Side, Main, Container, MainContainer, MainContainerIcon, FirstText, SecondText } from './DashboardStyle'

import { chats } from '../../components/ChatList/FakeDatabase'

interface DashboardProps {
    history: History,
    chatId: string
}

const Dashboard: React.FC<DashboardProps> = ({ chatId, history }) => (
    <Row>
      <Side data-testid="Side">
        <ChatList chatListData={chats} />
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
);

export default Dashboard;