import React, {FC, useReducer} from 'react'
import moment from 'moment';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem'
import Divider from '@material-ui/core/Divider';
import { DivToolbar, ChatPicture, ChatInfo, ChatName, MessageContent, MessageDate } from './ChatListStyle'

interface ChatListProps {
    chatListData: Array<any>;
}

const ChatList: FC<ChatListProps> = ({ chatListData = [] }) => {
    return (
        <div data-testid="ChatDiv">
                <DivToolbar />
                <Divider />
                <List>
                    {chatListData.map((chat) => (
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
            </div>
    )
}

export default ChatList
