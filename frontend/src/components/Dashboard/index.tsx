import React from 'react';
// import ChatsNavbar from './ChatsNavbar';
// import ChatsList from './ChatsList';
// import styled from 'styled-components';
import { History } from 'history';

interface DashboardProps {
    history: History;
}

const Dashboard: React.FC<DashboardProps> = ({ history }) => (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
);

export default Dashboard;