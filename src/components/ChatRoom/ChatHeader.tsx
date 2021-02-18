import React, {FC} from 'react';
import { Navbar, Container, Picture, Name } from './ChatHeaderStyle'

interface ChatRoomNavbarProps {
    chatHeaderData: { 
        avatar?: string, 
        name?: string,
        status?: string,
    }
}

const ChatHeader: FC<any> = ({ chatHeaderData }) => {
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

export default ChatHeader