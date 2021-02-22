import React from 'react'
import moment from 'moment'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem'
import Divider from '@material-ui/core/Divider';
import { DivToolbar, ChatPicture, ChatInfo, ChatName, MessageContent, MessageDate, Container } from './style'
import { Link } from 'react-router-dom';

const ChatList = ({ chatListData = {contacts: {}, chats: {}} }) => {

    return(
        <Container data-testid="ChatDiv">
                <DivToolbar />
                <Divider />
                <List>
                    {chatListData.map((contact) => (
                    <ListItem
                        key={contact.id}
                        data-testid="chat"
                        button
                        component={Link}
                        to={`/chats/${contact.id}`}
                        >
                        <ChatPicture
                        data-testid="picture"
                        src={contact.info.avatar}
                        alt="Profile"
                        />
                        <ChatInfo>
                        <ChatName data-testid="name">{contact.info.name}</ChatName>
                        {contact.messages && (
                            <React.Fragment>
                            <MessageContent data-testid="content">
                                {contact.messages[0].msg}
                            </MessageContent>
                            <MessageDate data-testid="date">
                                {moment.unix(contact.messages[0].timestamp).format('HH:mm')}
                            </MessageDate>
                            </React.Fragment>
                        )}
                        </ChatInfo>
                    </ListItem>
                    ))}
                </List>
            </Container>
    )
}

export default ChatList