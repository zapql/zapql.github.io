import React, {FC, useEffect, useReducer} from 'react';
import { History } from 'history';

import ChatList from '../../components/ChatList';
import { Row, Side, Main } from './style'

import DashboardRoom from '../../components/DashboardRoom';

import datazero from '../../store/datazero'

interface DashboardProps {
    history: History;
}

const Dashboard: React.FC<DashboardProps> = ({ }) => {

  return (
    <Row>
      <Side data-testid="Side">
        <ChatList chatListData={datazero} />
      </Side>
      <Main data-testid="Main">
        <DashboardRoom />
      </Main>
    </Row>
)};

export default Dashboard;