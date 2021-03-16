import React from 'react';
import { Navbar, Container, Picture, Name } from './ChatRoomHeaderStyle'

/**
 * Esse componente é responsável por organizar e exibir 
 * os metadados de contato no topo da tela como um cabeçalho.
 * 
 * @param {chatHeaderData} Metadados de contato
 * @returns Header div Component
 */
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