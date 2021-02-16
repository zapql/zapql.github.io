import React, {FC} from 'react'
import { useCallback, useState, useMemo } from 'react';
import moment from 'moment';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem'
import Divider from '@material-ui/core/Divider';
import { createMuiTheme } from "@material-ui/core/styles";
import styled, { ThemeProvider } from "styled-components";

import { History } from 'history';

// esse theme.mixins.toolbar cria o recuo vazio na parte de cima
const DivToolbar = styled.div`
    toolbar: ${props => props.theme.mixins.toolbar};
`

const ChatPicture = styled.img`
  height: 50px;
  width: 50px;
  object-fit: cover;
  border-radius: 50%;
`;

const ChatInfo = styled.div`
  width: calc(100% - 60px);
  height: 46px;
  padding: 15px 0;
  margin-left: 10px;
  border-bottom: 0.5px solid silver;
  position: relative;
`;

const ChatName = styled.div`
  margin-top: 5px;
`;

const MessageContent = styled.div`
  color: gray;
  font-size: 15px;
  margin-top: 5px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const MessageDate = styled.div`
  position: absolute;
  color: gray;
  top: 20px;
  right: 0;
  font-size: 13px;
`;


const theme = createMuiTheme();

interface ChatListProps {
    // history: History;
    data: Array<any>;
}

// const ChatList: FC<ChatListProps> = ({ history, data = [] }) => {
const ChatList: FC<ChatListProps> = ({ data = [] }) => {

    // const navToChat = useCallback(
    //     (chat) => {
    //       history.push(`chats/${chat.id}`);
    //     },
    //     [history]
    //   );

    return (
        <div>
            <Drawer variant="permanent">
            <ThemeProvider theme={theme}>
                <DivToolbar />

            </ThemeProvider>
                <Divider />
                <List>
                    {data.map((chat) => (
                    <ListItem
                        key={chat.id}
                        data-testid="chat"
                        button
                        // onClick={navToChat.bind(null, chat)}
                        >
                        <ChatPicture
                        data-testid="picture"
                        src={chat.picture}
                        alt="Profile"
                        />
                        <ChatInfo>
                        <ChatName data-testid="name">{chat.name}</ChatName>
                        {chat.lastMessage && (
                            <React.Fragment>
                            <MessageContent data-testid="content">
                                {chat.lastMessage.content}
                            </MessageContent>
                            <MessageDate data-testid="date">
                                {moment(chat.lastMessage.createdAt).format('HH:mm')}
                            </MessageDate>
                            </React.Fragment>
                        )}
                        </ChatInfo>
                    </ListItem>
                    ))}
                </List>
            </Drawer>
        </div>
    )
}

export default ChatList
