import React from 'react';
import { Navbar, Container, Picture, Name } from './ChatRoomHeaderStyle'

const ChatRoomHeader = ({ chatHeaderData }) => {
    return (
        <div data-testid="chat-header-outer-div">
            <Navbar data-testid="chat-header-navbar" position="relative">
                <Container data-testid="chat-header-container">
                    <Picture data-testid="chat-picture" src={chatHeaderData.avatar}></Picture>
                    <Name data-testid="chat-name">{chatHeaderData.name}</Name>
                </Container>
            </Navbar>
        </div>
    )
}

export default ChatRoomHeader