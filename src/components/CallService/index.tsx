import React from 'react';
// import ChatsNavbar from './ChatsNavbar';
// import ChatsList from './ChatsList';
// import styled from 'styled-components';
import { History } from 'history';
// import logo from './logo.svg';

interface CallServiceProps {
    history: History;
    chatId: string;
}

const CallService: React.FC<CallServiceProps> = ({ chatId, history }) => (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          CALL SERVICE
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

export default CallService;