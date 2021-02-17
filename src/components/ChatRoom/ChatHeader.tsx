import React, {FC} from 'react';
import { Navbar, Container, Picture, Name } from './ChatHeaderStyle'

interface ChatRoomNavbarProps {
    chatHeaderData: { 
        picture?: string, 
        name?: string 
    }
}

const ChatHeader: FC<ChatRoomNavbarProps> = ({ chatHeaderData = {} }) => {
    return (
        <div data-testid="chat-header-outer-div">
            <Navbar data-testid="chat-header-navbar" position="relative">
                <Container data-testid="chat-header-container">
                    <Picture data-testid="chat-picture" src={chatHeaderData.picture}></Picture>
                    <Name data-testid="chat-name">{chatHeaderData.name}</Name>
                </Container>
            </Navbar>
        </div>
    )
}

export default ChatHeader