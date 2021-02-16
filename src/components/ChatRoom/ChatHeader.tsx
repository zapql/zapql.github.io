import React, {FC} from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import styled from "styled-components";

// --primary-bg: #2c6157
// Nao esta aplicando
const Navbar = styled(AppBar)`
    background-color: var(--primary-bg);
    color: var(--primary-text);
    font-size: 20px;
    line-height: 40px;
    position: relative;
`;

const Container = styled(Toolbar)`
  padding: 0;
  display: flex;
  flex-direction: row;
  background-color: var(--primary-bg);
  color: var(--primary-text);
`;

const Picture = styled.img`
  height: 40px;
  width: 40px;
  margin-top: 3px;
  margin-left: -22px;
  object-fit: cover;
  padding: 5px;
  border-radius: 50%;
`;

const Name = styled.div`
  line-height: 56px;
`;

interface ChatRoomNavbarProps {
    chat: { 
        picture?: string, 
        name?: string 
    }
}

const ChatHeader: FC<ChatRoomNavbarProps> = ({ chat = {} }) => {
    return (
        <div data-testid="chat-header-outer-div">
            <Navbar data-testid="chat-header-navbar" position="relative">
                <Container data-testid="chat-header-container">
                    <Picture data-testid="chat-picture" src={chat.picture}></Picture>
                    <Name data-testid="chat-name">{chat.name}</Name>
                </Container>
            </Navbar>
        </div>
    )
}

export default ChatHeader