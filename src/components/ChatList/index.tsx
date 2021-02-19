import React, {FC, useCallback} from 'react'
import moment from 'moment'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem'
import Divider from '@material-ui/core/Divider';
import { DivToolbar, ChatPicture, ChatInfo, ChatName, MessageContent, MessageDate, Container } from './style'
import { useHistory } from 'react-router-dom';

interface ChatListProps {
    chatListData: {
        prop1: String,
        // contacts: {
        //     name: String,
        //     status: String,
        //     avatar: String,
        // },
        // chats: Array<any>
        contacts: any,
        chats: any
    };
}

const ChatList: FC<ChatListProps> = ({ chatListData = {contacts: {}, chats: {}} }) => {
    let history = useHistory()
    
    const contactList = Object.entries(chatListData.contacts)
    const messageList = Object.entries(chatListData.chats)

    let chatData = contactList.map((item, i) => Object.assign(
        {}, 
        {id: item[0]}, 
        {info: item[1]}, 
        {messages: messageList[i][1]}
    ))

    const navToChat = useCallback(
        (chat) => {
          history.push(`/chats/${chat}`);
        },
        [history]
      );

    return(
        <Container data-testid="ChatDiv">
                <DivToolbar />
                <Divider />
                <List>
                    {chatData.map((contact: any) => (
                    <ListItem
                        key={contact.id}
                        data-testid="chat"
                        button
                        onClick={navToChat.bind(null, contact.id)}
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